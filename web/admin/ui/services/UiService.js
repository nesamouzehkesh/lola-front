/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('UiService',[]);
    
    adminApiRequests.factory('UiApi', ['$http', function($http) {
        return {
            getUis: function(id) {
                return $http.get('http://lola-rest.com/api/admin/ui/uis', {params: {id: id}}); 
            },
            getUi: function(id) {
                return $http.get('http://lola-rest.com/api/admin/ui/ui/' + id); 
            },
            deleteUi: function(id) {
                return $http.delete('http://lola-rest.com/api/admin/ui/ui/' + id);
            },
            postUi: function(ui) { 
                return $http.post('http://lola-rest.com/api/admin/ui/ui', {ui: ui});
            }
            
        };
    }]);
})();
