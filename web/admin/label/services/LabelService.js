/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('LabelService',[]);
    
    adminApiRequests.factory('LabelApi', ['$http', function($http) {
        return {
            getLabels: function(id) {
                return $http.get('http://lola-rest.com/api/admin/label/labels', {params: {id: id}}); 
            }
        };
    }]);
})();
