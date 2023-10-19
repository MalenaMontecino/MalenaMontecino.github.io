function calcularPropina() {
    var numPersonas= document.getElementById('numPersonas');
    var costeTotal =  document.getElementById('coste');
    var calificacionServicio = document.getElementById('calificacionServicio');
   

    var porcentaje;
    var propinaFinal;
    
    if(numPersonas.value === ""){
        numPersonas.value = 1;
     // return false; //porque false
    }
    
    if (costeTotal.value === ""){
     window.alert("Por favor, ingresa el coste total.");
     // return false;
    }
    
     switch (calificacionServicio.value) {
         case 'default':
          window.alert("Por favor seleccione una opción en el menú desplegable");
        break;
      case 'genial':
        porcentaje= 10/100;
        break;
      case 'aceptable':
        porcentaje= 5/100;
        break;
      case 'horrible':
       porcentaje =0;
       break;
     }
     
     
     var propinaFinal = (costeTotal.value / numPersonas.value) * porcentaje;
    
  if(propinaFinal === 0){
  propinaFinal = 0.5;
  }
    
    document.getElementById("propina").innerHTML = propinaFinal + " €";
    
   
// QUE SE BORREN LOS DATOS AL FINAL   
document.getElementById('miFormulario').reset();
}  

    
    
    
    
  
