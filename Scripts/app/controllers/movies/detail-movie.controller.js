

app.controller('movieDetailController', ['$scope', "moviesServices",
    function ($scope, moviesServices) {
        $scope.movie = {};
        $scope.isConfirmDialog = false;


        $scope.getMovieDetail = function () {
            var queryString = window.location.search;
            var urlParams = new URLSearchParams(queryString);
            var idParam = urlParams.get("ID" || "id");

            var rqMovieData = moviesServices.getMovieDetail(idParam);

            rqMovieData.then(function successCallBack(res) {
                if (!angular.isUndefined(res.data)) {
                    console.log('Movie detail: ', res.data);

                    $scope.movie = res.data;
                }
            }, function errorCallBack(error) {
                console.log('Error Movie detail: ', error)
            });
        };

    }
]);