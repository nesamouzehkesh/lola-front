(function () {
    
    var env = {};
    // Import variables if present (from env.js)
    if (window) {  
      Object.assign(env, window.env);
    }
    
    var myApp = angular.module('mainApp', [
        'ngRoute', 
        'ngResource', 
        'ui.bootstrap', 
        'ngBootbox',
        'angularUtils.directives.dirPagination',
        'ui.select', 
        'ngSanitize',
        'ngStorage'
    ]);
    
    myApp.constant('env', env);
    
    myApp.factory('AuthenticationService', function ($rootScope, $http, $httpBackend, $localStorage, env) {
        return {
            login:          function (credentials) {
                $http
                    .post(env.apiUrl + '/login_check', credentials, { ignoreAuthModule: true })
                    .success(function (data, status, headers, config) {
                        //$http.defaults.headers.common.Authorization = 'Bearer ' + data.token;  // Step 1
                        $localStorage.token = data.token;

                        $rootScope.$broadcast('event:auth-login-complete');
                        /*
                        authService.loginConfirmed(data, function (config) {  // Step 2 & 3
                            config.headers.Authorization = 'Bearer ' + data.token;
                            $rootScope.$broadcast('event:auth-login-complete');
                            return config;
                        });
                        */
                    })
                    .error(function (data, status, headers, config) {
                        $rootScope.$broadcast('event:auth-login-failed', status);
                    });
            },
            logout:         function () {
                //delete $http.defaults.headers.common.Authorization;
                delete $localStorage.token;
                $rootScope.$broadcast('event:auth-logout-complete');
            }
        };
    });    
    
    myApp.config(function ($httpProvider) {
        /*
        $httpProvider.defaults.transformRequest = function(data){
            if (data === undefined) {
                return data;
            }
            return $.param(data);
        };

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';    
        */
       
        $httpProvider.interceptors.push(['$q', '$rootScope', '$location', '$localStorage', function ($q, $rootScope, $location, $localStorage) {
            return {
                'request': function (config) {
                    config.headers = config.headers || {};
                    if ($localStorage.token) {
                        config.headers.Authorization = 'Bearer ' + $localStorage.token;
                    }
                    return config;
                },
                'responseError': function (response) {
                    // response.config;
                    if (response.status === 401 || response.status === 403) {
                        delete $localStorage.token;
                        //$location.path('/signin');
                        $rootScope.$broadcast('event:auth-loginRequired');
                    }
                    return $q.reject(response);
                }
            };
        }]);        
    });
    
    myApp.controller('AdminMainController', ['$scope', '$http', '$location', '$uibModal', 'AuthenticationService',
        function($scope, $http, $location, $uibModal, AuthenticationService) {
            
            $scope.logout = function () {
                AuthenticationService.logout(function () {});
            };
            
            $scope.$on('event:auth-logout-complete', function () {
                window.location = "/admin#/login";
            });
            
            $scope.$on('event:auth-login-complete', function () {
                window.location = "/admin";
            });
            
            $scope.$on('event:auth-loginRequired', function () {
                
                window.location = "/admin#/login";
                /*
                $uibModal.open({
                    templateUrl: 'login.html',
                    controller:  'ModalInstanceCtrl',
                    backdrop:    'static'
                });
                */
            });            
            
            $scope.data = {};        
            $scope.data.modules = [
                {
                    'name': 'Home',
                    'url': '/admin',
                    'icon': 'glyphicon glyphicon-home',
                    'color': 'blue',
                    'description': 'Home page of syste'
                },
                {
                    'name': 'Products',
                    'url': '/admin/product',
                    'icon': 'glyphicon glyphicon-gift',
                    'color': 'red',
                    'description': 'Product page of syste'
                },
                {
                    'name': 'Categories',
                    'url': '/admin/category',
                    'icon': 'glyphicon glyphicon-th-list',
                    'color': 'green',
                    'description': 'Product page of syste'
                },
                {
                    'name': 'Pages',
                    'url': '/admin/page',
                    'icon': 'glyphicon glyphicon-list-alt',
                    'color': 'yellow',
                    'description': 'Pages of syste'
                },
                {
                    'name': 'Themes',
                    'url': '/admin/theme',
                    'icon': 'glyphicon glyphicon-picture',
                    'color': 'blue',
                    'description': 'Themes of syste'
                },
                {
                    'name': 'Labels',
                    'url': '/admin/label',
                    'icon': 'glyphicon glyphicon-tags',
                    'color': 'red',
                    'description': 'Labels of syste'
                },
                {
                    'name': 'Brands',
                    'url': '/admin/brand',
                    'icon': 'glyphicon glyphicon-record',
                    'color': 'green',
                    'description': 'Brands of syste'
                },
                {
                    'name': 'Customers',
                    'url': '/admin/customer',
                    'icon': 'glyphicon glyphicon-user',
                    'color': 'yellow',
                    'description': 'Customers of syste'
                }
                
            ];
    }]);

    /*
    myApp.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'AuthenticationService',
        function ($scope, $uibModalInstance, AuthenticationService) {
            $scope.credentials = {
                username: 'user',
                password: 'password'
            };

            $scope.$on('event:auth-login-failed', function () {
                $scope.errorMessage = 'Bad credentials';
            });

            $scope.$on('event:auth-login-complete', function () {
                $uibModalInstance.close();
            });

            $scope.submit = function (credentials) {
                AuthenticationService.login(credentials);
            };
    }]);  
    */
   
    myApp.controller('LoginController', ['$scope', 'AuthenticationService',
        function ($scope, AuthenticationService) {
            $scope.credentials = {
                username: 'user',
                password: 'password'
            };

            $scope.$on('event:auth-login-failed', function () {
                $scope.errorMessage = 'Bad credentials';
            });

            $scope.submit = function (credentials) {
                AuthenticationService.login(credentials);
            };
    }]);      

    myApp.directive('backImg', function(){
        return function(scope, element, attrs){
            attrs.$observe('backImg', function(value) {
                element.css({
                    'background-image': 'url(' + value + ')'
                });
            });
        };
    });
}) ();