(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
            .when("/", {
                templateUrl: "views/home.html"
            })
            .when("/login", {
                templateUrl: "views/login.html",
                controller: "LoginController"
            });
            
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();    