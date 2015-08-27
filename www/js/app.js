// Ionic tricountlike App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'tricountlike' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module('tricountlike', ['ionic'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'html/home.html'
        });
        $stateProvider.state('events', {
            url: '/events',
            templateUrl: 'html/events.html',
            controller: 'EventsCtrl'
        });
    });
