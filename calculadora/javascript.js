function calcularPropina() {
    const numPersonas= document.getElementById('numPersonas');
    const costeTotal =  document.getElementById('coste');
    const calificacionServicio = document.getElementById('calificacionServicio');
   

    let porcentaje;
    let propinaFinal;
    
    if(numPersonas.value === ""){
        numPersonas.value = 1;
    }
    
    if (costeTotal.value === ""){
     window.alert("Por favor, ingresa el coste total.");
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
     
      propinaFinal = (costeTotal.value / numPersonas.value) * porcentaje;
    
  if(propinaFinal === 0){
  propinaFinal = 0.5;
  }
    
    document.getElementById("propina").innerHTML = propinaFinal.toFixed(2) + " €";
    
   
// QUE SE BORREN LOS DATOS AL FINAL   
document.getElementById('miFormulario').reset();
}  

    
    
  
