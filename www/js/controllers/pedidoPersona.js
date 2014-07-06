var app = angular.module('empanadapp');
app.controller('PedidoPersonaCtrl',  ["$scope", "PersonasService", "EmpanadasService", "PopUpBuilder", "$state", function($scope, pServ, eServ, popUp, $stateParam) {

	//harcodeo ID y agrego persona. desp sacar
	var id = 1;
	personaNueva = pServ.add('hitler');

	//Recibo persona de la vista de personas
	//var id = $state(personaId);

	/*Para popUp*/
	popUp.submit = function(data) {
   	 return eServ.add(data); 
  	};
  	popUp.placeholder = "Escribi el nombre del gusto";
 	popUp.title = "Agregar Gusto";
	$scope.showPopup = popUp.build;
	/**/

	/*Datos a mostrar desde un principio*/
	$scope.persona = pServ.getPersona(id);
	$scope.empanadas = eServ.getEmpanadas();
	$scope.total = $scope.persona.totalEmpanadas();
}]);