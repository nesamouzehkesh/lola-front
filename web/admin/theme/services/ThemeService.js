/* 
 * This service is for all the RESTful APIs requests to the backend;
 */
(function(){ 
    var adminApiRequests = angular.module('ThemeService',[]);
    
    adminApiRequests.factory('ThemeApi', ['$http', function($http) {
        return {
            getThemes: function(id) {
                return $http.get('http://lola-rest.com/api/admin/theme/themes', {params: {id: id}}); 
            },
            getTheme: function(id) {
                return $http.get('http://lola-rest.com/api/admin/theme/theme/' + id); 
            },
            deleteTheme: function(id) {
                return $http.delete('http://lola-rest.com/api/admin/theme/theme/' + id);
            },
            postTheme: function(theme) { 
                return $http.post('http://lola-rest.com/api/admin/theme/theme', {theme: theme});
            }
        };
    }]);
})();
