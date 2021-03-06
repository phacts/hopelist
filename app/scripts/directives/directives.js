'use strict';

/* Directives */

// SRG - create a help text directive (this will probably get moved). 2/28/14
angular.module('hopeDirectives', [])

  // SRG - a simple directive to add the class field-error based on the passed in value. 3/13/14
  .directive('toggler', [function() {
    return {
      restrict: 'E',
      scope: {
        target: '@'
      },
      controller: function ($scope, $element) {
        $scope.toggle = false;
        $scope.applyHiddenPrint = false;

        $scope.$watch('toggle', function(newval) {
          if ($($scope.target).html() === '') {
            //console.log($($scope.target).html(), 'html...');
            $($scope.target).hide();
            $element.hide();
            return;
          }
          if (newval) {
            $($scope.target).slideDown('fast');
          }
          else {
            $($scope.target).slideUp('fast');
          }
        });
      },
      templateUrl: 'views/partials/toggler.html'
    };
  }])

  .directive('toggleClassOnAllFalse', [function() {
    return {
      restrict: 'A',
      scope: {
        newClass: '@toggleClassOnAllFalse',
        values: '='
      },
      controller: ['$scope', '$element', function($scope, $element) {


        $scope.$on('preparePrint', function() {
          // console.log(event, 'this is the event');
          var atLeastOneTrue = false;
          // console.log($scope.values, 'these are values...');
          if (angular.isArray($scope.values)) {
            
            for (var i=0; i < $scope.values.length; i++) {
              if ($scope.values[i]) {
                atLeastOneTrue = true;
                break;
              }
            }
          }
          if (atLeastOneTrue) {
            $element.removeClass($scope.newClass);
          }
          else {
            $element.addClass($scope.newClass);
          }
        });

      }]
    };
  }])


  .directive('hiddenPrint', [function() {
    return {
      restrict: 'A',
      scope: {
        hiddenPrint: '=',
        active: '='
      },
      controller: ['$scope', '$element', function($scope, $element) {

        if (!$scope.active) {
          $element.addClass('hidden-print');
        }

        $scope.$on('preparePrint', function() {
          if ($scope.hiddenPrint && $scope.active && $element.hasClass('hidden-print')) {
            console.log($element.attr('style'), 'style of element...');
            
            $element.removeClass('hidden-print');
          }
          else if (!$scope.hiddenPrint && !$element.hasClass('hidden-print')) {
            $element.addClass('hidden-print');
          }

          if ($scope.hiddenPrint && $scope.active && ($element.attr('style') === 'display: none;')) {
            $element.attr('style', 'display: block;');
          }
        });


        // $scope.$on('finishedPrint', function() {
        //   if ($scope.active && $element.hasClass('removed-hidden-print')) {
        //     console.log($element.attr('style'), 'style of element... after');
        //     $element.removeClass('removed-hidden-print').addClass('hidden-print');
        //     if ($element.hasClass('changed-display-block')) {
        //       $element.attr('style', 'display:none;');
        //     }
        //   }
        // });

      }]
    };
  }])


  .directive('copyMe', [function() {
    return {
      restrict: 'E',
      scope: {
        list: '=',
        values: '='
      },
      controller: ['$scope', function($scope) {

        $scope.renderedList = [];

        $scope.$on('listUpdated', function() {
          // console.log($scope.list, 'list updated');
          // console.log($scope.values, 'list values');
          if (angular.isArray($scope.list)) {
            $scope.renderedList = [];
            for (var i=0; i < $scope.list.length; i++) {
              if ($scope.list[i] && !angular.isUndefined($scope.values[i])) {
                $scope.renderedList.push($scope.values[i]);
              }
            }
          }
          // console.log($scope.renderedList, 'renderedList');
        });

        

      }],
      templateUrl: 'views/partials/copy-list.html'
    };
  }])
;