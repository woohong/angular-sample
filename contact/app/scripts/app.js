'use strict';

/**
 * @ngdoc overview
 * @name contactApp
 * @description
 * # contactApp
 *
 * Main module of the application.
 */
angular
  .module('contactApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'IndexCtrl'
      })
      /*
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      })
      .when('/contact/:id', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      */
      .otherwise({
        redirectTo: '/'
      });
  });
