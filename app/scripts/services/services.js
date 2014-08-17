'use strict';

var hopeServices = angular.module('hopeServices', ['ngResource']);

hopeServices.factory('List', ['$resource',
  function ($resource) {
    // SRG - we'll need a route that allows us to restfully create/update viidatastates. 2/28/14
    return $resource('json/list.json');
  }]);


hopeServices.factory('TestingList', ['$resource',
  function ($resource) {
    // SRG - we'll need a route that allows us to restfully create/update viidatastates. 2/28/14
    return $resource('json/testing-accommodations.json');
  }]);