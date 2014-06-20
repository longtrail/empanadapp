var app = angular.module('empanadapp');
app.controller('PedidoCtrl', ["$scope", "PersonasService", "PopUpBuilder", function($scope, Personas, PopUpBuilder) {
	$scope.personas = Personas.getPersonas();

	$scope.agregar = Personas.add;

	PopUpBuilder.submit = function(data) {
    return $scope.agregar(data); 
  };

  PopUpBuilder.placeholder = "Escribi el nombre de la persona";

  PopUpBuilder.title = "Agregar persona";

	$scope.showPopup = PopUpBuilder.build // Returns the function

}]);

