(function () {
    var myApp = angular.module('mainApp');
   
    myApp.controller('PageModalController', ['$scope', 'PageApi', '$uibModalInstance', 'page',
        function ($scope, PageApi, $uibModalInstance, page) {
            $scope.data = {};
            $scope.data.page = page;
           
            $scope.postPage = function (page) {
                PageApi.postPage(page)
                    .success(function(data) {
                        $uibModalInstance.close(data); 
                    });
            };               

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };           
        }]);    
}) ();