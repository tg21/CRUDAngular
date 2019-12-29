const index = angular.module('tracker', ['ngRoute']);
console.log("index");
index.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "Scripts/templates/login.html",
        controller : "loginController"
    });
    console.log("routed");
});
/*, 'verfyService','callServer','urls'*/