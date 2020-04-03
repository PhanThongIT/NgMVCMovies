/// <reference path="../../../angular.js" />



app.controller('moviesController',
    ['$scope', "moviesServices", function (
        $scope,
        moviesServices
    ) {

        $scope.listMovies = [];

        $scope.getListMovies = function () {
            var dataMovies = moviesServices.listMovies();

            dataMovies.then(function successCallBack(res) {
                console.log('res', res);
                if (!angular.isUndefined(res.data)) {
                    $scope.listMovies = res.data;
                }
            }, function errorCallBack(errorMsg) {
                console.log('errorMsg', errorMsg)
            })
        };

        $scope.deleteMovie = function (idMovie) {
            if (idMovie && window.confirm('Do you want delete this movie?')) {
                var dataMovies = moviesServices.deleteMovie(idMovie);

                dataMovies.then(function sucessCallback() {
                    $scope.listMovies = $scope.listMovies.filter(item => {
                        return item.ID !== idMovie
                    });

                    console.log("Success", $scope.listMovies);
                }, function error(msg) {
                    console.log("Error", msg)
                });
            }
        }

    }]
)