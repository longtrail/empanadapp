app.service('PopUpBuilder', ['$ionicPopup', '$rootScope', function($ionicPopup, $rootScope){

  var submitCallback = _.bind(function(e){
    if (!scope.data.input) {
      e.preventDefault();
      return false;
    }
    else {
      this.submit(scope.data.input)
      return true;
    }
  }, this);

  var scope = $rootScope.$new();

  ///////////////// METHODS //////////////////////
  this.submit = function() { return true; };  
  this.title = "Agregar";
  this.placeholder = "";
  this.build = _.bind(function() {
    scope.data = {};
    scope.placeholder = this.placeholder;
    scope.keyPressedForPopup = function(ev) {
      if (ev.which==13) {
        ok = submitCallback();
        if (ok) {
          myPopup.close();
          return ok;
        }
      }
    };

    var myPopup = $ionicPopup.show({
      template: '<input placeholder="{{placeholder}}" ng-keypress="keyPressedForPopup($event)" ng-model="data.input">',
      title: this.title,
      scope: scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          type: 'button-energized',
          onTap: submitCallback
        },
      ]
    });
  }, this);
  
}]);