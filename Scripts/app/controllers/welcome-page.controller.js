/// <reference path="../../angular.js" />

angular.module('welcomePageModule', [])
    .controller("welcomeController", function ($scope, $http) {
        $scope.firstName = "Phan Van Thong";
        $scope.data = "" || {};

        $scope.getFirstName = function () {
            const response = $http.get(
                '/HelloWorld/GetStringName'
            );

            response.then(function successCallBack(res) {
                console.log("res", res);
                $scope.data = res.data;

            }, function errorCallBack(errorMsg) {
                console.log('errorMsg', errorMsg)
            }
            )
        }
    });