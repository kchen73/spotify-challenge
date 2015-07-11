var data;
var baseUrl = 'https://api.spotify.com/v1/search?type=track&limit=1&q='
var myApp = angular.module('myApp', [])

var myCtrl = myApp.controller('myCtrl', function($scope, $http, $q) {
  $scope.audioObject = {}
  var one = $http.get(baseUrl + $scope.track)
  var two = $http.get(baseUrl + $scope.track2) 
  $q.all([one, two]).then(function(response) {
      data = $scope.tracks = response.tracks.items
  })

 

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


