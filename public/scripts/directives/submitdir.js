angular.module('guidebookApp')
.directive('submitdir', function(){
  return {
    templateUrl: 'templates/submitarea.html',
    replace: true,
    controller: 'submitAreaCtrl'
  };
});
