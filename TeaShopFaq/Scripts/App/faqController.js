
// create the module and name it scotchApp
var App = angular.module('App', ['ngRoute', 'ngMessages']);

App.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html'
        })

        .when('/posts/:id', {
                    templateUrl: 'pages/post.html'
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
        })
    .when('/test', {
        templateUrl: 'pages/accordiontest.html'
    });
});

// create the controller and inject Angular's $scope
App.controller('postController', function ($scope, $http, $location, $routeParams) {

    $scope.addPost = function (post) {

        console.log(post.UserEmail);

        if (post.UserEmail != null) {

            var data = {
                Question: post.Question,
                Category: post.Category,
                UserEmail: post.UserEmail
            }

            $http.post('/api/posts', data)

            //data bind causes issues, is updated after obj data is posted

            post.Question = "";
            post.Category = null;
            post.UserEmail = "";

        }

        
        

    }

    $scope.updatePost = function (post) {

        var data = {
            PostId: post.PostId,
            Answer: post.Answer
        }

        console.log(data)

        $http.put('/api/posts', data).success(function (data) {
            $scope.initFirst();

        });

        post.PostId = "";
        post.Answer = "";
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

    $scope.getSpecificPost = function (){


        $scope.id = parseInt($routeParams.id);
        console.log($scope.id)

    }

    $scope.rerouteToPost = function (post) {

        $location.path('/posts/' + post.PostId);
        
    }



});