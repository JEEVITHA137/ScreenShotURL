const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const uuid = require('uuid');

const request = require('request');

const fs = require('fs');

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(express.static('./shots'));


app.get('/download/:file',(req,res) => {
  const filePath = `${__dirname}/shots/${req.params.file}`;
  const type = req.params.file.split(".").slice(-1)[0];
  const fileName = `shot.${type}`; 
  res.download(filePath, fileName);  
});

app.post('/shot',(req,res) => {

  console.log(req.body)
  const fileName  = uuid.v4() + "." +req.body.format; 
  
  request({
      url: "https://api.apiflash.com/v1/urltoimage",
      encoding: "binary",
      qs: {
          access_key: process.env.API_KEY,
          url: req.body.url,
          quality: req.body.quality,
          format: req.body.format,
          full_page : true
      }
  }, (error, response, body) => {
      if (error) {
          console.log(error);
      } else {
          fs.writeFile(`${__dirname}/shots/${fileName}`, body, "binary", error => {
          });

        const image = {
            fileName: fileName
        };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(image);
      }

  });
});


app.get('*' ,(req,res) => {
  res.statusCode = 400;
  res.end("Bad Request path");
});


app.listen(port, () => console.log(`Listening on port ${port}`));