angular.module('guidebookApp')
.directive('navtreedir', function(){
  return {
    templateUrl: 'templates/navtree.html',
    replace: true,
    controller: 'navtreeCtrl'
  }
});
