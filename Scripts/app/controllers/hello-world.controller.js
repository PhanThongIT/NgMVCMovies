/// <reference path="../../angular.min.js" />

angular.module('helloWorldModule', [])
    .controller('helloWorldController', function ($scope, $http) {
        $scope.name = "Phan Van Thong";
    });