var app = angular.module('empanadapp');
app.controller('PedidoCtrl', ["$scope", "PersonasService", "PopUpBuilder", "$state", function($scope, Personas, PopUpBuilder, $state) {
	$scope.personas = Personas.getPersonas();

	$scope.agregar = Personas.add;

	$scope.empaname = function(id){
		$state.go('tab.pedido-persona', {personaId: id})
	};

	PopUpBuilder.submit = function(data) {
    return $scope.agregar(data); 
  };
  PopUpBuilder.placeholder = "Escribi el nombre de la persona";
  PopUpBuilder.title = "Agregar persona";

	$scope.showPopup = PopUpBuilder.build // Returns the function	
}]);

