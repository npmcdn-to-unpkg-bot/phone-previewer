angular.module('phonePreview', [])

.controller('bodyController', ['$scope', '$sce', function ($scope, $sce) {
  $scope.pageData = {
    iFrameUrl: $sce.trustAsResourceUrl('http://wired.com')
  }
      
  $scope.updateIFrameUrl = function (newIFrameUrl) {
    $scope.pageData.iFrameUrl = $sce.trustAsResourceUrl(newIFrameUrl);
  }

  $scope.goBack = function() {
    window.history.back();
  }
}]);
