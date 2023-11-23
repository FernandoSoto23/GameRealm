import path from "path";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faCartShopping, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import sm from '../assets/GM.svg'


export function Header() {
    const [nombreUsuario, setNombreUsuario] = useState("");

    const MostrarUsuario = () => {
        let usuarioGameRealm: any = localStorage.getItem("UsuarioGameRealm");
        usuarioGameRealm = JSON.parse(usuarioGameRealm);
        if (usuarioGameRealm !== null) {
            setNombreUsuario(usuarioGameRealm["nombreUsuario"]);
        }
    }

    useEffect(() => {
        MostrarUsuario();
    }, []);

    let variable = 10;
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="header">
            <nav className="header-navegacion">
                <div className="buscar-producto">
                    {/* Agregar el SVG junto a la barra de búsqueda */}
                    <img src={sm} alt="Logo" className="logo-svg" />

                    <input className="input" type="text" placeholder="Buscar" />                 
                </div>

                <div>
                    <ul className="header-ul">

                        <NavLink to="/Home" className={(({ isActive }) => isActive ? 'activo' : '')}>
                            <li className="boton header-botones">

                                <p>Inicio</p>
                            </li>
                        </NavLink>
                        <NavLink to="/Biblioteca" className={(({ isActive }) => isActive ? 'activo' : '')}>
                            <li className="boton header-botones">

                                <p>Biblioteca</p>
                            </li>
                        </NavLink>

                        <NavLink to="/Biblioteca" className={(({ isActive }) => isActive ? 'activo' : '')}>
                            <li className="boton header-botones">
                                <p>Categorias</p>
                            </li>
                        </NavLink>
                    </ul>
                </div>

                <div className="card-login-carrito">

                    {nombreUsuario !== "" ? <NavLink to="./Perfil">{nombreUsuario}</NavLink> : <NavLink to="./Login" style={{ color: 'white' }}><FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>Iniciar Sesion</NavLink>}
                    <div>
                        <a className="carrito">
                            <NavLink to={"./Carrito"}>
                                <div className="position-relative">
                                    <FontAwesomeIcon icon={faCartShopping} style={{ color: 'white' }}></FontAwesomeIcon>
                                </div>
                            </NavLink>

                        </a>
                    </div>
                </div>
            </nav>


        </header>
    );
};

