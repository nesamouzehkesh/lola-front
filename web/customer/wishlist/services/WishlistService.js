/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var CustomerApiRequests = angular.module('WishlistService',[]);
    
    CustomerApiRequests.factory('WishlistApi', ['$http', function($http) {
        return {
            getWishlistItems: function(criteria) {
                return $http.get('http://lola-rest.com/api/customer/product/products', {params: criteria}); 
            }
            
         };
    }]);
})();
