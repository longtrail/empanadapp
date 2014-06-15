var app = angular.module('empanadapp');
app.controller('ResumenCtrl', ["$scope", function($scope) {

	$scope.listados =
    [ { name: 'resumenGeneral', url: 'views/resumenGeneral.html'},
      { name: 'resumenPersonas', url: 'views/resumenPersonas.html'} ];
  	$scope.listado = $scope.listados[0];

  	function pedidoGeneral(){
  		$scope.listado = $scope.listados[0];
  	}
  	function pedidoPorPersonas(){
  		$scope.listado = $scope.listados[1];
  	}

  	$scope.EmpanadasGeneral =[{cantidad:"5", gusto:"Carne"},{cantidad:"3",gusto:"pollo"}];
  	
  	$scope.Personas = [
  		{nombre:"Alan", empanadas:[{cantidad:"5", gusto:"Carne"},{cantidad:"3",gusto:"Pollo"}]},
		{nombre:"Guido", empanadas:[{cantidad:"2", gusto:"Carne"},{cantidad:"4",gusto:"Jamon y Queso"}]}
	];

	//$scope.TotalEmpanadas =	


}]);