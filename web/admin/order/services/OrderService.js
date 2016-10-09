/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('PageService',[]);
    
    adminApiRequests.factory('PageApi', ['$http', function($http) {
        return {
            getOrders: function(id) {
                return $http.get('http://lola-rest.com/api/admin/order/orders', {params: {id: id}}); 
            },
            getOrder: function(id) {
                return $http.get('http://lola-rest.com/api/admin/order/order/' + id); 
            },
            getOrderDetails: function(id) { 
                return $http.post('http://lola-rest.com/api/admin/order/details' + id);
            }
        };
    }]);
})();
