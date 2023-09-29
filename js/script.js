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
let val=0;
let index=0;
//Recuperar la primer celda
while(val<10&&figuras[index]){
  if(index===0){
    val++;
    console.log(val);
      let celda = document.getElementById(val);
    //Agregar a esa celda un evento de escucha click
    celda.addEventListener('click', () => {
        celda.innerHTML = figuras[index];
    })
        index++;
    
    }
    else{
      val++;
      console.log(val);
        let celda = document.getElementById(val);
      //Agregar a esa celda un evento de escucha click
      celda.addEventListener('click', () => {
          celda.innerHTML = figuras[index];
            index--;
      })
    }
}