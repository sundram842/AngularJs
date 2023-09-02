// dataService.js

angular.module("myApp",[]).service("service", [
  "$http",
  function ($http) {
    this.getData = function () {
      return $http.get("https://jsonplaceholder.typicode.com/todos/"); 
    };
  },
]);
