'use strict';

var angular = require('angular');

var guidebookApp = angular.module('guidebookApp')
.directive('navtree', function(){
  return {
    templateUrl: 'templates/navtree.html',
    replace: true,
    controller: 'navtreeCtrl'
  }
});
