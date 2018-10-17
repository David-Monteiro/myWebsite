var myProjects = [
	{
		name: "The Wild",
		title: "The Wild",
		hero: "The Wild",
		description: "Application built to run on Android devices. “The Wild” mimics animals in the wild. The main elements of the application are the simulation of a wolf pack hunting. It does this by using a unique and sophisticated algorithm. The program also replicates the daily survival tasks of animals. Such tasks are eating, drinking and most importantly, survive. Animals are labelled as predators and preys and much like in real life, their feeding methods give an interesting dynamic to the program specially in the way they interact with each other.",
		link: "https://github.com/David-Monteiro/The-Wild",
		//image: "http://headerart.weebly.com/uploads/5/7/5/7/5757212/eye-catching-colorful-paints-art-header_orig.jpg"
		image: "images/patrick-hendry-723641-unsplash.jpg"
	}, 
	{
		name: "Maths Learning App",
		title: "Maths Learning App",
		hero: "Maths Learning App",
		description: "App designed to aid the development of maths skills for young children. The app is a game where the user is set achievable challenges and rewarded, when correct, with virtual gold stars and stickers. On completing one set of challenges the user is then able to unlock the next set in a series. Each set in the series is slightly more difficult than the last. The application focus on simple arithmetic questions and uses android tools to interact with the users.",
		link: "https://github.com/David-Monteiro/MathLearn",
		//image: "http://headerart.weebly.com/uploads/5/7/5/7/5757212/4495832_orig.jpg"
		image: "images/roman-mager-59976-unsplash.jpg"
	},
	{
		name: "Chat Applet",
		title: "Chat Applet",
		hero: "Chat Applet",
		description: "Chat created using java server sockets to run the server and java applet to run as many clients as possible. Using the read writer problem as solution the program runs smoothly giving a nice experience to its users.",
		link: "https://github.com/David-Monteiro/Java-Concurrent-and-Distributed-Programming/tree/master/ChatServer",
		//image: "http://headerart.weebly.com/uploads/5/7/5/7/5757212/5832164_orig.jpg"
		image: "images/pavan-trikutam-1660-unsplash.jpg"
	},
	{
		name: "My Website",
		title: "My Website",
		hero: "My Website",
		description: "Website created making use if the famous MEAN stack with the intent of learning new programming languages and technologies. Upon building the website, its main audience are students seeking different approaches to coding problems and to any one else interested in my core skills and abilities as the website links with my GitHub, for those interested in viewing my projects source code. The website further reassures its value and intent with its audience as it contains a blog section where I continuously insert my input on personal projects and or new technologies I am experimenting.",
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