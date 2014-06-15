var app = angular.module('empanadapp');
app.controller('PedidoPersonaCtrl', ["$scope", "$stateParams" , function($scope, $stateParams) {
	$scope.empanadas=[{nombre:"ATUN", cantidadSeleccionadas:2},{nombre:"jyq", cantidadSeleccionadas:1}];
}]);