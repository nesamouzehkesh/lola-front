/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('UserService',[]);
    
    adminApiRequests.factory('UserApi', ['$http', 'env', function($http, env) {
        return {
            getUsers: function(id) {
                return $http.get(env.apiAdminUrl + '/user/users', {params: {id: id}}); 
            },
            getUser: function(id) {
                return $http.get(env.apiAdminUrl + '/user/users/' + id); 
            },
            postUser: function(customer) { 
                return $http.post(env.apiAdminUrl + '/user/users', {customer: customer});
            },
            deleteUser: function(id) {
                return $http.delete(env.apiAdminUrl + '/user/users/' + id);
            },
            getOrders: function() {
                return $http.get(env.apiAdminUrl + '/order/orders');
            },
            getOrder: function(id) {
                return $http.get(env.apiAdminUrl + '/order/orders/' + id); 
            },
            deleteOrder: function(id) {
                return $http.delete(env.apiAdminUrl + '/order/orders/' + id);
            },
            getUserOrders: function(id) {
                return $http.get(env.apiAdminUrl + '/order/user-orders/' + id);
            }
        };
    }]);
})();
