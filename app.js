var app = angular.module("myApp", []);
app.controller("myctr", function($scope, $http){
    $http.get("data.json").then(function(item){
        $scope.users = item.data;
    })
    $scope.removeuser=function(user){
        var removeduser=$scope.users.indexOf(user);
        $scope.users.splice(removeduser,1);
    }
    $scope.addusers=function(){
        $scope.users.push({
                name:$scope.newname,
                age:$scope.newage,
                salary:$scope.newsalary,
                company:$scope.newcompany
        });
    }
});