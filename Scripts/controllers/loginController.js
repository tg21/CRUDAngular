const login = angular.module('tracker').controller('loginController', ['$scope','$http','verifyUser',function ($scope,$http,verifyUser) {
   /* console.log("sharp");*/
 /*   $scope.uname = "Batman";
    $scope.pass = "RObin";
    $scope.pltext = "username";*/
    $scope.onLogin = function () {
        /*console.log("pie");*/
        /*if ($scope.uid == $scope.pass) {
            console.log("same");
        } else {
            console.log("diff");*/
            /*var promise = verifyUser.verifyUserCredentials($scope.uname, $scope.pass);*/
            var promise = verifyUser.verifyUserCredentials($scope.id, $scope.pass);
             promise.then(
                 function (success) {
                     console.log("something came back");
                     console.log("Server Username : " + success.data.uname);
                     console.log("Server class : " + success.data.class);
                     $scope.uname = success.data.uname;
                     $scope.class = success.data.class;
                 }, function (error) {
                     alert("error :-",error);
                 }
             );
      /*  };*/



    };
    /*$scope.onLogin();*/

   /* $http({
        method: "POST",
        url: 'api/Login/loginUrl',
        data: { UserName: $scope.uname, Password: $scope.pass }
    }).then(function (response) {
        console.log('done');
    }, function (error) {
        console.log("errorrrrrr: " + error);
    })*/
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