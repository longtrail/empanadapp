var app = angular.module('empanadapp');
app.controller('ResumenCtrl', ["$scope", 'PersonasService', 'EmpanadasService', 'Costos', "$state", function($scope, PersonasService, EmpanadasService, CostosService, $state) {
  
  //Defino variables utilizadas
  var Personas = PersonasService.getPersonas();

  // Obtengo costos definidos
  $scope.costos = CostosService.getCostos();

  // Defino templates para cada tipo de resumen elegido
	$scope.resumenes =
    [ { nombre: 'resumenGeneral', url: 'templates/resumenGeneral.html'},
      { nombre: 'resumenPersonas', url: 'templates/resumenPersonas.html'} ];
  $scope.resumen = $scope.resumenes[0];

  $scope.pedidoGeneral=function(){
  	$scope.resumen = $scope.resumenes[0];
  };

  $scope.pedidoPorPersonas = function() {
  	$scope.resumen = $scope.resumenes[1];
  };

  //Obtengo personas
  $scope.personas = PersonasService.getPersonas();
  $scope.cantPersonas = $scope.personas.length;

   $scope.getGustoEmpanada = function(id) {
      //return EmpanadasService.getEmpanada(id).gusto;
   };

   // Obtengo cantidad de empanadas por cada gusto [resumen general]
   $scope.empanadasGeneral = function() {
      var Empanadas = {};

      _(Personas).forEach(function(persona) {
        var empanadas = persona.getEmpanadas();
        empanadas.forEach(function (empanada){
          Empanadas[empanada.nombre] ? Empanadas[ empanada.nombre ] += empanada.cantidad : Empanadas[ empanada.nombre ] = empanada.cantidad;
        });
      });

      return Empanadas;
   };

   //Obtengo cantidad total de empanadas [resumen general]
   $scope.empanadasCantidadTotal = function() {
    var totalEmpanadas = 0;

     _(Personas).forEach(function(persona){
        totalEmpanadas += persona.totalEmpanadas();
     });

     return totalEmpanadas;
   };

   //Precios [resumen general]
   $scope.empanadasSubTotal = $scope.empanadasCantidadTotal() * $scope.costos.unitario;
   $scope.total = parseInt($scope.empanadasSubTotal) + parseInt($scope.costos.extra);
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
  

  /*Seteo swipes*/
  $scope.swipeRight = function(id){
    $state.go('tab.costos');
  };
}]);