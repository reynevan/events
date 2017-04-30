angular.module('www.services').factory('Event',Event);

Event.$inject = ['$resource', 'config'];
function Event($resource, config) {
    return $resource(config.apiUrl + '/events/:id');
}