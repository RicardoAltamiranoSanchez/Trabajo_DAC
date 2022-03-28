

const Registrar=({Formulario})=>{

return (
 <li className="list__item list__item--click">
                <div className="list__button list__button--click">
                    <img src="./img/svg/docs.svg" className="list__img"/>
                    <a href="#" className="nav__link"
              onClick={Formulario}
              >Registrar </a>
                    <img src="./img/svg/arrow.svg" className="list__arrow" />
                </div>

                <ul className="list__show">
                    <li className="list__inside">
                        <a href="#" className="nav__link nav__link--inside">Estoy dentro</a>
                    </li>

                    <li className="list__inside">
                        <a href="#" className="nav__link nav__link--inside">Estoy dentro</a>
                    </li>
                </ul>

            </li>
)
}

export default Registrar;