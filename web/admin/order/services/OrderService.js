/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('OrderService',[]);
    
    adminApiRequests.factory('OrderApi', ['$http', 'env', function($http, env) {
        return {
            getOrders: function(id) {
                return $http.get(env.apiAdminUrl + '/order/orders', {params: {id: id}}); 
            },
            deleteOrder: function(id) {
                return $http.delete(env.apiAdminUrl + '/order/orders/' + id);
            },
            getOrder: function(id) {
                return $http.get(env.apiAdminUrl + '/order/orders/' + id); 
            }
        };
    }]);
})();
