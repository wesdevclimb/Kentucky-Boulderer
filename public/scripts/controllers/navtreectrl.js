angular.module('guidebookApp')
.controller('navtreeCtrl', function($scope, dataService) {

    dataService.getAreas(function(res) {
      var data = res.data;

      console.log(data);

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

      console.log(filteredData);

      $scope.areas = filteredData;

    });

});
