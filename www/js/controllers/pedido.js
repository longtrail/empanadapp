var app = angular.module('empanadapp');
app.controller('PedidoCtrl', ["$scope", "PersonasService", "$ionicPopup", function($scope, Personas, $ionicPopup) {
	$scope.personas = Personas.getPersonas();

	$scope.agregar = Personas.add;

	$scope.showPopup = function() {
		$scope.data = {};

		$scope.submit = function(e) {
			if (!$scope.data.nombre) {
				e.preventDefault();
				return null;
			} 
			else {
				return $scope.agregar($scope.data.nombre); 
			}
		};

		$scope.keyPressed = function(ev) {
			if (ev.which==13) {
				person = $scope.submit()
				if (person) {
					myPopup.close();
				}
			}
		};

		var myPopup = $ionicPopup.show({
			template: '<input ng-keypress="keyPressed($event)" ng-model="data.nombre">',
			title: 'Nombre del nuevo',
			scope: $scope,
			buttons: [
				{ text: 'Cancel' },
				{
					text: '<b>Save</b>',
					type: 'button-energized',
					onTap: $scope.submit
				},
			]
		});
	};
}]);