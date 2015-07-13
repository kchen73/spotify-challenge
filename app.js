var baseUrl = 'https://api.spotify.com/v1/search?type=track&limit=1&q='
var myApp = angular.module('myApp', [])

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.audioObject = {}  
  $scope.getSongs = function() {
    $http.get(baseUrl + $scope.track).success(function(response) {
      $scope.tracks = response.tracks.items
    })
  }   
  $scope.getSongs2 = function() {
    $http.get(baseUrl + $scope.track2).success(function(response) {
      $scope.tracks2 = response.tracks.items
    })
  }

  $scope.getSongs3 = function() {
    $http.get(baseUrl + $scope.track3).success(function(response) {
      $scope.tracks3 = response.tracks.items
    })
  }

  $scope.getSongs4 = function() {
    $http.get(baseUrl + $scope.track4).success(function(response) {
      $scope.tracks4 = response.tracks.items
    })
  }

  $scope.getSongs5 = function() {
    $http.get(baseUrl + $scope.track5).success(function(response) {
      $scope.tracks5 = response.tracks.items
    })
  }
  
  $scope.getSongs6 = function() {
    $http.get(baseUrl + $scope.track6).success(function(response) {
      $scope.tracks6 = response.tracks.items
    })
  }  

  $scope.getSongs7 = function() {
    $http.get(baseUrl + $scope.track7).success(function(response) {
      $scope.tracks7 = response.tracks.items
    })
  }   

  $scope.getSongs8 = function() {
    $http.get(baseUrl + $scope.track8).success(function(response) {
      $scope.tracks8 = response.tracks.items
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


