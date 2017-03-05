app.controller('mainController', function($scope, beerService) {

  $scope.name;
  $scope.style;
  $scope.abv;
  $scope.image;
  $scope.beerContainer = false;
  $scope.beersList = beerService.beersList;
  $scope.hardList = beerService.hardList;

  $scope.addBeer = function(newBeer) {
    $scope.beerContainer = true; //reveals beer container
    var newBeer = {name: $scope.name, style:$scope.style, abv:$scope.abv, image: $scope.image}; //creats an object
    beerService.addToList(newBeer); //invoke service function and pass the object
    console.log($scope.beersList);
    console.log(newBeer);
  };

});



