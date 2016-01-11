angular.module("home", ["chart.js"]).controller("HomeCtrl", function ($scope, $http) {

  // Temporary Data Storage

  $scope.unemploymentData = {}
  $scope.unemploymentData.series = ['US Unemployment Rate'];
  $scope.unemploymentData.labels = undefined;
  $scope.unemploymentData.data = [[]];
  $scope.wagesData = {}
  $scope.wagesData.series = ['Avg. Hourly Pay per Worker'];
  $scope.wagesData.labels = undefined;
  $scope.wagesData.data = [[]];
  $scope.hoursData = {}
  $scope.hoursData.series = ['Avg. Weekly Hours per Worker'];
  $scope.hoursData.labels = undefined;
  $scope.hoursData.data = [[]];

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  $scope.getUnemploymentData = function() {
    $http({
      method: 'GET',
      headers: 'application/json',
      url: '/unemploymentData'
    }).then(function(res) {
      $scope.unemploymentData.labels = res.data.labelsArr;
      $scope.unemploymentData.data[0] = res.data.dataArr;
    })
  }

  $scope.getHoursData = function() {
    $http({
      method: 'GET',
      headers: 'application/json',
      url: '/hoursData'
    }).then(function(res) {
      $scope.hoursData.labels = res.data.labelsArr;
      $scope.hoursData.data[0] = res.data.dataArr;
      console.log(res.data)
    })
  }

  $scope.getWagesData = function() {
    $http({
      method: 'GET',
      headers: 'application/json',
      url: '/wagesData'
    }).then(function(res) {
      $scope.wagesData.labels = res.data.labelsArr;
      $scope.wagesData.data[0] = res.data.dataArr;
      console.log(res.data)
    })
  }

  $scope.getData = function() {
    $scope.getUnemploymentData();
    $scope.getHoursData();
    $scope.getWagesData();
  }

  $scope.getData();

});
     




