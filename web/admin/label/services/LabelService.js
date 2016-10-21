/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('LabelService',[]);
    
    adminApiRequests.factory('LabelApi', ['$http', 'env', function($http, env) {
        return {
            getLabels: function(id) {
                return $http.get(env.apiAdminUrl + '/label/labels', {params: {id: id}}); 
            },
            getLabel: function(id) {
                return $http.get(env.apiAdminUrl + '/label/labels/' + id); 
            },
            postLabel: function(label) { 
                return $http.post(env.apiAdminUrl + '/label/labels', {label: label});
            },
            deleteLabel: function(label) { 
                return $http.delete(env.apiAdminUrl + '/label/labels', {label: label});
            }
        };
    }]);
})();
