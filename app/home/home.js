'use strict';

angular.module('www.home', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        });
    }])
    .controller('HomeController', HomeController);

HomeController.$inject = ['Event'];

function HomeController(Event) {
    var vm = this;
    Event.query(function(data) {
        console.log(data);
    });
}