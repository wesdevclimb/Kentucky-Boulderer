'use strict';

angular.module('guidebookApp')
.controller('navtreeCtrl', function($scope, dataService) {

    dataService.getAreas(function(response) {
      var data = response.data;
      $scope.areas = data.areas;
      data.areas.forEach(function(area) {
        console.log(area.name);
      });
      console.log(data);
    });

});
