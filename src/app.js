angular.module('app', ['ngTouch', 'ui.grid'])
  .controller('MainCtrl', MainCtrl);

var informacion;

function getDatos(data) {
    this.informacion = JSON.stringify(data);
    console.log('Ingreso ' + this.informacion);
    MainCtrl();
  }

function MainCtrl() {
    this.myData = JSON.stringify(this.informacion); 
    console.log('Main ' + this.myData);
  
    this.myData = [
    {
        firstName: "Cox",
        lastName: "Carney",
        company: "Enormo",
        employed: true
    },
    {
        firstName: "Lorraine",
        lastName: "Wise",
        company: "Comveyer",
        employed: false
    },
    {
        firstName: "Nancy",
        lastName: "Waters",
        company: "Fuelton",
        employed: false
    }
  ];
  
}

