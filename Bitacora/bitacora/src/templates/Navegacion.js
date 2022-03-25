import { Fragment } from "react";
import './Navegacion.css';


const Navegacion =()=>{ 



 return (
 
 
<Fragment>

<nav className="nav">
        <ul className="list">
<div className="div-logo">
<img src="./img/LogoNuevoFinal-12.png" alt="Logo" className="Logo"/>
</div>

            <li className="list__item">
                <div className="list__button">
                    <img src="./img/svg/dashboard.svg" className="list__img"/>
                    <a href="#" className="nav__link">Inicio</a>
                </div>
            </li>

            <li className="list__item list__item--click">
                <div className="list__button list__button--click">
                    <img src="./img/svg/docs.svg" className="list__img"/>
                    <a href="#" className="nav__link">Registrar </a>
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


            <li className="list__item">
                <div className="list__button">
                    <img src="./img/svg/stats.svg" className="list__img"/>
                    <a href="#" className="nav__link">Estadisticas</a>
                </div>
            </li>

            <li className="list__item list__item--click">
                <div className="list__button list__button--click">
                    <img src="./img/svg/bell.svg" className="list__img"/>
                    <a href="#" className="nav__link">Notificaciones</a>
                    <img src="./img/svg/arrow.svg" className="list__arrow"/>
                </div>

                <ul className="list__show">
                    <li className="list__inside">
                        <a href="#" className="nav__link nav__link--inside">Estoy dentro</a>
                    </li>

                    <li className="list__inside">
                        <a href="#" className="nav__link nav__link--inside">Estoy dentro</a>
                    </li>

                    <li className="list__inside">
                        <a href="#" className="nav__link nav__link--inside">Estoy dentro</a>
                    </li>
                </ul>

            </li>


            <li className="list__item">
                <div className="list__button">
                    <img src="./img/svg/message.svg" className="list__img"/>
                    <a href="#" className="nav__link">Contacto</a>
                </div>
            </li>

        </ul>
    </nav>




</Fragment>


 )






}

export default Navegacion;