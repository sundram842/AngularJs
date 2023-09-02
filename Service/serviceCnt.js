// mainController.js

angular.module("myApp").controller("MainController", [
  "$scope",
  "service",
  function ($scope, service) {
    $scope.data = []; // Initialize an empty array to hold the fetched data

    // Function to fetch data using the service
    $scope.fetchData = function () {
      service
        .getData()
        .then(function (response) {
          $scope.data = response.data; // Assign the fetched data to the scope variable
        })
        .catch(function (error) {
          console.error("Error fetching data:", error);
        });
    };
  },
]);
