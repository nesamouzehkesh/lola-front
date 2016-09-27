/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('CategoryService',[]);
    
    adminApiRequests.factory('CategoryApi', ['$http', function($http) {
        return {
            getCategories: function(id) {
                return $http.get('http://lola-rest.com/api/admin/category/categories', {params: {id: id}}); 
            },
            getCategory: function(id) {
                return $http.get('http://lola-rest.com/api/admin/category/category/' + id); 
            },
        };
    }]);
})();
