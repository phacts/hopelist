'use strict';

/**
 * @ngdoc function
 * @name hopelistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hopelistApp
 */
angular.module('hopelistApp')
  .controller('MainCtrl', ['$scope', 'List', function ($scope, List) {

    $scope.input = {};
    $scope.input.values = [];
    $scope.toggles = [];
    $scope.includeDescriptions = false;


    $scope.initInput = function (lists) {
      // SRG - initialize the input values...
      if ($scope.input.values.length === 0) {
        for (var i=0; i < lists.length; i++) {
          $scope.input.values[i] = []; // SRG - initialize this as an array.
          for (var j=0; j < lists[i].items.length; j++) {
            $scope.input.values[i][j] = false; // SRG - initialize with false
          }
          $scope.toggles[i] = false;
        }
      }
    };

    $scope.toggleAll = function (arr, onOrOff) {
      // SRG - loop over the array at the index and toggle the value on or off
      if (angular.isArray(arr)) {
        for (var i=0; i < arr.length; i++) {
          arr[i] = onOrOff;
        }
      }
    };


    $scope.preparePrint = function ($event) {
      $event.preventDefault();

      $scope.$broadcast('preparePrint', $scope.includeDescriptions);

      window.print();

      // $scope.$broadcast('finishedPrint', $scope.includeDescriptions);
    };
    
    List.get(function (response) {
      console.log(response, 'this is the response for the list');
      $scope.initInput(response.lists);
      $scope.lists = response.lists;      
    },
    function (error) {
      console.log(error, 'this is the error while retrieving the list');
    });  





  }]);
