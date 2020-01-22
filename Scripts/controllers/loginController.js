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
    $scope.ExcelToJSON = function () {

        this.parseExcel = function (file) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var data = e.target.result;
                var workbook = XLSX.read(data, {
                    type: 'binary'
                });
                workbook.SheetNames.forEach(function (sheetName) {
                    // Here is your object
                    var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    var json_object = JSON.stringify(XL_row_object);
                    console.log(JSON.parse(json_object));
                    jQuery('#xlx_json').val(json_object);
                })
            };

            reader.onerror = function (ex) {
                console.log(ex);
            };

            reader.readAsBinaryString(file);
        };
    };

    $scope.onUpload = function () {
        var xlfile = $('#xlfile')[0].prop('files');
        var files = document.getElementsByName("files");
        console.log(files);
        console.log(xlfile.prop('files'));

        
        /*console.log($scope.excelfile);*/
        var xltojson = new ExcelToJSON();
        xltojson.parseExcel(xlfile[0]);

    }

    $scope.upload = function(){
        var file = $('#upload').prop('files')[0];
        var xltojson = new $scope.ExcelToJSON();
        xltojson.parseExcel(file);
    }

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
function print() {
    console.log($('#upload').prop('files')[0]);

}
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