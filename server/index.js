const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var webshot = require('node-webshot');

var options = {
  screenSize: {
     width: 1024,
     height: 768 
  },
 shotSize: {
   height: 'all'
  }

};

webshot('https://www.w3schools.com/', 'google.jpeg', options, function(err) {
  // screenshot now saved to flickr.jpeg
});

app.listen(port, () => console.log(`Listening on port ${port}`));