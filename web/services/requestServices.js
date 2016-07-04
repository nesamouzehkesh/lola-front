/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var RequestServices = angular.module('RequestServices',[]);
    
    RequestServices.factory('ProductRepository', ['$http', function($http) {
        return {
            getAllProducts: function() {
                return $http.get('http://lola-rest.com/api/product/products');
            },
            
            getProductCategories: function() {
                return $http.get('http://lola-rest.com/api/admin/category/categories');
            }
        };
    }]);
})();
