//package and module requirements
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Beer = require("./models/beerModel") // ./ means local module and not something from npm

var app = express();
mongoose.connect('mongodb://localhost/beers');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(express.static('node_modules'));

//API routes
app.get('/', function(req, res, next){
  res.send('testing server')
});

app.get('/beers', function (req, res, next) {
  Beer.find(function (error, beers) { //beers is db name
    if (error) {
      console.error(error)
      return next(error);
    } else {
      res.send(beers);
      console.log("sepouse to console my db objects");
    }
  });
});

app.post('/beers', function (req, res, next) {
  Beer.create(req.body, function(err,beer){ //beer is an object
    if (err) {
      console.error(err)
      return next(err);
    }else{
      res.json(beer); //return the json obj
    }
  }); 
});

app.delete('/beers/:id', function(req, res, next){

  Beer.remove({_id:req.params.id}, function(err){
    if (err){
      console.error(err);
      return next(err);
    } else {
      res.send("beer deleted");
      console.log("beer removed");
    }
  });
  // console.log(req.params.id);
  // res.send(req.params.id);
});


app.listen(8000, function() {
  console.log("beer list project. Listening on 8000.")
});
