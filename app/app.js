'use strict';

// Declare app level module which depends on views, and components
angular.module('www', [
  'ngRoute',
  'ngResource',
  'www.home',
  'www.services'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/dupa'});
}]);

angular.module('www.services', []);
