/*CÓDIGO DE FORMULARIO */


var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;


$(document).ready(function(){
    $("#bEnviar").click(function(){


        var nombre = $("#itNombre").val(); //para obtener el valor de una caja de texto se coloca .val
        var correo = $("#itMail").val();
        var asunto = $("#itCelular").val();
        var paises = $("#pais").val();


        if(nombre == ""){


            $("#mensaje1").fadeIn(); //fadeIn lo que hace es hacer un tipo de animación en que estando en opacidad 0, como se puso display none vaya a estar en opacidad 100, animado como aparece el mensaje
       
            return false;
       
        }else{
            $("#mensaje1").fadeOut(); //fadeOut es para desvanacer el mensaje, es lo contrario al fadeIn


            if(correo == "" || !expr.test(correo)){ //el signo ! indica que si no se cumpla esa función muestre el mensaje2
                $("#mensaje2").fadeIn();


                return false;
           
            }else{
                $("#mensaje2").fadeOut();


                if(asunto == ""){
                    $("#mensaje3").fadeIn();


                    return false;




                }
            }


        }


    })




})






var ciudadesPorPais = {
    Argentina: ["Buenos Aires", "Córdoba", "Rosario", "Santa Fe", "Mar de Plata", "Salta"],
    Brasil: ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Armação dos Búzios", "Florianópolis", "Fortaleza"],
    Chile: ["Santiago", "Puerto Montt", "Punta Arenas", "Calama", "Temuco", "Iquique"]
   
  };


var pais = document.getElementById("pais");
var ciudad = document.getElementById("ciudad");


pais.addEventListener("change", function() {
  // Elimina todas las opciones actuales de la ciudad
  while (ciudad.firstChild) {
    ciudad.removeChild(ciudad.firstChild);
  }
 
  // Obtén las ciudades para el país seleccionado
  var ciudades = ciudadesPorPais[pais.value];
 
  // Agrega una opción por ciudad
  if (ciudades) {
    ciudades.forEach(function(ciudadNombre) {
      var opcion = document.createElement("option");
      opcion.value = ciudadNombre;
      opcion.textContent = ciudadNombre;
      ciudad.appendChild(opcion);
    });
  } else {
    var opcion = document.createElement("option");
    opcion.value = "";
    opcion.textContent = "Selecciona un país primero";
    ciudad.appendChild(opcion);
  }
});


