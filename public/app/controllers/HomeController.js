angular.module("home", ["chart.js"]).controller("HomeCtrl", function ($scope, $http) {

  // Temporary Data Storage

  $scope.labels = [];
  $scope.series = ['US Unemployment Rate'];
  $scope.data = [
    []
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
      $scope.labels = res.data.labelsArr;
      $scope.data[0] = res.data.dataArr;
      console.log($scope.data)
    })
  }

  $scope.getData();

});
     




