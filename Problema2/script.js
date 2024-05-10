console.log("funcasdionando");

function loadDep() {
    console.log("Implementacion de la funcion para cargar todos los");
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "../data.json", true);
    xhttp.send();
    //manejamos la respuesta
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log("Exito!!!");
            console.log(xhttp.responseText);
            let datos = JSON.parse(xhttp.responseText);
            console.log(datos);
            showDep(datos);
        }
    };
}

function showDep(data) {
    // Iterar en todos los datos
    data.forEach((element, index) => {
        if(element.region == "Lima" || element.region == "Callao"){
            return;
        }
        createGraphic(element.confirmed, element.region, index + 1); // Pasar los datos confirmados y la región
    });
}

function createGraphic(confirmedData, region, count) {
    const title = document.createElement('h3'); 
    title.textContent = region;
    const canvasContainer = document.createElement('div'); 
    canvasContainer.classList.add('canvas-container');
    document.body.appendChild(canvasContainer); 

    const canvas = document.createElement('canvas');
    canvas.id = 'g' + count; 
    canvas.width = "400px";
    canvas.height = "300px"; 
    canvasContainer.appendChild(canvas); 

    const ctx = canvas.getContext('2d');
    
    const fechas = confirmedData.map(entry => entry.date);
    const valores = confirmedData.map(entry => entry.value);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: fechas,
            datasets: [{
                label: `Casos confirmados - ${region}`,
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
    canvasContainer.appendChild(title); // Agrega el título al contenedor


}

window.onload = loadDep; // Llamar a la función para cargar los departamentos cuando la página termine de cargarse