(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('LabelController', ['$scope', 'LabelApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, LabelApi, $location, $http, $uibModal, $ngBootbox) {
        $scope.data = {}; 
        $scope.data.label = {};
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.data.labels = [];

        
        // Get list of labels from backend
        LabelApi.getLabels()
          .success(function (data) {
              $scope.data.labels = data;
          }) 
          .error(function (error) {
                $scope.data.error = error;
          });
          
        // View label
        $scope.viewLabel = function (label) {
            // First get label full information from back-end
            LabelApi.getLabel(label.id)
                .success(function(data) {
                    // Get modal instance with this label data
                    var modalInstance = openViewLabelModal(data); //openViewLabelModal()
                    //does the job actually...
                    
                    modalInstance.result.then(function (data) {
                        $scope.getLabelList();
                        //console.log('Modal submited and colsed');
                    }, function () {
                        //console.log('Modal dismissed at: ');
                    });
                });          
        };
        
         // Add new label
        $scope.addLabel = function () {
            // Get modal instance
            var modalInstance = openLabelModal({}); //openLabelModal does the job!
            
            // Do appropriate job for the result of modal actions
            modalInstance.result.then(function (data) {
                $scope.getLabelList();
                //console.log('Modal colsed');
            }, function () {
                //console.log('Modal dismissed');
            });
            
        };
        
        // Edit label
        $scope.editLabel = function (label) {
            // First get product full information from back-end
            LabelApi.getLabel(label.id)
                .success(function(data) {
                    // Get modal instance with this product data
                    var modalInstance = openLabelModal(data);
                    
                    modalInstance.result.then(function (data) {
                        $scope.getLabelList();
                        //console.log('Modal submited and colsed');
                    }, function () {
                        //console.log('Modal dismissed at: ');
                    });
                });          
        };
        
        // Get list of products from backend
        $scope.getLabelList = function() {
            LabelApi.getLabels($scope.data.search)
              .success(function (data) {
                  $scope.data.labels = data;
              }) 
              .error(function (error) {
                    $scope.data.error = error;
              });
        };
        
        
        // A simple function just to create and returns a label modal instance
        function openLabelModal(data) {

            var modalInstance = $uibModal.open({
                //size: size,
                animation: $scope.animationsEnabled,
                templateUrl: 'views/partial/labelModalContent.html',
                controller: 'LabelModalController',
                resolve: {
                  label: function () {
                    return data;
                  }
                }
            });
            
            return modalInstance;
        }
        
         //Modal that shows the information of a label when clicked on "View"
        function openViewLabelModal(data) {

            var modalInstance = $uibModal.open({
                //size: size,
                animation: $scope.animationsEnabled,
                templateUrl: 'views/partial/viewLabelModalContent.html',
                controller: 'LabelModalController',
                resolve: {
                  label: function () {
                    return data;
                  }
                }
            });
            
            return modalInstance;
        }
        
        
    }]);     
}) ();