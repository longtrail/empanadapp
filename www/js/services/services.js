var app = angular.module('empanadapp');

/*Service que maneja las empanadas*/
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

  /* Metodos que entiende el service*/
  return {

    /* Devuelve objeto con todas las empanadas*/
    getEmpanadas: function () {
      return empanadas;
    },

    /* Devuelve objeto de la empanada cuyo id coincida con el parametro*/
    getEmpanada: function (id) {
       return _(empanadas).find(function (e) {
          return e.id === id
       });
    },

    /* Agrega nueva empanada con el nombre en el parametro. Devuelve objeto recien creado*/
    add: function (nombre) {
      var id = nextId();

      var nueva = {
        id: id,
        nombre: nombre
      };

      empanadas.push(nueva);
      return nueva;
    },

    /* Devuelve las empanadas por defecto*/
    predefinedList: function() {
      return predefined;
    },

    /* Reinicia el objeto con las empanadas*/
    clear: function(){
      empanadas = _.cloneDeep(predefined);
    }
  };
}]);


/*
*Service que gestiona a todas las personas
*/
app.factory('PersonasService', ["Persona", function(Persona){
    var currentId = 1;
    var personas = [];
    var nextId = function(){
      return currentId++;
    };

    /* Metodos que entiende el service*/
    return {

      /* Retorna array con todas las personas de la app*/
      getPersonas: function () {
        return personas;
      },

      /* Retorna la persona cuyo id sea el enviado*/
      getPersona: function (id) {
         return _(personas).find(function (e) {
            return e.id === id;
         });
      },

      /* Agrega nueva persona con el nombre ingresado, y devuelve el objeto persona creado*/
      add: function (nombre) {
        var nuevo = new Persona(nombre);
        
        var id = nextId();

        nuevo.id = id;
        personas.push(nuevo);
        return nuevo;
      },

      /* Resetea el array de personas*/
      clear: function(){
        personas = [];
      }
    };
}]);

/*service que maneja a cada persona*/
app.factory('Persona', ['EmpanadasService', function(EmpanadasService){
  function Persona(nombre) {
    this.nombre = nombre;
    this.id = -1;
    this.empanadas = {};
  };

  /* Metodos que entiende el service*/
  Persona.prototype = {

    /* Devuelve todas las empanadas de la persona en un objeto*/
    getEmpanadas: function(){
       var self= this;
      var empanadas = [];
      
      _(self.empanadas).chain().keys().each(function(idEmpanada){
        var id = parseInt(idEmpanada)
        var empanada = EmpanadasService.getEmpanada(id);
        empanada.cantidad = self.empanadas[id];
        empanadas.push(empanada);
      });

      return empanadas;
    },

    /* Agrega empanada cuyo ID sea e enviado a la persona*/
    addEmpanada: function(id){
      this.empanadas[id] = this.cantEmpanadas(id) + 1;
      return this;
    },

    /* Borra 1 empanada cuyo ID sea el enviado a la persona*/
    removeEmpanada: function(id) {
      if (this.cantEmpanadas(id) == 0) {
        throw RangeError('No tiene empanadas para remover');
      }

      this.empanadas[id] = this.cantEmpanadas(id) - 1;
      if (this.empanadas[id] === 0) {
        delete this.empanadas[id];
      }
      return this
    },

    /* Devuelve cantidad de empanadas del ID enviado de la persona*/
    cantEmpanadas: function(id) {
      return this.empanadas[id] || 0;
    },

    /*Devuelve el total de las empanadas que tiene la persona*/
    totalEmpanadas: function(){
      var total = 0;
      _.forIn(this.empanadas, function() {
        total += this.cantidad;
      });
      return total;
    }
  }

  return Persona;
}]);
