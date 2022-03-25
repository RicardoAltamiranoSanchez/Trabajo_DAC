import  {useState} from 'react';


const FormularioHook=(Iniciar={})=>{
    const [formulario,setFormulario]=useState(Iniciar)


    const Guardar=(e)=>{
const {target}=e;
setFormulario({
...formulario,
[target.name]:target.value

})
}

const Resetear=()=>{
setFormulario(Iniciar)
}

return [ formulario , Guardar,Resetear ];

}
export default FormularioHook;