/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('BrandService',[]);
    
    adminApiRequests.factory('BrandApi', ['$http', function($http) {
        return {
            getBrands: function(id) {
                return $http.get('http://lola-rest.com/api/admin/brand/brands', {params: {id: id}}); 
            },
            postBrand: function(brand) { 
                return $http.post('http://lola-rest.com/api/admin/brand/brand', {brand: brand});
            },
            getBrand: function(id) {
                return $http.get('http://lola-rest.com/api/admin/brand/brand/' + id); 
            }
        };
    }]);
})();
