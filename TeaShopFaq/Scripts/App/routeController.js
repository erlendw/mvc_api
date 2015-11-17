
// create the module and name it scotchApp
var App = angular.module('App', ['ngRoute']);

App.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'pages/about.html',
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/submit.html',
        });
});

// create the controller and inject Angular's $scope
App.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

App.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

App.controller('submitController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});


function GetAll($scope, $http) {
    $http.get('/api/posts').
        success(function (data) {
            $scope.posts = data;
        });
}