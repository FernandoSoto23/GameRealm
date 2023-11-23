import path from "path";
import { NavLink } from "react-router-dom";

//menu fixed


export function Header() {

    let variable = 10;

    return (
        <header className="header">
            <nav className="header-navegacion">
                <div className="buscar-producto">
                    <input className="input" type="text" placeholder="Buscar" />    
                    <button className="boton boton-buscar-"></button>
                </div>

                <div>
                    <ul className="header-ul">
                        <NavLink to="/ComidaRapida" className={(({ isActive }) => isActive ? 'activo' : '')}>
                            <li className="boton header-botones">

                                <p>Inicio</p>
                            </li>
                        </NavLink>
                        <NavLink to="/ComidaRapida" className={(({ isActive }) => isActive ? 'activo' : '')}>
                            <li className="boton header-botones">

                                <p>Biblioteca</p>
                            </li>
                        </NavLink>
                        <NavLink to="/ComidaRapida" className={(({ isActive }) => isActive ? 'activo' : '')}>
                            <li className="boton header-botones">
                                <p>Categorias</p>
                            </li>
                        </NavLink>
                    </ul>
                </div>

                <div>
                    <NavLink to="./Login">Iniciar Sesion</NavLink>
                </div>
            </nav>


        </header>
    );
};

