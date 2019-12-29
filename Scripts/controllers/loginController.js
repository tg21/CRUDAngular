const login = angular.module('tracker').controller('loginController', ['verifyUser',function ($scope,verifyUser) {
    console.log("sharp");
    $scope.onLogin = function () {
        console.log("pie");
        if ($scope.uname == $scope.pass || true) {
            console.log("same");
        } else {
            console.log("did");
            /* var promise = verifyUser.verifyUserCredentials($scope.uname, $scope.pass);
             promise.then(
                 function (success) {
                     console.log("something came back");
                     console.log("Server username : " + success.data.Username);
                     console.log("Server pass : " + success.data.Password);
                 }, function (error) {
                     alert("error");
                     document.getElementById('load').style.visibility = "hidden";
                 }
             );*/
        };



    };
    $scope.onLogin();
}]);
console.log("crap");
/*const loginController = app.controller('loginController',function($scope) {
    console.log("shrap");
    $scope.pltext = "user::name";
    $scope.onLogin = function () {
        console.log("dhrap");
        if ($scope.uname == $scope.pass) {
            console.log("Same values");
        } else {
            console.log("different");
        }
    }
    
});*/

/*const login = angular.module('tracker').controller('loginController', function ($scope) {
    console.log('sharp');
});*/