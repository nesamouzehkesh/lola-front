/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('PageService',[]);
    
    adminApiRequests.factory('PageApi', ['$http', 'env', function($http, env) {
        return {
            getPages: function(id) {
                return $http.get(env.apiAdminUrl + '/page/pages', {params: {id: id}}); 
            },
            getPage: function(id) {
                return $http.get(env.apiAdminUrl + '/page/pages/' + id); 
            },
            deletePage: function(id) {
                return $http.delete(env.apiAdminUrl + '/page/pages/' + id);
            },
            postPage: function(page) { 
                return $http.post(env.apiAdminUrl + '/page/pages', {page: page});
            }
        };
    }]);
})();
