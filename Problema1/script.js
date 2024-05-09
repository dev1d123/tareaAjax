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
}
window.onload = loadDep; //llamar a la funcion para cargar los departamenos cuando la pagina termine de cargarse