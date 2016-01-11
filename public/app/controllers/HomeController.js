angular.module("home", ["chart.js"]).controller("HomeCtrl", function ($scope, $http) {

  // Temporary Data Storage

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  $scope.getData = function() {
    $http({
      method: 'GET',
      headers: 'application/json',
      url: '/data'
    }).then(function(res) {
      $scope.data = res.data.Results.series[0];
      console.log($scope.data)
    })
  }

  $scope.getData();

});
     




