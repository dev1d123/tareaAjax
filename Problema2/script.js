
function loadDep(){
    console.log("Implementacion de la funcion para cargar todos los")
    const xhttp = new XMLHttpRequest(); 
    xhttp.open("GET", "../data.json", true); 
    xhttp.send(); 
    //manejamos la respuesta
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){ 
            console.log("Exito!!!");
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos)
            //showDep(datos)
        }
    }
}
/*
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


//funcion para verificar que los dos cuadros esten llenos!!!
function callGraphic(){
    console.log("Valores de los selectores");
    var show = true;
    departamentoSeleccion.forEach(function(selectElement){
        console.log(selectElement.value);
        if(selectElement.value == "no-value"){
            show = false;
        }
    })
    if(show){
        console.log("TODO OK -> Imprimiendo graficos");
        console.log("llamando a show!");
        showGraphics();
    }else{
        console.log("Faltan valores!!!");
    }
}

function showGraphics(){
    console.log("Valores de los selectores");
    var count = 1;
    departamentoSeleccion.forEach(function(selectElement){
        console.log("Mostrando grafico ", count);
        var dep = selectElement.value;
        getConfirmed(dep);
        console.log(selectElement.value);

        count++;
        
    })
}

function getConfirmed(dep){
    const xhttp = new XMLHttpRequest(); 
    xhttp.open("GET", "../data.json", true); 
    xhttp.send(); 

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){ 
            console.log("Exito!!!");
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos)
            var confirmados = getDatos(datos, dep)
            console.log("Los confirmados son: ", confirmados);
        }
    }

}

function getDatos(datos, dep){
    //iteramos para añadir datos en cada uno de los contenedores
    departamentoSeleccion.forEach(function(selectElement) {
        datos.forEach(element => {
            if(element.region == dep){
                return element.confirmed; //arreglo de objetos con atributos date y value
            }

        });
    });
}
*/