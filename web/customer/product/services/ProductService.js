/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var CustomerApiRequests = angular.module('ProductService',[]);
    
    CustomerApiRequests.factory('ProductApi', ['$http', 'env', function($http, env) {
        return {
            getProducts: function(criteria) {
                return $http.get(env.apiUrl + '/shop/product/products', {params: criteria}); 
            },
            getProduct: function(id) {
                return $http.get(env.apiUrl + '/shop/product/products/' + id); 
            },
            addToCart: function(product) {
                var order = {
                  id: product.id,
                  count: product.count
                };
                
                return $http.post(env.apiUrl + '/shop/basket/items', {params: order}); 
            },
            addToWishlist: function(product) {
                var item = {
                  id: product.id
                };
                
                return $http.post(env.apiUrl + '/shop/wishlist/items', {params: item}); 
            }
         };
    }]);
})();
