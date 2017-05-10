/*globals angular, fruits, vegetables*/

/* setup your angular app here */



var myApp = angular.module('MyApp', []);

myApp.controller("Main", ['$scope', function($scope) {
    $scope.produceList = shuffle(fruits.concat(vegetables));
    $scope.fruits = [];
    $scope.vegetables = [];

    $scope.moveLeft = function(item) {
        if (fruits.includes(item)) {
            var fruit = ($scope.produceList.splice($scope.produceList.indexOf(item), 1)).toString();
            $scope.fruits.push(fruit);
        } else {
            var vege = ($scope.produceList.splice($scope.produceList.indexOf(item), 1)).toString();
            $scope.vegetables.push(vege);


        }

        /* $scope.moveRight = function(item) {

             var vege = ($scope.produceList.splice($scope.produceList.indexOf(item), 1)).toString();
             $scope.vegetables.push(vege);

         };
         $scope.moveRightMiddle = function(item) {
             var fruit = ($scope.fruits.splice($scope.fruits.indexOf(item), 1)).toString();
             $scope.produceList.push(fruit);

         };

         $scope.moveLeftMiddle = function(item) {
             var vege = ($scope.vegetables.splice($scope.vegetables.indexOf(item), 1)).toString();
             $scope.produceList.push(vege);

         };*/



        /*$scope.fruits.forEach(function(produce) {
        if (vegetables.indexOf(produce) === -1) {
            return false;
        }
    });

}*/
    }

}]);

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
