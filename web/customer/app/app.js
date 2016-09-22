(function () {
    var myApp = angular.module('mainApp', [
        'ngRoute', 
        'ngResource', 
        'ui.bootstrap', 
        'ngBootbox',
        'angularUtils.directives.dirPagination',
        'ui.select', 
        'ngSanitize'
    ]);
    
    myApp.controller('CustomerMainController', ['$scope', '$http', '$location',
        function($scope, $http, $location) {
            $scope.data = {}; 
            $scope.data.navLeftItems = [
             {
                 'name': 'Home',
                 'url': '/customer'
             },   
             {
                 'name': 'Shop',
                 'url': '/customer/product'
             },
             {
                 'name': 'Women',
                 'url': '/customer/product/women'
             },
             {
                 'name': 'Men',
                 'url': '/customer/product/men'
             },
             {
                 'name': 'Beauty',
                 'url': '/product/beauty'
             },
             {
                 'name': 'Sale',
                 'url': '/product/sale'
             }
         ];
         $scope.data.navRightItems = [
             {
                 'name': 'Sign In',
                 'url': '/customer/customer_account/signin'
             },
             {
                 'name': 'ShoppingCart',
                 'url': 'customer/basket/shoppingCart'
             },
             {
                 'name': 'Contact',
                 'url': '/customer/contact'
             }
         ];
    }]);


    myApp.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.transformRequest = function(data){
            if (data === undefined) {
                return data;
            }
            return $.param(data);
        };

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';        
    }]);

  
}) ();