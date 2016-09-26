(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/home.html"
                })

                .when("/contact", {
                    templateUrl: "views/contact.html",
                    controller: "CustomerMainController"
                });
               
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();   