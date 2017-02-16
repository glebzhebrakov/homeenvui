'use strict';

/**
 * @ngdoc function
 * @name homeenvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the homeenvApp
 */
angular.module('homeenvApp')
  .controller('MainCtrl',['$scope','$http', function ($scope, $http) {

    $scope.clsimages = [];

    $http({
      method: 'GET',
      url: '/rest/api/classifications/all'
    }).then(function successCallback(response) {
      console.log(response.data);
      $scope.clsimages = response.data;
    }, function errorCallback(response) {
      console.log(response);
    });
  }]);
