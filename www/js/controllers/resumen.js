var app = angular.module('empanadapp');
app.controller('ResumenCtrl', ["$scope",'PersonasService','EmpanadasService','Costos', function($scope, PersonasService,EmpanadasService, Costos) {
  $scope.costos = Costos.getCostos();

	$scope.resumenes =
    [ { nombre: 'resumenGeneral', url: 'templates/resumenGeneral.html'},
      { nombre: 'resumenPersonas', url: 'templates/resumenPersonas.html'} ];
  	$scope.resumen = $scope.resumenes[0];

  	$scope.pedidoGeneral=function(){
  		$scope.resumen = $scope.resumenes[0];
  	}
  	$scope.pedidoPorPersonas=function(){
  		$scope.resumen = $scope.resumenes[1];
  	}


    $scope.personas = PersonasService.getPersonas();
    $scope.cantPersonas = $scope.personas.length;

   $scope.getGustoEmpanada=function(id){
      //return EmpanadasService.getEmpanada(id).gusto;
   }

   $scope.getEmpanadasGeneral=function(){
      var Empanadas = {};
      var Personas = PersonasService.getPersonas();
      _(Personas).forEach(function(persona){
        var empanadas = persona.getEmpanadas();
        empanadas.forEach(function (empanada){
          Empanadas[ empanada.nombre ] ? Empanadas[ empanada.nombre ] += empanada.cantidad : Empanadas[ empanada.nombre ] = empanada.cantidad;
        });
      });
      console.log(Empanadas);
      return Empanadas;
   }


  $scope.togglePersona = function(persona) {
    if ($scope.isPersonaShown(persona)) {
      $scope.shownPersona = null;
    } else {
      $scope.shownPersona = persona;
    }
  };
  $scope.isPersonaShown = function(persona) {
    return $scope.shownPersona === persona;
  };
  

}]);