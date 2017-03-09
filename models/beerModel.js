var mongoose = require('mongoose');
var Schema = mongoose.Schema; //the function that constructs objects

var beerSchema = new Schema ({ 
  name: String,
  style: String,
  image:String,
  abv: Number
});

var Beer = mongoose.model('BeerModel', beerSchema); 
module.exports = Beer;
//when we require this file we want to return the object that was assigned to module.export.

// var goldstar = new Beer ({
//   name: "goldstar" ,
//   style: "malt",
//   image: "http://bit.ly/1XtmB4d",
//   abv: 4.5
// });

// goldstar.save(function(err, res){
//   if(err){console.log(err);}
//   console.log(res);
// });