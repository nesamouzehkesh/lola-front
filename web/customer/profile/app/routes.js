(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/home.html"
                })

                .when("/signin", {
                    templateUrl: "views/signin.html",
                    controller: "CustomerMainController"
                });
                
               
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();    