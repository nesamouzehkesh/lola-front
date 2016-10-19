/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('OrderService',[]);
    
    adminApiRequests.factory('OrderApi', ['$http', function($http) {
        return {
            getOrders: function(id) {
                return $http.get('http://lola-rest.com/api/admin/order/orders', {params: {id: id}}); 
            },
            deleteOrder: function(id) {
                return $http.delete('http://lola-rest.com/api/admin/order/order/' + id);
            },
            getOrder: function(id) {
                return $http.get('http://lola-rest.com/api/admin/order/order/' + id); 
            }
        };
    }]);
})();
