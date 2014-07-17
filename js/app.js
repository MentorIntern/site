'use strict';

var app = angular.module('site', ['firebase']);

app.controller('main', function($scope, $firebase) {

    // $scope.bitIdsSource = ['a0','a1','a2','a3','b0','b1','b2','b3','c0','c1','c2','c3','d0','d1','d2','d3'];
    // $scope.bitIds = [];

    $scope.audienceTabs = ['intern','mentor','employeer','school'];
    $scope.audienceTab = 'intern';

    var firebaseRef = new Firebase("https://mentorintern.firebaseio.com/");
    // $firebase(firebaseRef).$bind($scope, "bitMap").then(function(){
    //     //This puts the list of square bitIds in the right variable for the ng-repeat, but not until after the data is retrieved
    //     $scope.bitIds = $scope.bitIdsSource;
    // });

    $scope.calcTabStyle = function(tabId) {
        var styles = {};
        if ($scope.audienceTab == tabId) {
            styles['background-color'] = 'green';
        } else {
            styles['background-color'] = 'grey';
        }
        return styles;
    }

    // $scope.onClickBit = function(bitId) {
    //     if ($scope.bitMap[bitId] === 'White') {
    //         $scope.bitMap[bitId] = 'Yellow';
    //     } else {
    //         $scope.bitMap[bitId] = 'White'
    //     }
    // }

    // $scope.score = function() {
    //     var white = 0;
    //     var yellow = 0
    //     for (var key in $scope.bitMap) {
    //         if ($scope.bitMap.hasOwnProperty(key)) {
    //             if ($scope.bitMap[key] === "White") {
    //                 white++;
    //             } else if ($scope.bitMap[key] === "Yellow") {
    //                 yellow++;
    //             }
    //         }
    //     }
    //     return {"White": white, "Yellow": yellow};
    // }

});
