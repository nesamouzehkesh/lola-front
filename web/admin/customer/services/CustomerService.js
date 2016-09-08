/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('CustomerService',[]);
    
    adminApiRequests.factory('CustomerApi', ['$http', function($http) {
        return {
            getCustomers: function(id) {
                return $http.get('http://lola-rest.com/api/admin/customer/customers', {params: {id: id}}); 
            },
            getCustomer: function(id) {
                return $http.get('http://lola-rest.com/api/admin/customer/customer/' + id); 
            },
             postCustomer: function(customer) { 
                return $http.post('http://lola-rest.com/api/admin/customer/customer', {customer: customer});
            }
        };
    }]);
})();
