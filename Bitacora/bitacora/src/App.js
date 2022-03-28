
//para consumir las apis es con useEffect y useState
import React, { useEffect, useState } from 'react';
//importamos la libreria para el envio de rutas o los paths
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from './templates/Nav';
const Usuarios=[];
function App() {
 const [datos,setDatos]=useState([]);//para obtener todos los registros

const [formulario,setFormulario]=useState([]);//para Agregar un nuevo Registro
useEffect(()=>{
  console.log(formulario);
},[formulario])
   
        return (
        <Router>
          
          <Routes>
            <Route
            exact path = '/'
            element = {
                 <Nav 
                formulario={formulario}
				 setFormulario={setFormulario}
                datos={datos}
				setDatos={setDatos}
                />}

                />    
                       
                         
                           </Routes>
                            </Router>
                        );
                    }
                    export default App;
                    //debemos instalar axios para hacer las peticiones ala api y obtener la informacion de la base de datos 
                    //npm install axios