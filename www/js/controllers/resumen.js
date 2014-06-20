var app = angular.module('empanadapp');
app.controller('ResumenCtrl', ["$scope",'PersonasService','EmpanadasService', function($scope, PersonasService,EmpanadasService) {

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

  	$scope.empanadasGeneral =[{cantidad:"5", gusto:"Carne"},{cantidad:"3",gusto:"pollo"}];
  	var kova = PersonasService.add('Kova');
    kova.addEmpanada(2);
    kova.addEmpanada(2);
    kova.addEmpanada(3);
    var guido = PersonasService.add('Guido');
    guido.addEmpanada(1);
    guido.addEmpanada(3);


    $scope.personas = PersonasService.getPersonas();

    _($scope.personas).each(function(persona){
      console.log(persona);
      persona.empanadas = persona.getEmpanadas();
    });

    /*var Personas = PersonasService.getPersonas();
    empanadas = _.chain(Personas)
      .map(function(persona){ return persona.getEmpanadas })
      .
    //Adapto la coleccion de empanadas que me devuelve el service a una coleccion de elementos {cantidad,gusto}
   
  	/*$scope.personas = [
  		{nombre:"Alan", empanadas:[{cantidad:"5", gusto:"Carne"},{cantidad:"3",gusto:"Pollo"}]},
		{nombre:"Guido", empanadas:[{cantidad:"2", gusto:"Carne"},{cantidad:"4",gusto:"Jamon y Queso"}]}
	 ];
*/
   $scope.getGustoEmpanada=function(id){
      //return EmpanadasService.getEmpanada(id).gusto;
   }



	//$scope.TotalEmpanadas =	
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