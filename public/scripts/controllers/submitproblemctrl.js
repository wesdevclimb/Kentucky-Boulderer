angular.module('guidebookApp')
.controller('submitProblemCtrl', function($scope, $route, dataService) {

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

  $scope.problem = {};

  $scope.parentAreaBoulders = [];

  $scope.saveNewProblem = dataService.saveNewProblem;

  $scope.logResult = function(problem) {
    console.log(problem);
  };

  $scope.reloadRoute = function () {
    $route.reload();
  };

});
