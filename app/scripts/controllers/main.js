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

    $scope.imagesview = [];
    var lastload = 0;
    $scope.selectedCls = "";
    $scope.classes = [];
    // (function init() {
    //   $scope.imagesview = [];
    //   $http({
    //     method: 'GET',
    //     url: '/rest/api/classifications/0/20'
    //   }).then(function successCallback(response) {
    //     console.log(response.data);
    //     $scope.imagesview = response.data;
    //   }, function errorCallback(response) {
    //     console.log(response);
    //   });
    // })();


    $http({
      method: 'GET',
      url: '/rest/api/classes'
    }).then(function successCallback(response) {
      $scope.classes =  response.data;
    }, function errorCallback(response) {
      console.log(response);
    });

    $scope.loadMore = function() {

      if (!!$scope.selectedCls){

        var pagenum =  ((Math.round($scope.imagesview.length/20)));
        if (lastload != pagenum || pagenum==0){
          lastload = pagenum;
          $http({
            method: 'GET',
            url: '/rest/api/classifications/'+$scope.selectedCls+'/'+pagenum+'/20'
          }).then(function successCallback(response) {
            $scope.imagesview =  $scope.imagesview.concat(response.data);

          }, function errorCallback(response) {
            console.log(response);
          });
        }
      }


    };

    $scope.searchByClass = function () {
      if (!!$scope.selectedCls){
        lastload=0;
        $scope.imagesview = [];
        $scope.loadMore();
      }
    }
  }]);
