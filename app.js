var baseUrl = 'https://api.spotify.com/v1/search?type=track&limit=1&q='
var myApp = angular.module('myApp', [])
var data1;
var data2;

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.audioObject = {}  
  $scope.getSongs = function() {
    $http.get(baseUrl + $scope.track).success(function(response) {
      data1 = $scope.tracks = response.tracks.items
  $scope.getSongs2 = function() {
    $http.get(baseUrl + $scope.track2).success(function(response) {
      data2 = $scope.tracks = response.tracks.items
    })
  }


  $scope.play = function(song) {
    if($scope.currentSong == song) {
      $scope.audioObject.pause()
      $scope.currentSong = false
      return
    }
    else {
      if($scope.audioObject.pause != undefined) $scope.audioObject.pause()
      $scope.audioObject = new Audio(song);
      $scope.audioObject.play()  
      $scope.currentSong = song
    }
  }

})


