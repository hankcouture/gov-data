angular.module('app.home', [])

.controller('HomeController', ['$scope', '$http', function($scope, $http) {

  console.log('this is from the HomeController')

  $scope.data = {}

  $scope.getData = function() {
  	$http({
  		method: 'GET',
  		headers: 'application/json',
  		url: '/data'
  	}).then(function(res) {
  		console.log(res)
  	})
  }

  $scope.getData();

}]);