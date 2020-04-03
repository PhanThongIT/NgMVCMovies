/// <reference path="../../../angular.min.js" />

app.controller('addController', ['$scope',
    'moviesServices',
    function ($scope, moviesServices) {
        $scope.showError = false;
        $scope.movie = {
            Title: "",
            Gerne: "",
            Price: 0,
            ReleaseTime: "02/02/2020"
        }

        $scope.submitCretedMovie = function (moviesssss) {
            console.log(moviesssss);
        }

        $scope.showErrorMsg = function () {
            $scope.showError = true;
        }

    }
])