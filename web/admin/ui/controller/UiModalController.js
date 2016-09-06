(function () {
    var myApp = angular.module('mainApp');
    
    myApp.controller('UiModalController', ['$scope', 'UiApi', '$uibModalInstance', 'ui',
        function ($scope, UiApi, $uibModalInstance, ui) {
            $scope.data = {};
            $scope.data.ui = ui;
            
            $scope.postUi = function (ui) {
                UiApi.postUi(ui)
                    .success(function(data) {
                        $uibModalInstance.close(data);  
                    });
            };                

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };            
        }]);     
}) ();