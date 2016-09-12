(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('CustomerController', ['$scope', 'CustomerApi', '$location', '$http', '$uibModal', '$ngBootbox',
        function($scope, CustomerApi, $location, $http, $uibModal, $ngBootbox) {
        var init = function() {
        $scope.data = {}; 
        $scope.data.customer = {};
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.data.customers = [];
        $scope.getCustomerList();
        
        };
        
        //for initialization
        CustomerApi.getCustomers()
              .success(function (data) {
                  $scope.data.customers = data;
              }) 
              .error(function (error) {
                    $scope.data.error = error;
              });
        
          
        // Get list of customers from backend
        $scope.getCustomerList = function() {
            CustomerApi.getCustomers()
              .success(function (data) {
                  $scope.data.Customerss = data;
              }) 
              .error(function (error) {
                    $scope.data.error = error;
              });
        };
        
        // View customer
        $scope.viewCustomer = function (customer) {
            // First get customer full information from back-end
            CustomerApi.getCustomer(customer.id)
                .success(function(data) {
                    // Get modal instance with this customer data
                    var modalInstance = openViewCustomerModal(data); //openViewCustomerModal()
                    //does the job actually...
                    
                    modalInstance.result.then(function (data) {
                        $scope.getCustomerList();
                    });
                });          
        };
        
         // Add new customer
        $scope.addCustomer = function () {
            // Get modal instance
            var modalInstance = openLabelModal({}); //openLabelModal does the job!
            
            // Do appropriate job for the result of modal actions
            modalInstance.result.then(function (data) {
                $scope.getCustomerList();
                console.log('Modal colsed');
            }, function () {
                console.log('Modal dismissed');
            });
            
        };
        
        // Edit customer
        $scope.editCustomer = function (customer) {
            // First get customer full information from back-end
            CustomerApi.getCustomer(customer.id)
                .success(function(data) {
                    // Get modal instance with this customer data
                    var modalInstance = openCustomerModal(data);
                    
                    modalInstance.result.then(function (data) {
                        $scope.getCustomerList();
                        console.log('Modal submited and colsed');
                    }, function () {
                        console.log('Modal dismissed at: ');
                    });
                });          
        };
        
        // A simple function just to create and returns a customer modal instance
        function openCustomerModal(data) {

            var modalInstance = $uibModal.open({
                //size: size,
                animation: $scope.animationsEnabled,
                templateUrl: 'views/partial/customerModalContent.html',
                controller: 'CustomerModalController',
                resolve: {
                  customer: function () {
                    return data;
                  }
                }
            });
            
            return modalInstance;
        }
        
         //Modal that shows the information of a customer when clicked on "View"
        function openViewCustomerModal(data) {

            var modalInstance = $uibModal.open({
                //size: size,
                animation: $scope.animationsEnabled,
                templateUrl: 'views/partial/viewCustomerModalContent.html',
                controller: 'CustomerModalController',
                resolve: {
                  customer: function () { //we use resolver to inject objects of our need into the controller being used for the modal
                    return data;
                  },
                  customerId: function() { //this example shows you can use as many as them as you like (to inject into the controller)
                      return data.id;
                  }/*
                   * , customerName: function() {
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