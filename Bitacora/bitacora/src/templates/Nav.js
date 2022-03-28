import React ,{Fragment,useState,useEffect} from 'react';
import Registrar from '../layout/Registrar';
import Header from '../layout/Header';
import Tabla from '../layout/Tabla';
import Swal from 'sweetalert2';



import './App.css';
import './Navegacion.css';

const Nav = ({formulario,setFormulario,datos,setDatos}) => {
 
 
//Inicio de formulario
const Formulario=async(e)=>{
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
const NuevoRegistro={
tipo,
descripcion,
status
}
setFormulario(NuevoRegistro);
setDatos(...datos,NuevoRegistro)
console.log(NuevoRegistro);
console.log(datos);
}

//fin de formulario



      console.log(formulario);


   
 console.log('dkdkdk'+formulario);
   

     
return ( 
<Fragment>
<Header/>
<div className="body-navegacion">
<nav className="nav">
        <ul className="list">
<div className="div-logo">
<img src="./img/LogoNuevoFinal-12.png" alt="Logo" className="Logo"/>
</div>

            <li className="list__item">
                <div className="list__button">
                    <img src="./img/svg/dashboard.svg" className="list__img"/>
                    <a href="#" className="nav__link"
                   
                >Inicio</a>
                </div>
            </li>

           <Registrar Formulario={Formulario}/>


            <li className="list__item">
                <div className="list__button">
                    <img src="./img/svg/stats.svg" className="list__img"/>
                    <a href="#" className="nav__link">Completados</a>
                </div>
            </li>

            <li className="list__item list__item--click">
                <div className="list__button list__button--click">
                    <img src="./img/svg/bell.svg" className="list__img"/>
                    <a href="#" className="nav__link">Pendientes</a>
                    <img src="./img/svg/arrow.svg" className="list__arrow"/>
                </div>

                <ul className="list__show">
                    <li className="list__inside">
                        <a href="#" className="nav__link nav__link--inside">Estoy dentro</a>
                    </li>

                    <li className="list__inside">
                        <a href="#" className="nav__link nav__link--inside">Estoy dentro</a>
                    </li>

                    <li className="list__inside">
                        <a href="#" className="nav__link nav__link--inside">Estoy dentro</a>
                    </li>
                </ul>

            </li>


            <li className="list__item">
                <div className="list__button">
                    <img src="./img/svg/message.svg" className="list__img"/>
                    <a href="#" className="nav__link">Buscar</a>
                </div>
            </li>

        </ul>
    </nav>
<Tabla datos={datos}/>
</div>

</Fragment>
      );
}  
 
export default Nav;