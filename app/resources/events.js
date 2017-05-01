angular.module('www.services').service('Event',Event);

Event.$inject = ['Restangular', '$q'];
function Event(Restangular, $q) {

    var basePath = 'events';

    this.getAll = getAll;

    function getAll() {

        return Restangular.one(basePath).get().then(successGetAll, failedDefault);
    }

    function successGetAll(data) {
        data = Restangular.stripRestangular(data);
        var deferred = $q.defer();
        if (data.meta && data.meta.success && data.Events) {
            deferred.resolve(data.Events);
        } else {
            deferred.reject(data);
        }
        return deferred.promise;
    }

    function successDefault(data) {
        data = Restangular.stripRestangular(data);
        var deferred = $q.defer();
        if (data.meta && data.meta.success) {
            deferred.resolve(data);
        } else {
            deferred.reject(data);
        }
        return deferred.promise;
    }

    function failedDefault() {
        var deferred = $q.defer();
        deferred.reject();
        return deferred.promise;
    }
}