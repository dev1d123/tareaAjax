console.log("Javascript conectado");

var departamentoSeleccion = document.querySelectorAll('.departamento select'); //seleccionamos a los dos selectores de departamentos

//prueba de seleccion
departamentoSeleccion.forEach(function(selectElement) {
    var nuevaOpcion = document.createElement('option');
    nuevaOpcion.textContent = 'Nuevo Departamento';
    nuevaOpcion.value = 'nuevo-departamento';
    selectElement.appendChild(nuevaOpcion);
});

function loadDep(){
    console.log("Implementacion de la funcion para cargar departamentos")
    const xhttp = new XMLHttpRequest(); //Creacion del objeto para la solicitud ajax
    xhttp.open("GET", "../data.json", true); //solicitud, true para que sea asincrono
    xhttp.send(); //enviar la solicitud

    //manejamos la respuesta
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){ 
            console.log("Exito!!!");
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos)
        }
    }
}
window.onload = loadDep; //llamar a la funcion para cargar los departamenos cuando la pagina termine de cargarse