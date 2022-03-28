
import React,{Fragment, useReducer,useEffect,useState} from 'react';
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

const [Categorias, guardarCategorias] = useState([]);

 


useEffect(()=>{

localStorage.setItem('todos',JSON.stringify(state));

},[state])





return (
<Fragment>
<header>
<img src="./img/LogoNuevoFinal-04.png" alt="Logo" className="Logo"/> 

</header>
<hr/>
<div className="body-navegacion">
<Navegacion  />


</div>

</Fragment>

)

}


export default Index;