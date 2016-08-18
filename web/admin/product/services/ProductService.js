/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('ProductService',[]);
    
    adminApiRequests.factory('ProductApi', ['$http', function($http) {
        return {
            getProducts: function(criteria) {
                return $http.get('http://lola-rest.com/api/admin/product/products', {params: criteria}); 
            },
            getProduct: function(id) {
                return $http.get('http://lola-rest.com/api/admin/product/product/' + id); 
            },
            deleteProduct: function(id) {
                return $http.delete('http://lola-rest.com/api/admin/product/product/' + id);
            },
            postProduct: function(product) { 
                return $http.post('http://lola-rest.com/api/admin/product/product', {product: product});
            },
            getProductCategories: function() {
                return $http.get('http://lola-rest.com/api/admin/category/categories');
            }
        };
    }]);
})();
