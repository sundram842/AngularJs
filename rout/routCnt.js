var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider.when("/home", {
    templateUrl: "./home.html",
    controller: "HomeController",
  });
});
app.controller("HomeController", function ($scope) {
  // Controller logic
});

app.controller("AboutController", function ($scope) {
  // Controller logic
});

app.controller("ContactController", function ($scope) {
  // Controller logic
});
