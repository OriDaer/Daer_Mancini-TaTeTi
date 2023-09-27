let figuras = ['X', 'O'];
let inicial = 0;

Swal.fire('Bienvenidos a Tateti 2.0');

//Recuperar la primer celda
const celda1 = document.getElementById('uno');

//Agregar a esa celda un evento de escucha click
celda1.addEventListener('click', () => {
    celda1.innerHTML = figuras[inicial];
});