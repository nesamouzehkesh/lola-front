/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var CustomerApiRequests = angular.module('WishlistService',[]);
    
    CustomerApiRequests.factory('WishlistApi', ['$http', 'env', function($http, env) {
        return {
            getWishlistItems: function(criteria) {
                return $http.get(env.apiUrl + '/shop/wishlist/items', {params: criteria}); 
            }
         };
    }]);
})();
