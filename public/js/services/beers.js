app.factory('beerService', function($http){
  
  var beersList = []; //USER

  var hardList = [
  {name:'Preachers Daughter Amber Ale',image:'http://fountainsquarebrewery.com/wp-content/uploads/2017/01/04.png',abv:'6.0%',style:'American Amber'},
  {name:'Workingmans Pilsner',image:'http://fountainsquarebrewery.com/wp-content/uploads/2017/01/05.png',abv:'5.0%',style:'Bohemian style Pilsner'},
  {name:'Hop for Teacher Pale Ale',image:'http://fountainsquarebrewery.com/wp-content/uploads/2017/01/02.png',abv:'5.4%',style:'American Pale'},
  {name:'Backyard Porter',image:'http://fountainsquarebrewery.com/wp-content/uploads/2017/01/03.png',abv:'5.0%',style:'Traditional English Style'}
  ];

  var addToList = function(newBeer){
     console.log('from the service')
     console.log(newBeer);
     beersList.push(newBeer);
     console.log(beersList);
  };


  return {
    beersList:beersList,
    addToList:addToList,
    hardList:hardList
  }

});
