import path from "path";
import { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { WebServiceUrl } from "../clases/rutas";


export function Header() {
    const [nombreUsuario,setNombreUsuario] = useState("");
    const [buscar,setBuscar] = useState();
    const MostrarUsuario = ()=>{
        let usuarioGameRealm  : any = localStorage.getItem("UsuarioGameRealm");
        usuarioGameRealm = JSON.parse(usuarioGameRealm);
        if(usuarioGameRealm !== null){
            setNombreUsuario(usuarioGameRealm["nombreUsuario"]);
        }
    }
    const BuscarItem = async ()=>{
        const url = `${WebServiceUrl}/api/titulo`;
        const resp = await fetch(url);
        const datos = await resp.json();

        console.log(datos)
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
                    <input className="input" type="text" placeholder="Buscar" onChange={(e : any)=>setBuscar(e.target.value)}/>
                    <button className="boton boton-buscar" onClick={()=>{BuscarItem()}}></button>
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

