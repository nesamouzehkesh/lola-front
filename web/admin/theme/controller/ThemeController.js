(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('ThemeController', ['$scope', 'ThemeApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, ThemeApi, $location, $http, $uibModal, $ngBootbox) {
        $scope.data = {}; 
        $scope.data.theme = {};
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.data.themes = [];
        
        // Get list of themes from backend
        ThemeApi.getThemes()
          .success(function (data) {
              $scope.data.themes = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });
          
        
        // Delete a theme   
        $scope.deleteTheme = function(theme) {
            // Show confirmation message before deleting an item
            $ngBootbox.confirm("Are you sure you want to delete this Succession Plan?")
                // If user confirmed
                .then(function() {
                    ThemeApi.deleteTheme(theme.id)
                        .success(function () {
                            $scope.data.themes.splice($scope.data.themes.indexOf(theme), 1);
                        }) 
                        .error(function (error) {
                              $scope.data.error = error;
                        });  
                }, function() {
                    console.log("Confirm dismissed!");
                });
        };    
        
        // Add new theme
        $scope.addTheme = function () {
            // Get modal instance
            var modalInstance = openThemeModal({});
            
            // Do appropriate job for the result of modal actions
            modalInstance.result.then(function (data) {
                $scope.data.themes.push(data);
            });
            
        };
        
        // Edit theme
        $scope.editTheme = function (theme) {
            // First get theme full information from back-end
            ThemeApi.getTheme(theme.id)
                .success(function(data) {
                    // Get modal instance with this theme data
                    var modalInstance = openThemeModal(data);
                    
                    modalInstance.result.then(function (data) {
                        //TODO: update same theme in the $scope.data.themes
                    });
                });          
        };
        


        // A simple function just to create and returns a page modal instance
        function openThemeModal(data) {

            var modalInstance = $uibModal.open({
                //size: size,
                animation: $scope.animationsEnabled,
                templateUrl: 'views/partial/themeModalContent.html',
                controller: 'ThemeModalController',
                resolve: {
                  theme: function () {
                    return data;
                  }
                }
            });
            
            return modalInstance;
        }
    }]);     
}) ();