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
            deleteProduct: function(id) {
                return $http.delete('http://lola-rest.com/api/product/products', {id: id});
            },
            getProductCategories: function() {
                return $http.get('http://lola-rest.com/api/category/categories');
            }
        };
    }]);
})();
