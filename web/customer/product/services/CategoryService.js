/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var CustomerApiRequests = angular.module('CategoryService',[]);
    
    CustomerApiRequests.factory('CategoryApi', ['$http', 'env', function($http, env) {
        return {
            getCategories: function(id) {
                return $http.get(env.apiUrl + '/shop/category/categories', {params: {id: id}}); 
            },
            getCategory: function(id) {
                return $http.get(env.apiUrl + '/shop/category/categories/' + id); 
            }
        };
    }]);
})();
