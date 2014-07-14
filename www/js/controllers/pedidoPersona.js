var app = angular.module('empanadapp');
app.controller('PedidoPersonaCtrl',  ["$scope", "PersonasService", "EmpanadasService", "PopUpBuilder", "$state", "$stateParams", function($scope, personasServ, empanadasServ, popUp, $state, $stateParams) {

	//seteo ID de la persona que recibo
	var id = $stateParams.personaId;

	/*Datos header*/
	$scope.persona = personasServ.getPersona(id);
	$scope.empanadas = empanadasServ.getEmpanadas();
	$scope.total = $scope.persona.totalEmpanadas();

	/*Seteo valores del pop up*/
	popUp.submit = function(data) {
   	 return empanadasServ.add(data); 
  	};
  	popUp.placeholder = "Escribe aquí";
 	popUp.title = "Ingrese gusto";
	$scope.showPopup = popUp.build;

	/*Seteo swipes*/
	$scope.swipeLeft = function(id){
		$state.go('tab.costos');
	};
}]);