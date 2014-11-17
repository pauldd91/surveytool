'use strict';

app.controller('NavigationCtrl', ['$scope', '$state', '$location', '$rootScope', 'Questions', function ($scope, $state, $location, $rootScope, Questions) {



  $scope.isActive = function (state) {
    return $state.includes(state);
  };

  $scope.goto = function(state) {
    if ($rootScope.progressTracker.indexOf(state) >= 0 && $rootScope.progressTracker.indexOf(state) <= Questions.length - 1 ) {
      return;
    }
    else {
      $state.go(state);
    }
  };

}]);
