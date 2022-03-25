
import React,{Fragment, useReducer,useEffect} from 'react';
import Validaciones from '../Hooks/Validaciones';
import FormularioHook  from '../Hooks/FormularioHook';
import Navegacion from './Navegacion';
import Tabla from '../layout/Tabla';
import './App.css';

const init=()=>{
   return JSON.parse(localStorage.getItem('todos')) || [];

}

const Index=()=>{

const [state,dispatch]=useReducer(Validaciones,[],init);
 
const [ formulario , Guardar,Resetear ] =FormularioHook({
descripcion:""

});
const {descripcion}=formulario;
console.log(formulario)

useEffect(()=>{

localStorage.setItem('todos',JSON.stringify(state));

},[state])





const accionesReducer=(e)=>{
e.preventDefault();
if(descripcion.trim().length <= 1){
return;

}
console.log(e.target.value);
const nuevoTodo={
 id:new Date().getTime(),
 descripcion:descripcion,
done:false
}
const action={
 type:"agregar",
  playload:nuevoTodo
}
dispatch(action);
Resetear();
}


const Eliminar=(id)=>{

const action={
type:"eliminar",
playload:id}
dispatch(action);


}
const CompletadoPendiente=(id)=>{
dispatch({
type:"toogle",
playload:id

})

}


return (
<Fragment>
<header>
<img src="./img/LogoNuevoFinal-04.png" alt="Logo" className="Logo"/> 

</header>
<hr/>
<div className="body-navegacion">
<Navegacion/>
<Tabla/>

</div>

</Fragment>

)

}


export default Index;