'use strict';

var app = angular.module('site', ['firebase']);

app.controller('main', function($scope, $firebase) {

    $scope.audienceTab = 'intern';

    var firebaseRef = new Firebase("https://mentorintern.firebaseio.com/");

    $scope.calcTabStyle = function(tabId) {
        var styles = {};
        styles['background-color'] = ($scope.audienceTab == tabId)?'pink':'auto';
        return styles;
    }

});