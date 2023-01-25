import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

  const imagen = require('../build/img/logo.png') ;
  const despliegue = require('../build/img/menu.png');




export function Barra(props:any){

    useEffect(()=>{
        EventListeners();
    },[]);
    function Escribir(){
        props.texto("hola");
        alert("hola mundo");
    }
    return(
            <nav className="barra">
                {/* <h1>{props.aa}</h1> */}
                {/* <button onClick={Escribir}>presionar</button> */}
                <div className="logotipo">
                    <Link to="./home">
                        <img src={imagen} alt="Logo"/>
                    </Link>
                    <p className="saludo">Hola, Default9999</p>
                    <div className="mobile-menu">
                        <img src={despliegue} alt="barra" />
                    </div>
                </div>

                <div className="barra-opciones">
                    <ul>
                        <NavLink  to="/ComidaRapida" className ={ ( ({isActive})=> isActive ? 'activo' : '' ) }>
                            <li className="boton barra-botones">
                                <img src="https://i.ibb.co/rxyCsqq/hamburguesa.png" alt="hamburguesa"/>
                                <p>Comida Rapida</p>
                            </li>
                        </NavLink>
                    </ul>
                    <ul>
                        <NavLink  to="./Ensaladas" className ={ ( ({isActive})=> isActive ? 'activo' : '' ) }>
                            <li className="boton barra-botones">
                                <img src="https://i.ibb.co/cY79S40/ensalada-1.png" alt="ensalada-1" />
                                <p>Ensaladas</p>
                            </li>
                        </NavLink>
                    </ul>
                    <ul>
                        <NavLink to="./Desayunos" className ={ ( ({isActive})=> isActive ? 'activo' : '' ) }>
                            <li className="boton barra-botones">
                                <img src="https://i.ibb.co/HgsrpCD/desayuno-ingles.png" alt="desayuno-ingles" />
                                <p>Desayunos</p>
                            </li>
                        </NavLink>
                    </ul>
                    <ul>
                        <NavLink to="./bebidas" className ={ ( ({isActive})=> isActive ? 'activo' : '' ) }>
                            <li className="boton barra-botones">
                                <img src="https://i.ibb.co/0BMXYfM/taza-de-cafe.png" alt="taza-de-cafe"/>
                                <p>Bebidas</p>
                            </li>
                        </NavLink>
                    </ul>
                    <ul>
                        <NavLink to="./postres" className ={ ( ({isActive})=> isActive ? 'activo' : '' ) }>
                            <li className="boton barra-botones">
                                <img src="https://i.ibb.co/dWFNs9D/magdalena.png" alt="magdalena" />
                                <p>Postres</p>
                            </li>
                        </NavLink>
                    </ul>
                    <ul>
                        <NavLink to="./Especiales" className ={ ( ({isActive})=> isActive ? 'activo' : '' ) }>
                            <li className="boton barra-botones">
                            <img src="https://i.ibb.co/PDdNWbS/imagen-2022-12-20-021333176.png" alt="imagen-2022-12-20-021333176" />
                                <p>Especiales</p>
                            </li>
                        </NavLink>
                    </ul>
                </div>
                
            </nav>

            
    );
}

function EventListeners(){
    const mobileMenu : any = document.querySelector('.mobile-menu');

    mobileMenu?.addEventListener('click', navegacionResponsiva);
    
}

function navegacionResponsiva(){
    const navegacion = document.querySelector('.barra-opciones');
    if(navegacion?.classList.contains("mostrar"))
        navegacion.classList.remove('mostrar');
    else
        navegacion?.classList.add('mostrar');
}