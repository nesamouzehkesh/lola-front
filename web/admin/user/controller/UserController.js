(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('UserController', ['$scope', 'UserApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, UserApi, $location, $http, $uibModal, $ngBootbox) {
        var init = function() {
            $scope.data = {}; 
            $scope.data.user = {};
            $scope.currentPage = 1;
            $scope.pageSize = 10;
            $scope.data.users = [];
            $scope.getUserList();
        };
          
        // Get list of users from backend
        $scope.getUserList = function() {
            UserApi.getUsers()
              .success(function (data) {
                  $scope.data.users = data;
              }) 
              .error(function (error) {
                    $scope.data.error = error;
              });
        };
        
        // View user
        $scope.viewUser = function (user) {
            // First get user full information from back-end
            UserApi.getUser(user.id)
                .success(function(data) {
                    // Get modal instance with this user data
                    var modalInstance = openViewUserModal(data); //openViewUserModal()
                    //does the job actually...
                    
                    modalInstance.result.then(function (data) {
                        $scope.getUserList();
                    });
                });          
        };
        
         // Add new user
        $scope.addUser = function () {
            // Get modal instance
            var modalInstance = openUserModal({}); //openLabelModal does the job!
            
            // Do appropriate job for the result of modal actions
            modalInstance.result.then(function (data) {
                $scope.getUserList();
                console.log('Modal colsed');
            }, function () {
                console.log('Modal dismissed');
            });
            
        };
        
        // Edit user
        $scope.editUser = function (user) {
            // First get user full information from back-end
            UserApi.getUser(user.id)
                .success(function(data) {
                    // Get modal instance with this user data
                    var modalInstance = openUserModal(data);
                    
                    modalInstance.result.then(function (data) {
                        $scope.getUserList();
                        
                    });
                });          
        };
        
        // A simple function just to create and returns a user modal instance
        function openUserModal(data) {

            var modalInstance = $uibModal.open({
                //size: size,
                animation: $scope.animationsEnabled,
                templateUrl: 'views/partial/userModalContent.html',
                controller: 'UserModalController',
                resolve: {
                  user: function () {
                    return data;
                  }
                }
            });
            
            return modalInstance;
        }
        
         //Modal that shows the information of a user when clicked on "View"
        function openViewUserModal(data) {

            var modalInstance = $uibModal.open({
                //size: size,
                animation: $scope.animationsEnabled,
                templateUrl: 'views/partial/viewUserModalContent.html',
                controller: 'UserModalController',
                resolve: {
                  user: function () { //we use resolver to inject objects of our need into the controller being used for the modal
                    return data;
                  }/*
                   * , userName: function() {
                   * return data.name;
                   * }
                  */
                }
            });
            
            return modalInstance;
        }
        init();
        
    }]);     
}) ();