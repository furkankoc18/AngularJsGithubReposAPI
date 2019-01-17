var app = angular.module('uygulama', []);

app.controller('UygController', ['$scope', '$http', function($scope, $http) {

  $scope.rendered=false;
  $scope.getRepos = function() {
    $http.get('https://api.github.com/users/' + $scope.username + '/repos').then(successCallback, errorCallback);
  }
  function successCallback(response) {
    $scope.repos = response.data;
    $scope.rendered=false;
  }
  function errorCallback(error) {
    $scope.repos=null;
    $scope.rendered=true;
  }
}])
