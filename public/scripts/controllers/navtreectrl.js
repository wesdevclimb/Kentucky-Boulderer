'use strict';

angular.module('guidebookApp')
.controller('navtreeCtrl', function($scope, dataService) {

    dataService.getAreas(function(response) {
      var areas = response.data;
      console.log(response.data);
      $scope.areas = areas;
    });

});
