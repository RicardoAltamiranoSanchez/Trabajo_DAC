import Swal from 'sweetalert2';


const Registrar = async (e)=>{
     e.preventDefault();
//Inicio de input de tipo de problema
   const { value: tipo } = await Swal.fire({
  title: ' Tipo de Problema',
  input: 'select',
  inputOptions: {
    'Tipo': {
      sotware: 'Sotware',
      hadware: 'Hadware',
     
    }
  },
  inputPlaceholder: 'Seleccionar Tipo de Problema',
  showCancelButton: true,
  inputValidator: (value) => {
    return new Promise((resolve) => {
      if (value === 'sotware' || value === 'hadware') {
        resolve()
      } else {
        resolve('Aun no has escojido uno')
      }
    })
  }
})//fin de input de tipo de problema
//inicio del input de descripcion
const { value: descripcion } = await Swal.fire({
  input: 'textarea',
  title: 'Descripcion del problema o solucion',
  inputPlaceholder: 'Escribe tu descripcion',
  
 inputValidator: (value) => {
    return new Promise((resolve) => {
      if (value.length <=10 ) {
        resolve('Debes poner una descripcion no puedes dejar el campo vacio')
      } else {
        resolve()
      }
    })
  },
  showCancelButton: true
})
//fin de input de descripcion
//inicio de input de estatus
const inputOptions = new Promise((resolve) => {
  
    resolve({
      'completado': 'Completado',
      'pendiente': 'Pendiente',
     
    })
  
})

const { value: status } = await Swal.fire({
  title: 'Seleccione el Estatus',
  input: 'radio',
  inputOptions: inputOptions,
showCancelButton: true, 
  inputValidator: (value) => {
    if (!value) {
      return 'Debe seleccionar un estatus'
    }
  }
})

if (status === 'completado') {
  Swal.fire({ html: `Usted selecciono: ${status}` })
}


//fin de input de estatus

//inicio de Guardar Datos
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Registrado a Bitacora'
})
//fin de Guardar Datos
console.log(tipo,descripcion,status);

}


export default Registrar;