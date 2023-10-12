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
    let figuras = ['!', 'X'];
    let index = 0;
    let lugar = ["", "", "", "", "", "", "", "", ""]; 
    let ganador=false;
    let puntos= 0;
    function reiniciarJuego() {
      lugar = ["", "", "", "", "", "", "", "", ""]; 
      ganador = false; 
      puntos = 0; 
      for (let val = 1; val <= 9; val++) {
          let celda = document.getElementById(val);
          celda.innerHTML = "";
      }
      alert("GANASTE,tienes 1 punto");
      alert("ahora preciona aceptar para que esta vez inicie el otro jugar!");
    }
    let boton = document.getElementById("botonn");
    boton.addEventListener('click', reiniciarJuego);
    function verifGanador() {
        const ganar = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // colum
            [0, 4, 8], [2, 4, 6] // diag
        ];
        for (let i = 0; i < ganar.length; i++) {    // reiniciar el juego
            const [u, d, t] = ganar[i];
            for (let val = 1; val <= 9; val++) {
              let celda = document.getElementById(val);
              celda.addEventListener('click', () => {
                  if (!ganador && lugar[val - 1] === "") { // Verificar si la celda está vacía antes de asignar un val
                      lugar[val - 1] = figuras[index]; // Actualizo el estado del lugar con el símbolo actual
                      celda.innerHTML = figuras[index]; // Establezco lo que tiene la celda como la figura actual
                      index = (index + 1) % figuras.length; // Alterna x y !
                    
                  } 
                  if (lugar[u] && lugar[u] === lugar[d] && lugar[u] === lugar[t]) {
                    console.log('ganaste');
                    ganador=true; 
                      puntos ++;
                      console.log(puntos);
                }
              });
          }
        }
          }
          verifGanador();

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
      lugar = ["", "", "", "", "", "", "", "", ""];
      ganadorX = false; 
      puntosX = 0;
      for (let val = 1; val <= 9; val++) {
          let celda = document.getElementById(val);
          celda.innerHTML = "";
      }
      alert("GANASTE,tienes 1 punto ");
      alert("ahora preciona aceptar para que esta vez inicie el otro jugar!");
    }
    let boton = document.getElementById("botonn");
    boton.addEventListener('click', reiniciarJuego);
    function verifGanador() {
        const ganar = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // colum
            [0, 4, 8], [2, 4, 6] // diag
        ];
        for (let i = 0; i < ganar.length; i++) {//reiniciar el juego
            const [u, d, t] = ganar[i];
            console.log("hola")
            for (let val = 1; val <= 9; val++) {
              let celda = document.getElementById(val);
              celda.addEventListener('click', () => {
                console.log('queeee');
                  if (!ganadorX && lugar[val - 1] === "") { 
                      lugar[val - 1] = figuras[index]; 
                      celda.innerHTML = figuras[index]; 
                      index = (index + 1) % figuras.length; 
                    
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