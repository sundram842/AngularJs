// Define your AngularJS module
var app = angular.module("myApp", []);

// Create the HTTP interceptor factory
app.factory("httpInterceptor", [
  "$q",
  "$rootScope",
  function ($q, $rootScope) {
    var loadingCount = 0;
    return {
    
      request: function (config) {
        // Add an Authorization header with a token
        console.log("hi");
        if (loadingCount === 0) {
          $rootScope.showLoading = true;
        }
        loadingCount++;
        return config || $q.when(config);
      },

      response: function (config) {
        loadingCount--;
        if (loadingCount === 0) {
          $rootScope.showLoading = true;
        }
         $rootScope.showLoading = false;
        return config || $q.when(config);
      },
      responseError: function (rejection) {
        loadingCount--;
        if (loadingCount === 0) {
          $rootScope.showLoading = false;
        }
        return $q.reject(rejection);
      },
    };
  },
]);

// Configure the HTTP interceptor
app.config([
  "$httpProvider",
  function ($httpProvider) {
    $httpProvider.interceptors.push("httpInterceptor");
  },
]);

// Create a controller to demonstrate the interceptor
app.controller("MainController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    // Make an HTTP request using $http service
    $http
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(function (response) {
        $scope.data = response.data;
      })
      .catch(function (error) {
        // console.error("Error:", error);
        console.log(error);
      });
  },
]);
