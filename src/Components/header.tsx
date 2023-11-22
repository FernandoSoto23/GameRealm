import path from "path";
import { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";

//menu fixed


export function Header() {
    const [nombreUsuario,setNombreUsuario] = useState("");

    const MostrarUsuario = ()=>{
        let usuarioGameRealm  : any = localStorage.getItem("UsuarioGameRealm");
        usuarioGameRealm = JSON.parse(usuarioGameRealm);
        console.log(usuarioGameRealm["nombreUsuario"])
        if(usuarioGameRealm !== null){
            setNombreUsuario(usuarioGameRealm["nombreUsuario"]);
        }
    }
    
    useEffect(()=>{
        MostrarUsuario();
    },[]);
    
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
                        
                        <NavLink to="/Biblioteca" className={(({ isActive }) => isActive ? 'activo' : '')}>
                            <li className="boton header-botones">
                                <p>Categorias</p>
                            </li>
                        </NavLink>

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
                    {nombreUsuario !== "" ? <NavLink to="./Perfil">{nombreUsuario}</NavLink> : <NavLink to="./Login">Iniciar Sesion</NavLink>}
                    
                </div>
            </nav>


        </header>
    );
};

