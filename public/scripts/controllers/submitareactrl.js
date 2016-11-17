angular.module('guidebookApp')
.controller('submitAreaCtrl', function($scope, dataService) {
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

  $scope.master = {};

  $scope.update = function(area) {
    $scope.master = angular.copy(area);
    console.log($scope.master);
  };

  $scope.reset = function() {
    $scope.area = angular.copy($scope.master);
  };

  $scope.saveNewArea = dataService.saveNewArea;

});
