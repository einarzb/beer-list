var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beerslist');
var Beer = require("./models/beerModel")

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function(req, res, next){
  res.send('testing server')
});

app.get('/beers', function(req, res, next) {
  console.log("beer"); 

  res.json({
    beers: [
        { name: '512 IPA', style: 'IPA', image: 'http://bit.ly/1XtmB4d', abv: 5, rating: 5, averageRating: 5},
        { name: '512 Pecan Porter', style: 'Porter', image: 'http://bit.ly/1Vk5xj4', abv: 4, rating: 3, averageRating: 2}
  ]});
});

app.listen(8000, function() {
  console.log("beer list project. Listening on 8000.")
});
