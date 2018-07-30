angular.module('app')
.controller('portofolioCtrl', function($scope) {
    $scope.panel = -1;
	$scope.hover = false;
	$scope.cardHover = [false , false, false, false ];
	$scope.hovering = "'opacity': '0.5'";
	
	$scope.selectPanel = function(setPanel) {
		console.log("asda");
		if($scope.panel === setPanel) $scope.panel = -1;
		else $scope.panel = setPanel;
	}
	
	$scope.isSelected = function(checkPanel) {
		return $scope.panel === checkPanel
	}

});