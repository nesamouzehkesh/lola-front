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
            getCustomerAddress: function () {
                return $http.get('http://lola-rest.com/api/admin/customer/shipping'); 
            },
            deleteBasketItem: function(id) {
                return $http.delete('http://lola-rest.com/api/customer/basket/items/' + id);
            },
            updateItemQuantity : function(item) {
                var thisItemQuant = {
                  quantity: item.quantity
                };
                
                return $http.post('http://lola-rest.com/api/customer/basket/items/' + item.id, {params: thisItemQuant}); 
            },
            submitOrder : function(params) {
                return $http.post('http://lola-rest.com/api/admin/order/postorder/', {params: params}); /* 
            * This is actually the order that custmer submits after filling the address form but 
            * for API routing problems the prefix had to be "/api/admin/order" this needs to be fixed!*/
            }
         };
    }]);
})();
