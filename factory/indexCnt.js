var app=angular.module("myAppA",[]).controller("MainControllerA",[
    "$scope",'myfactory',
    function($scope,myfactory) {
        $scope.input="";
        $scope.output ="nkn"
       
        $scope.outputDisplay=function(input)
        {
            console.log(input);
             $scope.output = myfactory.object1(input);
        }
        
    }
]);