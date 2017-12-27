import _ from 'lodash';
import 'jquery';
import 'bootstrap';

var angular = require('angular');
var angularRoute = require('angular-route');


angular
    .module('homeenvApp', [
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl',
                controllerAs: 'dashboard'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

require('./controllers/dashboard.controller');


