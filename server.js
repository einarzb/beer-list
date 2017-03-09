var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Beer = require("./models/BeerModel")

mongoose.connect('mongodb://localhost/beerslist');

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/beers', function(req, res, next) {
  console.log("beer"); 

  res.json({beers: [
    { name: '512 IPA', style: 'IPA', image: 'http://bit.ly/1XtmB4d', abv: 5 },
    { name: '512 Pecan Porter', style: 'Porter', image: 'http://bit.ly/1Vk5xj4', abv: 4 }
  ]});
});



app.listen(8000, function() {
  console.log("beer list project. Listening on 8000.")

});
