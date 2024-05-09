console.log("Javascript conectado");

var departamentoSeleccion = document.querySelectorAll('.departamento select'); 


function loadDep(){
    console.log("Implementacion de la funcion para cargar departamentos")
    const xhttp = new XMLHttpRequest(); 
    xhttp.open("GET", "../data.json", true); 
    xhttp.send(); 

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){ 
            let datos = JSON.parse(this.responseText);
            showDep(datos)
        }
    }
}

function showDep(data){
    departamentoSeleccion.forEach(function(selectElement) {
        data.forEach(element => {
            var departamento = document.createElement('option');
            departamento.textContent = element.region;
            departamento.value = element.region;
            selectElement.appendChild(departamento);
        });
    });
}
window.onload = loadDep; //llamar a la funcion para cargar los departamenos cuando la pagina termine de cargarse


function callGraphic(){
    var show = true;
    departamentoSeleccion.forEach(function(selectElement){
        if(selectElement.value == "no-value"){
            show = false;
        }
    })
    if(show){
        showGraphics();
    }else{
        console.log("Necesita el otro valor");
    }
}

function showGraphics(){
    console.log("Valores de los selectores");
    var count = 1;
    departamentoSeleccion.forEach(function(selectElement){
        var dep = selectElement.value;
        getConfirmed(dep, count);

        count++;
        
    })
}

function getConfirmed(dep, count){
    const xhttp = new XMLHttpRequest(); 
    xhttp.open("GET", "../data.json", true); 
    xhttp.send(); 

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){ 
            let datos = JSON.parse(this.responseText);
            var confirmados = getDatos(datos, dep, count)
            createGraphic(confirmados, "waos", count);

        }
    }

}
function getDatos(datos, dep, count) {
    let resultado = null; 
    datos.forEach(element => {
        if (element.region === dep) {
            resultado = element.confirmed;
        }
    });
    
    return resultado;
}

function createGraphic(data, dep, count) {
    let ctx;
    let canvasId;

    if (count === 1) {
        canvasId = 'g1';
    } else {
        canvasId = 'g2';
    }

    ctx = document.getElementById(canvasId).getContext('2d');

    if (window.myCharts && window.myCharts[canvasId]) {
        window.myCharts[canvasId].destroy();
    }

    const fechas = data.map(entry => entry.date);
    const valores = data.map(entry => entry.value);

    window.myCharts = window.myCharts || {}; 
    window.myCharts[canvasId] = new Chart(ctx, {
        type: 'line',
        data: {
            labels: fechas,
            datasets: [{
                label: 'Casos confirmados',
                data: valores,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}