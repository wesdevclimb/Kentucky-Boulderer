guidebookApp.controller('navtreeCtrl', function($scope, dataService) {

    dataService.getAreas(function(response) {
      var areas = response.data.areas;
      $scope.areas = areas;
    });

});
