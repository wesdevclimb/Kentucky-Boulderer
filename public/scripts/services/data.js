angular.module('guidebookApp')
.service('dataService', function($http, $q) {
  this.getAreas = function(cb) {
    $http.get('/mock/todos').then(cb);
  };
});
