/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('CategoryService',[]);
    
    adminApiRequests.factory('CategoryApi', ['$http', 'env', function($http, env) {
        return {
            getCategories: function(id) {
                return $http.get(env.apiAdminUrl + '/category/categories', {params: {id: id}}); 
            },
            getCategory: function(id) {
                return $http.get(env.apiAdminUrl + '/category/categories/' + id); 
            },
            deleteCategory: function(id) {
                return $http.delete(env.apiAdminUrl + '/category/categories/' + id);
            },
            postCategory: function(category) { 
                return $http.post(env.apiAdminUrl + '/category/categories', {category: category});
            }
        };
    }]);
})();
