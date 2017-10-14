'use strict';

/**
 * @ngdoc function
 * @name angularJsexamApp.controller:UserListCtrl
 * @description
 * # UserListCtrl
 * Controller of the angularJsexamApp
 */
angular.module('angularJsexamApp')
  .controller('UserListCtrl', [ 
  	"Data", "$scope", "$state", function (Data, $scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.$on('$viewContentLoaded', function() {
    	$scope.requestUserList();
    });

    $scope.userList = [];
    $scope.requestUserList = function() {
    	var dataPromise = Data.getData(
    		'http://127.0.0.1:52273/user');
    	dataPromise.then(function(results) {
    		$scope.userList = results.data;
    	}, function(reason){},function(update){});

    }

  }]);
