/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('PageService',[]);
    
    adminApiRequests.factory('PageApi', ['$http', function($http) {
        return {
            getPages: function(id) {
                return $http.get('http://lola-rest.com/api/admin/page/pages', {params: {id: id}}); 
            },
            getPage: function(id) {
                return $http.get('http://lola-rest.com/api/admin/page/page/' + id); 
            },
            deletePage: function(id) {
                return $http.delete('http://lola-rest.com/api/admin/page/page/' + id);
            },
            postPage: function(page) { 
                return $http.post('http://lola-rest.com/api/admin/page/page', {page: page});
            }
        };
    }]);
})();
