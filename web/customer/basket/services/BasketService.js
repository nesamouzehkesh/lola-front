/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var CustomerApiRequests = angular.module('BasketService',[]);
    
    CustomerApiRequests.factory('BasketApi', ['$http', function($http) {
        return {
            getBasketItems: function(criteria) {
                return $http.get('http://lola-rest.com/api/customer/product/products', {params: criteria}); 
            }
            
         };
    }]);
})();
