/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('BrandService',[]);
    
    adminApiRequests.factory('BrandApi', ['$http', 'env', function($http, env) {
        return {
            getBrands: function(id) {
                return $http.get(env.apiAdminUrl + '/brand/brands', {params: {id: id}}); 
            },
            postBrand: function(brand) { 
                return $http.post(env.apiAdminUrl + '/brand/brands', {brand: brand});
            },
            getBrand: function(id) {
                return $http.get(env.apiAdminUrl + '/brand/brands/' + id); 
            },
            deleteBrand: function(id) {
                return $http.delete(env.apiAdminUrl + '/brand/brands/' + id);
            }
        };
    }]);
})();
