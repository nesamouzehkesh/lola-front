/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('ProductService',[]);
    
    adminApiRequests.factory('ProductApi', ['$http', 'env', function($http, env) {
        return {
            getProducts: function(criteria) {
                return $http.get(env.apiAdminUrl + '/product/products', {params: criteria}); 
            },
            getProduct: function(id) {
                return $http.get(env.apiAdminUrl + '/product/product/' + id); 
            },
            deleteProduct: function(id) {
                return $http.delete(env.apiAdminUrl + '/product/product/' + id);
            },
            postProduct: function(product) { 
                return $http.post(env.apiAdminUrl + '/product/product', {product: product});
            },
            getCategories: function() {
                return $http.get(env.apiAdminUrl + '/category/categories');
            },
            getLabels: function() {
                return $http.get(env.apiAdminUrl + '/label/labels');
            },
            getBrands: function() {
                return $http.get(env.apiAdminUrl + '/brand/brands');
            }
        };
    }]);
})();
