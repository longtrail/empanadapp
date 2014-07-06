var app = angular.module('empanadapp');
app.controller('PedidoPersonaCtrl',  ["$scope", "PersonasService", "EmpanadasService", "PopUpBuilder", "$state", function($scope, pServ, eServ, popUp, $stateParam) {
	
	//harcodeo ID y agrego persona. desp sacar
	var id = 1;
	personaNueva = pServ.add('hitler');

	//Recibo persona de la vista de personas
	//var id = $stateParam(personaId);

	$scope.persona = pServ.getPersona(id);
	$scope.empanadas = eServ.getEmpanadas();
	$scope.cantEmpanadas = $scope.persona.totalEmpanadas();
}]);