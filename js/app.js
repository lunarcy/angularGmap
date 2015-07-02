/**
* Javascript Exercise 2 - AngularJS - Directives.
* @ Bin Jiang, 10 June, 2015
* 
**/

// app module. 
var app = angular.module('myApp', []);

var appMap = angular.module('mapApp', []);

var appGallery = angular.module('GalleryApp', ['ngRoute']);

appGallery.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'homeController', 
      templateUrl: 'views/home.html' 
    }) 
    .when('/photos/:id', {
      controller: 'photoController',
      templateUrl: 'views/photo.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});
