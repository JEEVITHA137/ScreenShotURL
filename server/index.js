const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var webshot = require('node-webshot');

var options = {
  windowSize: {
     width: 1024,
     height: 768 
  },
 shotSize: {
   height: 'all'
  },
  quality:75,
  renderDelay:20
};


app.get('/:link',(req,res) => {
  console.log(req.params.link)


  // webshot(req.params.link, 'google.png', options, function(err) {
  //   if(err)  
  //     console.log(err);
  //   else
  //     console.log("ScreenShot Ready");
  // });
});



app.listen(port, () => console.log(`Listening on port ${port}`));