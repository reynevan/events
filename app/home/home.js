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

    Event.getAll().then(getSuccess, getFailed);

    function getSuccess(events) {
        vm.Events = events;
    }

    function getFailed() {
        console.error('error');
    }
}