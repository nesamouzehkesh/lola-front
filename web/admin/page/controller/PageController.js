(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('PageController', ['$scope', 'PageApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, PageApi, $location, $http, $uibModal, $ngBootbox) {
        var init = function() {    
        $scope.data = {}; 
        $scope.data.page = {};
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.data.pages = [];
        $scope.getPageList();
        
        };
        
        // Get list of pagess from backend
        PageApi.getPages()
          .success(function (data) {
              $scope.data.pages = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });
          
        // Get list of pages from backend
        $scope.getPageList = function() {
            PageApi.getPages($scope.data.search)
              .success(function (data) {
                  $scope.data.pages = data;
              }) 
              .error(function (error) {
                    $scope.data.error = error;
              });
        };  
          
        
        // Delete a page   
        $scope.deletePage = function(page) {
            // Show confirmation message before deleting an item
            $ngBootbox.confirm("Are you sure you want to delete this Succession Plan?")
                // If user confirmed
                .then(function() {
                    PageApi.deletePage(page.id)
                        .success(function () {
                            $scope.data.pages.splice($scope.data.pages.indexOf(page), 1);
                        }) 
                        .error(function (error) {
                              $scope.data.error = error;
                        });  
                }, function() {
                    console.log("Confirm dismissed!");
                });
        };    
        
        // Add new page
        $scope.addPage = function () {
            // Get modal instance
            var modalInstance = openPageModal({});
            
            // Do appropriate job for the result of modal actions
            modalInstance.result.then(function (data) {
                $scope.data.pages.push(data);
                console.log('Modal colsed');
            }, function () {
                console.log('Modal dismissed');
            });
            
        };
        
        // Edit page
        $scope.editPage = function (page) {
            // First get page full information from back-end
            PageApi.getPage(page.id)
                .success(function(data) {
                    // Get modal instance with this page data
                    var modalInstance = openPageModal(data);
                    
                    modalInstance.result.then(function (data) {
                        $scope.getPageList();
                        console.log('Modal submited and colsed');
                    }, function () {
                        console.log('Modal dismissed at: ');
                    });
                });          
        };
        


        // A simple function just to create and returns a page modal instance
        function openPageModal(data) {

            var modalInstance = $uibModal.open({
                //size: size,
                animation: $scope.animationsEnabled,
                templateUrl: 'views/partial/pageModalContent.html',
                controller: 'PageModalController',
                resolve: {
                  page: function () {
                    return data;
                  }
                }
            });
            
            return modalInstance;
        }
        
        init();
    }]);     
}) ();