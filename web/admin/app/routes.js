(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
            .when("/", {
                templateUrl: "views/home.html"
            });
            
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();    