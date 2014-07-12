var app = angular.module('empanadapp');
app.controller('PedidoPersonaCtrl',  ["$scope", "PersonasService", "EmpanadasService", "PopUpBuilder", "$stateParams", function($scope, personasServ, empanadasServ, popUp, $stateParams) {

	//seteo ID de la persona que recibo
	//var id = $stateParams.personaId;

	var persona = personasServ.add('Persona de prueba');
	var id = persona.id;

	/*Seteo valores del pop up*/
	popUp.submit = function(data) {
   	 return empanadasServ.add(data); 
  	};
  	popUp.placeholder = "Escribi el nombre del gusto";
 	popUp.title = "Agregar Gusto";
	$scope.showPopup = popUp.build;

	/*Datos header*/
	$scope.persona = personasServ.getPersona(id);
	$scope.empanadas = empanadasServ.getEmpanadas();
	$scope.total = $scope.persona.totalEmpanadas();
}]);