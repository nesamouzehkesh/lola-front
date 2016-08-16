(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.when("/", {
                templateUrl: "views/home.html",
                controller: "ProductController"
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();    