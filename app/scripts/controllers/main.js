'use strict';

/**
 * @ngdoc function
 * @name homeenvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the homeenvApp
 */
angular.module('homeenvApp')
  .controller('MainCtrl',['$scope', function ($scope) {
    $scope.test = "test";
  }]);
