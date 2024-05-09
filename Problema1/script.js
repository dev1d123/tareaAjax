console.log("Javascript conectado");

var departamentoSeleccion = document.querySelectorAll('.departamento select'); //seleccionamos a los dos selectores de departamentos

//prueba de seleccion

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
            showDep(datos)
        }
    }
}

function showDep(data){
    //Iterar en los dos selectores
    console.log("WOW, he recibido los datos!!");
    data.forEach(element => {
        console.log(element.region);
    });
    //iteramos para añadir datos en cada uno de los contenedores
    departamentoSeleccion.forEach(function(selectElement) {
        //Iterar en cada elemento de data, cada elemento es un objeto con los siguiente atributos: region, confirmed (los demas estan vacios).
        data.forEach(element => {
            console.log(element.region);
            var departamento = document.createElement('option');
            departamento.textContent = element.region;
            departamento.value = element.region;
            selectElement.appendChild(departamento);
        });
    });
}
window.onload = loadDep; //llamar a la funcion para cargar los departamenos cuando la pagina termine de cargarse