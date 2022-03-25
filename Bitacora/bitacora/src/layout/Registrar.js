




const Registrar=(props)=>{

return (

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

)


}

export default Registrar