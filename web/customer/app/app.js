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
                 'name': 'Shop',
                 'url': '/views/shop'
             },
             {
                 'name': 'Women',
                 'url': '/views/women'
             },
             {
                 'name': 'Men',
                 'url': '/views/men'
             },
             {
                 'name': 'Beauty',
                 'url': '/views/beauty'
             },
             {
                 'name': 'Sale',
                 'url': '/views/sale'
             }
         ];
         $scope.data.navRightItems = [
             {
                 'name': 'SignIn',
                 'url': 'views/signIn'
             },
             {
                 'name': 'ShoppingCart',
                 'url': '/views/shoppingCart'
             },
             {
                 'name': 'Contact',
                 'url': '/views/contact'
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