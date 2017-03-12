app.controller('mainController', function($scope, beerService) {

  $scope.name;
  $scope.style;
  $scope.abv;
  $scope.image;

  //dynamic array
  console.log(beerService)
  $scope.beersList = beerService.beersList;
  //hardcoded array
  $scope.hardList = beerService.hardList;

  $scope.addBeer = function(newBeer) {
    var newBeer = {name: $scope.name, style:$scope.style, abv:$scope.abv, image: $scope.image}; //creats an object
    beerService.addToList(newBeer); //invoke service function and pass the object
  };

   $scope.removeFromList = function(index){
      beerService.removeFromList(index);
    };  

    beerService.getBeers()

});
