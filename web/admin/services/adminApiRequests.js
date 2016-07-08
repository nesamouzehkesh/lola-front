/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('adminApiRequests',[]);
    
    adminApiRequests.factory('ProductServices', ['$http', function($http) {
        return {
            adminGetProducts: function(id) {
                return $http.get('http://lola-rest.com/api/admin/product/products', {params: {id: id}}); 
            },
            adminDeleteProduct: function(id) {
                return $http.delete('http://lola-rest.com/api/admin/product/product/' + id);
            },
            
            adminAddProduct: function(id) { 
                return $http.post('http://lola-rest.com/api/admin/product/product/' + id);
            },
            
            adminGetProductCategories: function() {
                return $http.get('http://lola-rest.com/api/admin/category/categories');
            }
            
        };
    }]);
})();
