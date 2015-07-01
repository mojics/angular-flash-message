angular.module('angularFlash',[]);

(function(app) {
'use strict';
  
  app.directive('angularFlash', [AngularFlash]);

  function AngularFlash() {
    return {
      scope: {},
      restrict: 'E',
      replace: true,
      template: '<div class="angular-flash {{type()}}" ng-show="showFlag() === true">{{message()}}</div>',
      controller: ['$scope','$attrs','$flash', FlashCtrl]
    };
  }

  function FlashCtrl($scope, $attrs, $flash){
    $scope.message = function(){
      return $flash.message;
    };

    $scope.showFlag = function(){
      return $flash.isShown();
    };

    $scope.type = function(){
      return $flash.type;
    };

    $scope.$on('$destroy',function(){
      $flash.hide();
    });
  }
})(angular.module('angularFlash'));