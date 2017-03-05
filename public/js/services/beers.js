app.factory('beerService', function($http){
  
  var beersList = []; //USER


  var addToList = function(newBeer){
     console.log('from the service')
     console.log(newBeer);
     beersList.push(newBeer);
     console.log(beersList);
  };


  return {
    beersList:beersList,
    addToList:addToList
  }

});
