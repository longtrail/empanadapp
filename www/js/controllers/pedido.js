var app = angular.module('empanadapp');
app.controller('PedidoCtrl', ["$scope", "PersonasService", "PopUpBuilder", "$state", function($scope, personasServ, PopUpBuilder, $state) {

	/*Cambio de tab a pedido-persona y envio el ID de la persona*/
	$scope.goPersona = function(id){
		$state.go('tab.pedido-persona', {personaId: id});
	};

	/*Seteo valores del Pop Up*/
	PopUpBuilder.submit = function(data) {
    	return personasServ.add(data);
  	};
  	PopUpBuilder.placeholder = "Escribi el nombre de la persona";
 	PopUpBuilder.title = "Agregar persona";
	$scope.showPopup = PopUpBuilder.build;

	/*Datos a mostrar*/
	$scope.personas = personasServ.getPersonas();

	/*Seteo swipes*/
	$scope.swipeLeft = function(id){
		$state.go('tab.costos');
	};
}]);

