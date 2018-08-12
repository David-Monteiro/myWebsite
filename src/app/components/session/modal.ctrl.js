angular.module('app')
	.controller('ModalCtrl', function ($scope, $uibModal) {

		$scope.openModal = function (templ) {
			console.log(templ);
			var templa = templ;
			$uibModal.open( {
				templateUrl: 'templates/modal.html',
				controller: function ($scope, $uibModalInstance) {

					$scope.$on('login', function (_) {
						$uibModalInstance.close()
					});

					$scope.$on('closeModal', function (_) {
						$uibModalInstance.dismiss('cancel');
					});

					$scope.getTemplateUrl = function(templ) {
						if (templa === "login") return "templates/login.html";
						if (templa === "register") return "templates/register.html";
					}
				}
			}).result.then(function(){}, function(res){})
		};

});
