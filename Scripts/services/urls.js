const app = angular.module('tracker').factory('urls', function () {
    var url = {};
    /*Login URLs*/
    url.loginUrl = 'api/Login/loginUrl';
    return url;
})