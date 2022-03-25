import React from 'react';


const Tabla=()=>{


return(
<table class="table table-blue">
  <thead>
    <tr>
      <th scope="col">Folio</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Tipo</th>
       <th scope="col">Estatus</th>
       <th scope="col">Descripcion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
<td>0</td>
      <td>Pura Descripcion <button 
className="btn btn-outline-primary mt-1 btn-block"> 
Saber mas
</button>
</td>

    </tr>

    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>

</table>



)


}

export default Tabla;