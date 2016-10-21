/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('ThemeService',[]);
    
    adminApiRequests.factory('ThemeApi', ['$http', 'env', function($http, env) {
        return {
            getThemes: function(id) {
                return $http.get(env.apiAdminUrl + '/theme/themes', {params: {id: id}}); 
            },
            getTheme: function(id) {
                return $http.get(env.apiAdminUrl + '/theme/themes/' + id); 
            },
            deleteTheme: function(id) {
                return $http.delete(env.apiAdminUrl + '/theme/themes/' + id);
            },
            postTheme: function(theme) { 
                return $http.post(env.apiAdminUrl + '/theme/themes', {theme: theme});
            }
        };
    }]);
})();
