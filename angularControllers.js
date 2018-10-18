


var app = angular.module("myApp", []);

app.controller("myController", function($scope){
        
        $scope.ciphars = [];
        
        $scope.updateCiphars = function(){
            if($scope.userText == "" || $scope.userText == undefined){
                
            }else {
                $scope.ciphars[0] = {name: "All Lower Case", code: $scope.userText.toLowerCase()};
                $scope.ciphars[1] = {name: "All Upper Case", code: $scope.userText.toUpperCase()};
                $scope.ciphars[2] = {name: "Proper Sentance", code: toProperSentance($scope.userText)};
                $scope.ciphars[3] = {name: "Upper Case Each Word", code: toUpperEachWord($scope.userText)};
                $scope.ciphars[4] = {name: "Binary", code: toBinary($scope.userText)};
                $scope.ciphars[5] = {name: "Morse Code", code: toMorseCode($scope.userText)};
                $scope.ciphars[6] = {name: "Randomize Letters", code: toRandLettering($scope.userText)};
                $scope.ciphars[7] = {name: "Randomize Words", code: toRandWording($scope.userText)};
                $scope.ciphars[8] = {name: "Reverse", code: toReverse($scope.userText)};
                
                for(var i = 1; i < 26; i++){
                    $scope.ciphars[i + 8] = {name: "Caeser Cipher Rot" + i, code: toCaesar($scope.userText, i)}
                    ;
                }
            }
        };
    });