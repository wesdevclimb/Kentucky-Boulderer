angular.module('guidebookApp')
.controller('submitBoulderCtrl', function($scope, $window, dataService) {
  //------------Clean up the dataService.getAreas method by creating a function on the controller that filters the data retrieved by the data service.
  //------------$scope.filterData = function(rawData) {return filteredData};
  //------------Call the filterData function in the controller so that it looks nice and is easily read.
  dataService.getAreas(
    function(res) {
    var data = res.data;
    var filteredData = [];
    data.areas.forEach(function(area) {
      filteredData.push(area);
    });
    filteredData.forEach(function(area) {
      data.boulders.forEach(function(boulder) {
        if(area._id === boulder.parentArea) {
          area.boulders.push(boulder);
        }
      });
      area.boulders.forEach(function(boulder) {
        data.problems.forEach(function(problem) {
          if(boulder._id === problem.parentBoulder) {
            boulder.problems.push(problem);
          }
        });
      });
    });
    $scope.areas = filteredData;
  });

  $scope.boulder = {};

  $scope.saveNewBoulder = dataService.saveNewBoulder;

  $scope.logResult = function(boulder) {
    console.log(boulder);
  };

  $scope.reloadRoute = function() {
    $window.location.reload();
  };

});
