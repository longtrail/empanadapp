var app = angular.module('empanadapp');
app.controller('PedidoPersonaCtrl',  ["$scope", "PersonasService", "EmpanadasService", "$ionicPopup", function($scope, pServ, eServ, $ionicPopup) {
	
	//harcodeo ID y agrego persona. desp sacar
	var id = 1;
	pServ.add('hitler');

	$scope.persona = pServ.getPersona(id);
	$scope.empanadas = eServ.getEmpanadas();
	$scope.cantEmpanadas = $scope.persona.totalEmpanadas();
}]);