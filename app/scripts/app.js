'use strict';

/**
 * @ngdoc overview
 * @name hopelistApp
 * @description
 * # hopelistApp
 *
 * Main module of the application.
 */
angular
  .module('hopelistApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'hopeServices',
    'hopeDirectives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/creator', {
        templateUrl: 'views/creator.html',
        controller: 'CreatorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
