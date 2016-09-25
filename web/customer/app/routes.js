(function() {
    angular.module('mainApp')              
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/home.html"
                })

                .when("/customer/customer_account/signin", {
                    templateUrl: "customer_account/views/signin.html"
                })
                .when("/shoppingcart", {
                    templateUrl: "basket/views/shoppingcart.html"
                })
                .when("/contact", {
                    templateUrl: "views/contact.html"
                });
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();    