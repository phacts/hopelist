'use strict';

/**
 * @ngdoc function
 * @name hopelistApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hopelistApp
 */
angular.module('hopelistApp')
  .controller('CreatorCtrl', ['$scope', 'TestingList', function ($scope, TestingList) {
    

    $scope.input = {};
    $scope.input.values = [];
    $scope.list = [];
    $scope.items = [];
    $scope.numberTrue = 0;

    $scope.preparePrint = function ($event) {
      $event.preventDefault();

      $scope.$broadcast('preparePrint');

      window.print();
    };

    $scope.$watchCollection('input.values', function() {
      // console.log('collection watched');
      $scope.$broadcast('listUpdated');
    });
    
    TestingList.get(function (response) {
      // console.log(response, 'this is the response for the testing list');
      for (var i=0; i < response.items.length; i++) {
        $scope.input.values[i] = false;
      }
      $scope.items = response.items;      
    },
    function (error) {
      console.log(error, 'this is the error while retrieving the list');
    });  


  }]);
