
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
App.controller('postController', function ($scope, $http, $location) {


    $scope.addPost = function (post) {

        console.log(post.UserEmail);

        var data = {
            Question: post.Question,
            Category: post.Category,
            UserEmail: post.UserEmail
        }

        $http.post('/api/posts', data)

    }

    $scope.updatePost = function (post) {

        var data = {
            PostId: post.PostId,
            Answer: post.Answer
        }

        console.log(data)

       $http.put('/api/posts', data).success(function (data){
           $scope.initFirst();
        })
    }

    $scope.initFirst = function () {

        $http.get('/api/posts').success(function (data) {
        $scope.posts = data;
    });

    }

    $scope.sortList = function (value) {

        var sortedlist = Array();

        $http.get('/api/posts').success(function (data) {



            if (value == 'All') {

                $scope.posts = data;

            }

            else if (value == 'Newest') {

                $scope.posts = data;

            }

            else {

                for (i = 0; i < data.length; i++) {

                    console.log(data[i].Category + ' | ' + value);

                    if (data[i].Category == value) { sortedlist.push(data[i]) }

                }

                $scope.posts = sortedlist;

            }
            

            console.log($scope.posts)

        });
    }



});