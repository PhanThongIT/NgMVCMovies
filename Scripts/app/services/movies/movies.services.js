/// <reference path="../../../angular.js" />

app.service('moviesServices', ['$http', function ($http) {
    this.listMovies = function () {
        return $http.get('/Movies/GetListMovies');
    }

    this.getMovieDetail = function (id) {
        return $http.get('/Movies/GetMovieDetail/' + id);
    }


    this.deleteMovie = function (idMovie) {
        var postAPI = $http({
            url: `Movies/DeleteMovie`,
            method: "POST",
            dataType: "json",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify({ id: idMovie })
        })

        return postAPI;
    }

}]);