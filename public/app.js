var guidebookApp = angular.module('guidebookApp', ['ngRoute']);

guidebookApp.config(function($routeProvider) {
  $routeProvider

    //route for the home page
    .when('/', {
      templateUrl: './templates/home.html',
      controller: 'homeCtrl'
    })

    //route for new area submit form
    .when('/submitarea', {
      templateUrl: './templates/submitarea.html',
      controller: 'submitAreaCtrl'
    })

    //route for new boulder submit form
    .when('/submitboulder', {
      templateUrl: './templates/submitboulder.html',
      controller: 'submitBoulderCtrl'
    })

    .when('/submitproblem', {
      templateUrl: './templates/submitproblem.html',
      controller: 'submitProblemCtrl'
    });

});
