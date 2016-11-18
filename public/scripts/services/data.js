angular.module('guidebookApp')
.service('dataService', function($http, $q) {

  this.getAreas = function(cb) {
    $http.get('/api/areas').then(cb);
  };

  this.saveNewArea = function(area) {
    $http.post('/api/areas/submitarea', area);
  };

  this.saveNewBoulder = function(boulder) {
    $http.post('/api/areas/submitboulder', boulder);
  };

  this.saveNewProblem = function(problem) {
    $http.post('/api/areas/submitproblem', problem);
  };

});
