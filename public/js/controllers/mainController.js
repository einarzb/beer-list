app.controller('mainController', function($scope, beerService) {

  $scope.name;
  $scope.style;
  $scope.abv;
  $scope.image;
  $scope.beerContainer = false;

  //dynamic array
  $scope.beersList = beerService.beerFactory.beersList;
  //hardcoded array
  $scope.hardList = beerService.hardList;

  $scope.addBeer = function(newBeer) {
    $scope.beerContainer = true; //reveals beer container
    var newBeer = {name: $scope.name, style:$scope.style, abv:$scope.abv, image: $scope.image}; //creats an object
    beerService.addToList(newBeer); //invoke service function and pass the object
  };

   $scope.removeFromList = function(index){
      beerService.removeFromList(index);

      //if removes all beer than hide display
      if(beerService.hardList.length === 0){
          $scope.beerContainer = false;
      };
    };  

});



