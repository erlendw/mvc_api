﻿
// create the module and name it scotchApp
var App = angular.module('App', ['ngRoute']);

App.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'pages/about.html'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/submit.html'
        })
        // route for the contact page
        .when('/answer', {
            templateUrl: 'pages/answer.html'
        });
});

// create the controller and inject Angular's $scope
App.controller('postController', function ($scope, $http) {

    $scope.addPost = function () {

        console.log($scope.Category);

        var data = {
            Question: $scope.Question,
            Category: $scope.Category
        }

        $http.post('/api/posts', data)

    }

});


function GetAll($scope, $http) {
    $http.get('/api/posts').
        success(function (data) {
            $scope.posts = data;
        });
}