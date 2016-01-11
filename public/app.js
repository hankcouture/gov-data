var app = angular.module('app', [
  'home',
  'chart.js',
  'ui.router'
  ]);

app.config(function($stateProvider, $urlRouterProvider) {
    'use strict';

    // For any unmatched url, redirect home
    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // chart page
    .state('home', {
        url: '/home',
        templateUrl: 'app/views/home.html',
        controller: 'HomeCtrl'
    });
});