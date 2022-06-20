window.addEventListener('load', iniciarf);

function iniciarf(){
    // Obtener el valor del costo capturando el elemnto HTML con el id costop
     vcosto = document.getElementById('costop');
    // Obtener el valor del porcentaje capturando el elemnto HTML con el id porcentajev
  vporcentaje = document.getElementById('porcentajev');
    // Preparar el evento input del objeto vcosto
    vcosto.addEventListener('input', mostrarpventa);
    vporcentaje.addEventListener('input', mostrarpventa);
}
function calcularPorcentaje(costof, porcentaje){
    // Realizar el calculo del porcentaje
    let Tantototal = costof * (porcentaje / 100);
    // Calcular el precio de venta
    let Pventa = parseFloat(costof) + parseFloat(Tantototal);
    // Mostrar el resultado
    return Pventa;
}

function mostrarpventa(){
    //Si el costo y el porcentaje es distinto de vacio entonces
    if(vcosto.value != '' && vporcentaje.value != ''){
        // Llamar a la funcion calcularPorcentaje y almacenar el resultado en la variable calculo 
        //Obteniendo el valor del costo
        let calculo = calcularPorcentaje(vcosto.value, vporcentaje.value);
        // Mostrar el precio de venta
        document.getElementById('pventa').value = calculo;
        
        }else { // Si no se ingreso el costo o el porcentaje entonces
            //Limpiar el campo con el id pventa
            document.getElementById('pventa').value = '';
        }
}

function iniciarf(){
    // Obtener el valor del costo capturando el elemnto HTML con el id costop
     vcosto = document.getElementById('costop');
    // Obtener el valor del porcentaje capturando el elemnto HTML con el id porcentajev
  vporcentaje = document.getElementById('porcentajev');
  vimage = document.getElementById('simagen');
  // Preparar el evento input del objeto vcosto
    vcosto.addEventListener('input', mostrarpventa);
    vporcentaje.addEventListener('input', mostrarpventa);
    vimage.addEventListener('input', mostrarImagen);
}

function mostrarImagen(){
   // Asignar la etiqeta img a la varable verimagen 
    var verimagen = document.querySelector('img');
   // Asignar el input de tipo filr a la variable archivof
    var archivof = document.querySelector('input[type=file]').files[0];
    // Asignar el nombre del archivo a la variable leerarchivo
    var leerarchivo = new FileReader();   
    //Ejecutar la funciona anonima cuando el archivo este listo
    leerarchivo.onload = function(){
        // Asignar la imagen a la etiqueta img
        verimagen.src = leerarchivo.result;
    }
    //Si existen datos en la variable archivo entonces
    if(archivof){
        // Leer el archivo
        leerarchivo.readAsDataURL(archivof);
    }else {
        // Asignar la imagen por defecto
        verimagen.src = 'img/default.jpg';
    }
}