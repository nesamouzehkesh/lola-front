/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var CustomerApiRequests = angular.module('ProductService',[]);
    
    CustomerApiRequests.factory('ProductApi', ['$http', function($http) {
        return {
            getProducts: function(criteria) {
                return $http.get('http://lola-rest.com/api/customer/product/products', {params: criteria}); 
            },
            getProduct: function(id) {
                return $http.get('http://lola-rest.com/api/admin/product/product/' + id); 
            },
            addToCart: function(product) {
                var order = {
                  id: product.id,
                  count: product.count
                };
                
                return $http.post('http://lola-rest.com/api/customer/basket/items', {params: order}); 
            }
         };
    }]);
})();
