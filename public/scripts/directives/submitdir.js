angular.module('guidebookApp')
.directive('submitdir', function(){
  return {
    templateUrl: 'templates/submit.html',
    replace: true,
    controller: 'submitctrl'
  };
});
