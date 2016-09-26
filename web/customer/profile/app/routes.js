(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.when("/", {
                templateUrl: "views/home.html",
                controller: "CustomerMainController"
            })
            .when("/signin", {
                templateUrl: "views/signin.html"
            });
            
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();    