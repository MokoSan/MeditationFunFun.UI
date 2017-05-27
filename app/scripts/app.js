'use strict';

/**
 * @ngdoc overview
 * @name meditationFunFunApp
 * @description
 * # meditationFunFunApp
 *
 * Main module of the application.
 */
angular
    .module('meditationFunFunApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'xeditable'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/meditate', {
                templateUrl: 'views/meditate.html',
                controller: 'MeditateCtrl',
                controllerAs: 'meditate'
            })
            .otherwise({
                redirectTo: '/'
            });
    });