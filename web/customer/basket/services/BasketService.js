/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var CustomerApiRequests = angular.module('BasketService',[]);
    
    CustomerApiRequests.factory('BasketApi', ['$http', 'env', function($http, env) {
        return {
            getBasketItems: function() {
                return $http.get(env.apiUrl + '/shop/basket/items'); 
            },
            deleteBasketItem: function(id) {
                return $http.delete(env.apiUrl + '/shop/basket/items/' + id);
            },
            updateItemQuantity : function(item) {
                var thisItemQuant = {
                  quantity: item.quantity
                };
                
                return $http.post(env.apiUrl + '/shop/basket/items/' + item.id, {params: thisItemQuant}); 
            },
            getCustomerAddress: function () {
                return $http.get(env.apiUrl + '/shop/user/address'); 
            },
            submitOrder : function(params) {
                return $http.post(env.apiUrl + '/shop/order/orders', params); /* 
            * This is actually the address info of the order that custmer submits after filling the address 
            * form but for API routing problems the prefix had to be "/api/admin/order" this needs to be fixed!*/
            },
            getOrderDetails: function(orderId) {
                return $http.get(env.apiUrl + '/shop/order/orders/' + orderId + '/details'); 
            }
         };
    }]);
})();
