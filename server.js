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

//connectong DB to route
app.get('/beers', function (req, res, next) {

console.log('einarrrr')
    Beer.find(function (error, beers) { //beers is db name
          if (error) {
            console.error(error)
            return next(error); //express next function. middleware
          } else {
            console.log('einarrrr')
            res.send(beers);
            console.log(beers);
          }
     });
});

//adding beers

app.post('/beers', function (req, res, next) {
    var beer = new Beer(req.body); //created a new Beer instance using the hard coded data on req.body

    beer.save(function(err,beer){ //saving the beer object
      if (err) {
        console.error(err)
        return next(err); //middleware
      }else{
        res.json(beer); //return the json obj to CLIENT
      }
    }); 
});

/* short way to do that: 
app.post('/beers', function(req, res, next) {
  Beer.create(req.body, function(err, beer) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.json(beer);
    }
  });
});
*/

//delete
app.delete('/beers/:id', function(req, res, next){ //id is placeholder for 58c529809b1b69d3cdcf1940
  // var id = req.params.id;
  // console.log(id);
  // res.send("delete route");
  Beer.remove({_id: req.params.id},function(err){
    if(err){
      console.error(err);
      return next (err);
    }else{
    res.send("beer deleted");  
    }
  });
});

//update 
app.put('/beers/:id', function(req, res, next){
  Beer.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}).exec(function(beer, err){ //pass 3 things: id, req.body, boolean and func
     if(err){
      console.error(err);
      return next (err);
    }else{
      res.send(beer);
    }
  });
});

//error
app.use(function(req, res, next){
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

// warning - not for use in production code!
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

//starter
app.listen(8000, function() {
  console.log("beer list project. Listening on 8000.")
});
