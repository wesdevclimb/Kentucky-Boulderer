angular.module('guidebookApp')
.service('dataService', function($http, $q) {

  this.getAreas = function(cb) {
    $http.get('/api/areas').then(cb);
  };

  this.saveNewArea = function(area) {
    $http.post('/api/areas/submitarea', area);
  };

});
