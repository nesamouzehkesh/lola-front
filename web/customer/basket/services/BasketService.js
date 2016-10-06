/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var CustomerApiRequests = angular.module('BasketService',[]);
    
    CustomerApiRequests.factory('BasketApi', ['$http', function($http) {
        return {
            getBasketItems: function() {
                return $http.get('http://lola-rest.com/api/customer/basket/items'); 
            },
            deleteBasketItem: function(id) {
                return $http.delete('http://lola-rest.com/api/customer/basket/item/' + id);
            }
            
         };
    }]);
})();
