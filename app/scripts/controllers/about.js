'use strict';

/**
 * @ngdoc function
 * @name hopelistApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hopelistApp
 */
angular.module('hopelistApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
