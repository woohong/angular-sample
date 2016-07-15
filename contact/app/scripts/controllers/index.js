'use strict';

/**
 * @ngdoc function
 * @name contactApp.controller:IndexctrlCtrl
 * @description
 * # IndexctrlCtrl
 * Controller of the contactApp
 */
angular.module('contactApp')
  .controller('IndexCtrl', function ($scope, ContactService) {
    console.log('IndexCtrl invoked..');
    $scope.contacts = ContactService.getAllContacts();
  });
