//anuncio inicio 
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
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Jugador 1',
      'Has elegido cruz',
      'error'
    )
  }
})

let figuras = ['X', '!'];
let lugar ;
let inicial = 0;
let celda=[1,2,3,4,5,6,7,8,9];
while(indice<=celda.length){
  let indice=0;
  lugar = document.getElementById(celda[indice]); 

}
let indice=0; 
//Recuperar la primer celda


//Agregar a esa celda un evento de escucha click
celda1.addEventListener('click', () => {
    celda1.innerHTML = figuras[inicial];
});
