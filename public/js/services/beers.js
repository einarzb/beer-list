app.factory('beerService', function($http, $rootScope){
   
     
  var beerFactory = {beersList: []}; //turned my array onto an object that holds an empty array
  
  //fetching all beers from server API
  beerFactory.getBeers = function(){
    return $http.get('/beers') //returns promise
    //success
      .then(function(response){ 
        // console.log(response.data)
          //copies the data that was received into our beers array
          angular.copy(response.data, beerFactory.beersList); 
          // beerFactory.beersList.push({});
      }, 
      //error
      function(err){ 
        console.error(err)
      });
  }; //end getBeers

  beerFactory.addToList = function(newBeer){
     console.log('from the service')
     console.log(newBeer);
     hardList.push(newBeer);
     console.log(hardList);
  };

  beerFactory.removeFromList = function (index) {
    hardList.splice(index, 1); 
    console.log(index); 
  };


  var hardList = [
    {name:'Preachers Daughter Amber Ale',image:'http://fountainsquarebrewery.com/wp-content/uploads/2017/01/04.png',abv:'6.0%',style:'American Amber'},
    {name:'Workingmans Pilsner',image:'http://fountainsquarebrewery.com/wp-content/uploads/2017/01/05.png',abv:'5.0%',style:'Bohemian style Pilsner'},
    {name:'Hop for Teacher Pale Ale',image:'http://fountainsquarebrewery.com/wp-content/uploads/2017/01/02.png',abv:'5.4%',style:'American Pale'},
    {name:'Backyard Porter',image:'http://fountainsquarebrewery.com/wp-content/uploads/2017/01/03.png',abv:'5.0%',style:'Traditional English Style'}
    ];

  return beerFactory;


});