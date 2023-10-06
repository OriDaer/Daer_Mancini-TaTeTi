//anuncio inicio 
let result; 
let valor;
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})
swalWithBootstrapButtons.fire({
  background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
title: '¿Jugador 1, qué queres ser?',
text: "Seleccione una opcion",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Exclamacion',
  cancelButtonText: 'Cruz',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    swalWithBootstrapButtons.fire(
      'jugador 1',
      'Has elegido exclamacion',
      'warning',
    )
   // Variables globales
let figuras = ['X', '!'];
let indice = 1;
let lugar = ["", "", "", "", "", "", "", "", ""]; // Array del lugar
let ganador = false;
let puntos = 0;


}else if (result.dismiss === Swal.DismissReason.cancel) {
    swalWithBootstrapButtons.fire(
      'Jugador 1',
      'Has elegido cruz',
      'error'
    )
    let figuras = ['X', '!'];
    let index = 0;
    let lugar = ["", "", "", "", "", "", "", "", ""]; // Array del lugar
    let ganadorX=false;
    let puntosX= 0;
    function reiniciarJuego() {
      lugar = ["", "", "", "", "", "", "", "", ""]; // Reiniciar el estado del juego
      ganador = false; // Reiniciar la variable que indica si hay un ganador
      puntos = 0; // Reiniciar los puntos (si es necesario)
      // Además, puedes limpiar el contenido de las celdas en el tablero si es necesario.
      for (let val = 1; val <= 9; val++) {
          let celda = document.getElementById(val);
          celda.innerHTML = "";
      }
    }
    let boton = document.getElementById("botonn");
    boton.addEventListener('click', reiniciarJuego);
    function verifGanador() {
        const ganar = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // colum
            [0, 4, 8], [2, 4, 6] // diag
        ];
    // Función para reiniciar el juego

        for (let i = 0; i < ganar.length; i++) {
            const [u, d, t] = ganar[i];
            console.log("hola")
            for (let val = 1; val <= 9; val++) {
              let celda = document.getElementById(val);
              celda.addEventListener('click', () => {
                console.log('queeee');
                  if (!ganadorX && lugar[val - 1] === "") { // Verificar si la celda está vacía antes de asignar un valor
                      lugar[val - 1] = figuras[index]; // Actualizar el estado del lugar con el símbolo actual
                      celda.innerHTML = figuras[index]; // Establecer el contenido de la celda como la figura actual
                      index = (index + 1) % figuras.length; // Alterna 'X' y '!'
                    
                  } 
                  if (lugar[u] && lugar[u] === lugar[d] && lugar[u] === lugar[t]) {
                    console.log('ganasteX');
                    ganadorX=true; 
                      puntosX ++;
                      console.log(puntosX);
                }
              });
          }
        }
          }
          verifGanador();
  }
});

