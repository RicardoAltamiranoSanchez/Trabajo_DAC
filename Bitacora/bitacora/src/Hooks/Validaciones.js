
const Validaciones = (state = [], action) => {
	switch (action.type) {
		case "agregar":

		return [...state,action.playload]
		case "eliminar":

         return state.filter( (valor)=>{
      if(valor.id !== action.playload){
        return valor
        }

})
         case "toogle":
          return state.map(s =>
         (s.id === action.playload)
		 ? {...s,done:!s.done}
         : s
        )



		case"toogle-old":
			return state.map((m)=>{
             if(m.id === action.playload){
			return {...m,done:!state.done}
       }else{
	return state;
}

                  })
		
		default:
		return state;
			

	}

}
export default Validaciones;