 angular.module('friendsList')
  .controller('mainCtrl',
  function($scope){
  $scope.friends = ['Bob', 'Sue', 'Frank', 'Peter'];
  $scope.addFriend = function() {
    $scope.friends.push($scope.newFriend);
    $scope.newFriend = "";

  }

});
