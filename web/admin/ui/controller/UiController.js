(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('UiController', ['$scope', 'UiApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, UiApi, $location, $http, $uibModal, $ngBootbox) {
        var init = function() {    
        $scope.data = {}; 
        $scope.data.ui = {};
        $scope.data.uis = [];
        $scope.getUiList();
    };
        
        // Get list of uis from backend
        UiApi.getUis()
          .success(function (data) {
              $scope.data.uis = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });
          
        // Get list of uis from backend
        $scope.getUiList = function() {
            UiApi.getUis($scope.data.search)
              .success(function (data) {
                  $scope.data.uis = data;
              }) 
              .error(function (error) {
                    $scope.data.error = error;
              });
        };  
        
        // Delete a ui   
        $scope.deleteUi = function(ui) {
            // Show confirmation message before deleting an item
            $ngBootbox.confirm("Are you sure you want to delete this Succession Plan?")
                // If user confirmed
                .then(function() {
                    UiApi.deleteUi(ui.id)
                        .success(function () {
                            $scope.data.uis.splice($scope.data.uis.indexOf(ui), 1);
                        }) 
                        .error(function (error) {
                              $scope.data.error = error;
                        });  
                }, function() {
                    console.log("Confirm dismissed!");
                });
        };    
        
        // Add new ui
        $scope.addUi = function () {
            // Get modal instance
            var modalInstance = openUiModal({});
            
            // Do appropriate job for the result of modal actions
            modalInstance.result.then(function (data) {
                $scope.data.uis.push(data);
            });
            
        };
        
        // Edit ui
        $scope.editUi = function (ui) {
            // First get ui full information from back-end
            UiApi.getUi(ui.id)
                .success(function(data) {
                    // Get modal instance with this ui data
                    var modalInstance = openUiModal(data);
                    
                    modalInstance.result.then(function (data) {
                        $scope.getUiList();
                    }, function () {
                    });
                });          
        };
        
        
        // View ui
        $scope.viewUi = function (ui) {
            // First get ui full information from back-end
            UiApi.getUi(ui.id)
                .success(function(data) {
                    // Get modal instance with this ui data
                    var modalInstance = openViewUiModal(data);
                    
                    modalInstance.result.then(function (data) {
                        $scope.getUiList();
                    }, function () {
                    });
                });          
        };
        
        // A simple function just to create and returns a ui modal instance
        function openUiModal(data) {
            var modalInstance = $uibModal.open({
                //size: size,
                animation: $scope.animationsEnabled,
                templateUrl: 'views/partial/uiModalContent.html',
                controller: 'UiModalController',
                resolve: {
                  ui: function () {
                    return data;
                  }
                }
            });
            
            return modalInstance;
        }
        
        function openViewUiModal(data) {
            var modalInstance = $uibModal.open({
                //size: size,
                animation: $scope.animationsEnabled,
                templateUrl: 'views/partial/viewUiModalContent.html',
                controller: 'UiModalController',
                resolve: {
                  ui: function () {
                    return data;
                  }
                }
            });
            
            return modalInstance;
        }
        
        
        init();
    }]);     
}) ();