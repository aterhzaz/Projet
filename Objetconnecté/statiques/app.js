(function(){

var app = angular.module('tabApp', []);

app.controller('tableCtrl',[ '$scope', '$http',function($scope, $http){
$scope.tables= [];
$http.get('/modelTable').success(function(data){
console.log(data);
$scope.tables = data;
});

}]);

})();