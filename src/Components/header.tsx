import path from "path";
import { useState } from "react";
import { NavLink } from "react-router-dom";

//menu fixed


export function Header() {
    const [desplegar,setDesplegar] = useState(false);
    let variable = 10;
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return (
        <header className="header">
            <nav className="header-navegacion">
                <div className="buscar-producto">
                    <input className="input" type="text" placeholder="Buscar" />
                    <button className="boton boton-buscar"></button>
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
                        
                        
                        <div className="dropdown">
                            <p onClick={toggleDropdown} aria-expanded={isOpen}>
                                Dropdown button
                            </p>
                            <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                                <li>
                                    <NavLink to="/Accion">
                                       Accion
                                    </NavLink>
                                <a className="dropdown-item" href="#">
                                   
                                </a>
                                </li>
                                <li>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                                </li>
                                <li>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                                </li>
                            </ul>
                            </div>
                    </ul>
                </div>
                
                <div className="card-login-carrito">
                    <div>
                        <a className="carrito">
                            <div className="position-relative">
                                <img src="https://i.ibb.co/fQwSFC5/carro-de-la-carretilla.png" alt="carro-de-la-carretilla"/>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger bg-num-carrrito">{variable}</span>
                            </div>
                        </a>
                    </div> 
                    <NavLink to="./Login">Iniciar Sesion</NavLink>
                </div>
            </nav>


        </header>
    );
};

