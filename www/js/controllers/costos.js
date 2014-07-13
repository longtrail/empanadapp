var app = angular.module('empanadapp');
app.controller('CostosCtrl', ["$scope","Costos", "$state", function($scope, Costos, $state) {
	window.costos = Costos
	$scope.costos = Costos.getCostos();

	/*Seteo swipes*/
	$scope.swipeLeft = function(id){
		$state.go('tab.resumen');
	};

	$scope.swipeRight = function(id){
		$state.go('tab.pedido');
	};
}]);