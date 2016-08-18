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
            deleteProduct: function(id) {
                return $http.delete('http://lola-rest.com/api/admin/product/product/' + id);
            },
            postCategory: function(category) { 
                return $http.post('http://lola-rest.com/api/admin/product/product', {category: category});
            },
            getProductCategories: function() {
                return $http.get('http://lola-rest.com/api/admin/category/categories');
            }
        };
    }]);
})();
