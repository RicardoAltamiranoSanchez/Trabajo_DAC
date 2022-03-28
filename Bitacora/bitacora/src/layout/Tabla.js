import React, { useState } from 'react';


const Tabla=({datos})=>{
 if(datos.length === 0) {return null}


return(
<table class="table table-blue">
  <thead>
    <tr>
      <th scope="col">Folio</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Tipo</th>
       <th scope="col">Estatus</th>
       <th scope="col">Fecha</th>
       <th scope="col">Descripcion</th>
    </tr>
  </thead>

  <tbody>
{datos.map((s,i)=>(
    <tr   key={s.id}>
    
      <th scope="row">{i+1}</th>
      <td>{s.nombre}</td>
      <td>{s.apellido}</td>
      <td>{s.tipo}</td>
<td>{s.status}</td>
<td>{s.fecha}</td>
<td>{s.descripcion} </td>

    </tr>
))}
   
  </tbody>

</table>



)


}

export default Tabla;