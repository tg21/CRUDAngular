const callServer = angular.module('tracker').service('callServer', ['$http', function ($http) {
    this.getDataFromServer = function (url) {
        return $http({ method: "GET", url: url });
    }

    this.sendDataToServer = function (data, url) {
        console.log("sending data to " + url);
        return $http({ method: "POST", url: url, data: data });
    }
}]);