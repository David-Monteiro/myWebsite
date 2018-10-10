var myProjects = [
	{
		name: "project 1",
		title: "Project 1: Lorem ipsum dolor sit amet",
		hero: "Project 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis, augue ac fermentum volutpat, ipsum eros vehicula nisi, eu ullamcorper ex ante non elit. Pellentesque eu nisi venenatis, gravida tortor non, mollis mauris.",
		link: "https://github.com/David-Monteiro/myWebsite",
		//image: "http://headerart.weebly.com/uploads/5/7/5/7/5757212/eye-catching-colorful-paints-art-header_orig.jpg"
		image: "images/patrick-hendry-723641-unsplash.jpg"
	}, 
	{
		name: "project 2",
		title: "Project 2: Lorem ipsum dolor sit amet",
		hero: "Project 2",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis, augue ac fermentum volutpat, ipsum eros vehicula nisi, eu ullamcorper ex ante non elit. Pellentesque eu nisi venenatis, gravida tortor non, mollis mauris.",
		link: "https://github.com/David-Monteiro/myWebsite",
		//image: "http://headerart.weebly.com/uploads/5/7/5/7/5757212/4495832_orig.jpg"
		image: "images/roman-mager-59976-unsplash.jpg"
	},
	{
		name: "project 3",
		title: "Project 3: Lorem ipsum dolor sit amet",
		hero: "Project 3",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis, augue ac fermentum volutpat, ipsum eros vehicula nisi, eu ullamcorper ex ante non elit. Pellentesque eu nisi venenatis, gravida tortor non, mollis mauris.",
		link: "https://github.com/David-Monteiro/myWebsite",
		//image: "http://headerart.weebly.com/uploads/5/7/5/7/5757212/5832164_orig.jpg"
		image: "images/pavan-trikutam-1660-unsplash.jpg"
	},
	{
		name: "project 4",
		title: "Project 4: Lorem ipsum dolor sit amet",
		hero: "Project 4",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis, augue ac fermentum volutpat, ipsum eros vehicula nisi, eu ullamcorper ex ante non elit. Pellentesque eu nisi venenatis, gravida tortor non, mollis mauris.",
		link: "https://github.com/David-Monteiro/myWebsite",
		//image: "http://headerart.weebly.com/uploads/5/7/5/7/5757212/6370839_orig.jpg"
		image: "images/aziz-acharki-549137-unsplash.jpg"
	}
];

angular.module('app')
.controller('portofolioCtrl', function($scope, $window) {
	$scope.projects = myProjects;
    $scope.panel = -1;
	$scope.hover = false;
	$scope.cardHover = [false , false, false, false ];
	$scope.hovering = "'opacity': '0.5'";
	$scope.panelOpen = false;
	
	$scope.selectPanel = function(setPanel) {
		console.log("asda");
		if($scope.panel === setPanel) {
			$scope.panel = -1; 
			$scope.panelOpen = false;
		} 
		else {
			$scope.panel = setPanel; 
			$scope.panelOpen = true; 
		}
	}
	
	$scope.isSelected = function(checkPanel) {
		return $scope.panel === checkPanel
	}

	$scope.setWindowSize = function() {
		$scope.windowWidth = $window.innerWidth;
	}

	angular.element($window).bind('resize', function(){
		$scope.windowWidth = $window.innerWidth;
	}); 

});