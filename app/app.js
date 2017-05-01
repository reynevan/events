'use strict';

// Declare app level module which depends on views, and components
angular.module('www', [
  'ngRoute',
  'www.home',
  'www.services',
  'restangular'
]).
config(['$locationProvider', '$routeProvider', 'RestangularProvider', function($locationProvider, $routeProvider, RestangularProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/dupa'});

    RestangularProvider.setBaseUrl('http://api.events.dev');
}]);

angular.module('www.services', []);
