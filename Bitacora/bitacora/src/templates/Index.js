
import React,{Fragment, useReducer,useEffect} from 'react';
import Validaciones from '../Hooks/Validaciones';
import FormularioHook  from '../Hooks/FormularioHook';
import Navegacion from './Navegacion';
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

<div className="row">
<div className="col-7">

<ul className="list-group list-group-flush">
{ 
state.map((s,i)=>(
<li
  key={s.id}
	className="list-group-item"
>
{/* de decimos si existe o esta en true que ponga la clase complete */}
<p className={`${s.done && 'complete' }`}
onClick={()=>{ CompletadoPendiente(s.id)}}
>{i+1}.{s.descripcion}</p>
<button className="btn btn-danger"

onClick={()=>Eliminar(s.id)}

>
Borrar
</button>
</li>
))
}
</ul>



</div>

<div className="col-5 div-registro">
<h4 className="titulo">Nueva Tarea </h4>

<form onSubmit={accionesReducer}>
<input type="text"
		name="descripcion"
		placeholder="Escribir.."
		autoComplete="off"
         className="from-control"
        value={descripcion}
        onChange={Guardar}
/>
<br/>
<button 
type="submit"
className="btn btn-outline-primary mt-1 btn-block"> 

Agregar
</button>

</form>
</div>


</div>
</div>

</Fragment>

)

}


export default Index;