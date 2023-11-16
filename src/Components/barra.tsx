import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

const imagen = require('../build/img/logo.png');
const despliegue = require('../build/img/menu.png');

export function Barra(props: any) {
    /* Variables de estado Generales */
    const [usuarioID, setUsuarioID] = useState(0);
    const [usuario, setUsuario] = useState("");
    /* Fin Variables de estado Generales  */
    /* Checar modo Oscuro */
    const cookies = new Cookies;
    const darkMode = document.querySelector('body');
    if (cookies.get('DarkMode') === 'Activo') {
        darkMode?.classList.add('DarkMode');

    } else {
        darkMode?.classList.remove('DarkMode');
    }

    /* Fin Checar Modo Oscuro */
    useEffect(() => {
        EventListeners();
        setUsuarioID(Number(localStorage.getItem('id')) ?? 0);
        setUsuario(localStorage.getItem('usuario') ?? "not found");


    }, []);

    return (
        <nav className="barra">
            <Link to="./home" className="logotipo-tablet">
                <img src={imagen} alt="Logo" />
            </Link>
            <div className="logotipo">
                <Link to="./home" className="logo-mobil">
                    <img src={imagen} alt="Logo" />
                </Link>
                {usuarioID === 0 &&
                    <NavLink to="/Login">
                        <p className="login">Inicia Sesion</p>
                    </NavLink>}
                {usuarioID >= 1 &&
                    <div>
                        <p className="texto-centrado">¡Hola! {usuario}</p>
                    </div>
                }

                <div className="mobile-menu">
                    <img src={despliegue} alt="barra" />
                </div>
            </div>

            <div className="barra-opciones">
                <ul>
                    <NavLink to="/ComidaRapida" className={(({ isActive }) => isActive ? 'activo' : '')}>
                        <li className="boton barra-botones">
                            <img src="https://i.ibb.co/rxyCsqq/hamburguesa.png" alt="hamburguesa" />
                            <p>Comida Rapida</p>
                        </li>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink to="./Ensaladas" className={(({ isActive }) => isActive ? 'activo' : '')}>
                        <li className="boton barra-botones">
                            <img src="https://i.ibb.co/cY79S40/ensalada-1.png" alt="ensalada-1" />
                            <p>Ensaladas</p>
                        </li>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink to="./Desayunos" className={(({ isActive }) => isActive ? 'activo' : '')}>
                        <li className="boton barra-botones">
                            <img src="https://i.ibb.co/HgsrpCD/desayuno-ingles.png" alt="desayuno-ingles" />
                            <p>Desayunos</p>
                        </li>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink to="./Bebidas" className={(({ isActive }) => isActive ? 'activo' : '')}>
                        <li className="boton barra-botones">
                            <img src="https://i.ibb.co/0BMXYfM/taza-de-cafe.png" alt="taza-de-cafe" />
                            <p>Bebidas</p>
                        </li>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink to="./Postres" className={(({ isActive }) => isActive ? 'activo' : '')}>
                        <li className="boton barra-botones">
                            <img src="https://i.ibb.co/dWFNs9D/magdalena.png" alt="magdalena" />
                            <p>Postres</p>
                        </li>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink to="./Especiales" className={(({ isActive }) => isActive ? 'activo' : '')}>
                        <li className="boton barra-botones">
                            <img src="https://i.ibb.co/PDdNWbS/imagen-2022-12-20-021333176.png" alt="imagen-2022-12-20-021333176" />
                            <p>Especiales</p>
                        </li>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink to="./Configuracion" className={(({ isActive }) => isActive ? 'activo' : '')}>
                        <li className="boton barra-botones">
                            <img src="https://i.ibb.co/CstRXBS/configuraciones.png" alt="imagen-2022-12-20-021333176" />
                            <p>Configuracion</p>
                        </li>
                    </NavLink>
                </ul>
            </div>

        </nav>


    );
}

function EventListeners() {
    const mobileMenu: any = document.querySelector('.mobile-menu');

    mobileMenu?.addEventListener('click', navegacionResponsiva);

}

function navegacionResponsiva() {
    const navegacion = document.querySelector('.barra-opciones');
    if (navegacion?.classList.contains("mostrar"))
        navegacion.classList.remove('mostrar');
    else
        navegacion?.classList.add('mostrar');
}