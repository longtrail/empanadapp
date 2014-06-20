var app = angular.module('empanadapp');

//sacar dependencias de lodash de todos los factories, hacerlo general para toda la app
app.factory('EmpanadasService', [function(){
  var predefined = [
    {
      id: 1,
      nombre : 'Carne suave'
    },
    {
      id : 2,
      nombre : "Pollo"
    },
    {
      id : 3,
      nombre : "Humita"
    },
    {
      id : 4,
      nombre : "Carne cuchillo"
    },
    {
      id : 5,
      nombre : "Atun"
    }
  ];
  var empanadas = _.cloneDeep(predefined);
  var currentId = predefined.length+1;

  var nextId = function(){
    return currentId++;
  };

  return {
    getEmpanadas: function () {
      return empanadas;
    },
    getEmpanada: function (id) {
       return _(empanadas).find(function (e) {
          return e.id === id
       });
    },
    add: function (nombre) {
      var id = nextId();

      var nueva = {
        id: id,
        nombre: nombre
      };

      empanadas.push(nueva);
      return nueva;
    },
    predefinedList: function() {
      return predefined;
    },
    clear: function(){
      empanadas = _.cloneDeep(predefined);
    }
  };
}]);


app.factory('PersonasService', ["Persona", function(Persona){
    var currentId = 1;
    var personas = [];
    var nextId = function(){
      return currentId++;
    };

    return {
      getPersonas: function () {
        return personas;
      },
      getPersona: function (id) {
         return _(personas).find(function (e) {
            return e.id === id
         });
      },
      add: function (nombre) {
        var nuevo = new Persona(nombre);
        
        var id = nextId();

        nuevo.id = id;
        personas.push(nuevo);
        return nuevo;
      },
      clear: function(){
        personas = [];
      }
    };
}]);

app.factory('Persona', ['EmpanadasService', function(EmpanadasService){
  function Persona(nombre) {
    this.nombre = nombre;
    this.id = -1;
    this.empanadas = {};
  };

  Persona.prototype = {
    getEmpanadas: function(){
      var empanadas = [];
      
      _(persona.empanadas).chain().keys().each(function(idEmpanada){
        var id = parseInt(idEmpanada)
        var empanada = EmpanadasService.getEmpanada(id);
        empanada.cantidad = this.empanadas[id];
        empanadas.push(empanada)
      });

      return empanadas;
    },
    addEmpanada: function(id){
      this.empanadas[id] = this.cantEmpanadas(id) + 1;
      return this;
    },
    removeEmpanada: function(id) {
      if (this.cantEmpanadas(id) == 0) {
        throw RangeError('No tiene empanadas para remover');
      }

      this.empanadas[id] = this.cantEmpanadas(id) - 1;
      if (this.empanadas[id] === 0) {
        delete this.empanadas[id]
      }
      return this
    },
    cantEmpanadas: function(id) {
      return this.empanadas[id] || 0;
    },
    totalEmpanadas: function(){
      return this.empanadas.length
    }
  }

  return Persona
}]);
