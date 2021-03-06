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
    vm.Events = [
        {'name': 'Event 1', description: 'Opis eventu 1'},
        {'name': 'Event 2', description: 'Opis eventu 2'},
        {'name': 'Event 3', description: 'Opis eventu 3'}
    ];
    //Event.getAll().then(getSuccess, getFailed);

    function getSuccess(events) {
        vm.Events = events;
    }

    function getFailed() {
        console.error('error');
    }
}