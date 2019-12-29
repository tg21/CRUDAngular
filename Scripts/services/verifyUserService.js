const verify = angular.module('tracker').service('verifyUser', ['$http', 'callServer', 'urls', function ($http, callServer, urls) {
    this.verifyUserCredentials = function (username, password) {
        console.log("verifying user details");
        const loginUrl = urls.loginUrl;

            var dataToSend = { UserName: username, Password: password };
            var promise = callServer.sendDataToServer(dataToSend, loginUrl);
            return promise;
    };
   /* const loginUrl = urls.loginUrl;

    var checkUser = {
        'verifyUserDetailsAndStore': null
    };

    checkUser.verifyUserDetailsAndStore = function (username, password) {
        var dataToSend = { UserName: username, Password: password };
        var promise = callServer.sendDataToServer(dataToSend, loginUrl);
        return promise;
    }
    return checkUser;*/



}]);