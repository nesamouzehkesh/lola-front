(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/home.html"
                })
                .when("/signup", {
                    templateUrl: "views/signup.html"
                })
                .when("/profile", {
                    templateUrl: "views/profile.html"
                });
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();    