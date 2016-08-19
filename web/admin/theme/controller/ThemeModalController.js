(function () {
    var myApp = angular.module('mainApp');
   
    myApp.controller('ThemeModalController', ['$scope', 'ThemeApi', '$uibModalInstance', 'theme',
        function ($scope, ThemeApi, $uibModalInstance, theme) {
            $scope.data = {};
            $scope.data.theme = theme;
           
            $scope.postTheme = function (theme) {
                ThemeApi.postTheme(theme)
                    .success(function(data) {
                        $uibModalInstance.close(data); 
                    });
            };               

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };           
        }]);    
}) ();