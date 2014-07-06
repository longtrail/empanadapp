var app = angular.module('empanadapp');
app.controller('CostosCtrl', ["$scope","Costos", function($scope,Costos) {
	window.costos = Costos
	$scope.costos = Costos.getCostos();
}]);