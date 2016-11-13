'use strict';

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
          } else {
            console.log("your plan did not work asshole");
          }
        });
      });

      console.log(filteredData);

      $scope.areas = filteredData;

    });

});
