import path from "path";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faCartShopping,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import sm from "../assets/GM.svg";
import { WebServiceUrl } from "../clases/rutas";

export function Header() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [busqueda,setBusqueda] = useState("");
  const MostrarUsuario = () => {
    let usuarioGameRealm: any = localStorage.getItem("UsuarioGameRealm");
    usuarioGameRealm = JSON.parse(usuarioGameRealm);
    if (usuarioGameRealm !== null) {
      setNombreUsuario(usuarioGameRealm["nombreUsuario"]);
    }
  };

  useEffect(() => {
    MostrarUsuario();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const BuscarItem = async () => {
    if (!localStorage.getItem("BusquedaDeItemsGameRealm")) {
      const url = `${WebServiceUrl}/api/titulo`;
      const resp = await fetch(url);
      const datos = await resp.json();

      if ((datos.msg = "ok")) {
        localStorage.setItem(
          "BusquedaDeItemsGameRealm",
          JSON.stringify(datos.dato)
        );
        setResultadosBusqueda(datos.dato);
      }

      console.log(datos);
    } else {
      console.log("NO se hizo");
    }
  };
  const GuardarBusqueda = (event : any)=>{
      localStorage.setItem("busqueda",event);
  }
  return (
    <header className="header">
      <nav className="header-navegacion">
        <div className="buscar-producto">
          <input
            className="input"
            type="text"
            placeholder="Buscar"
            onChange={(e)=>GuardarBusqueda(e.target.value)}
            onClick={() => BuscarItem()}
            onKeyUp={(e : any) => {
              if (e.key === "Enter") {
                window.location.href = "./../CatalogoBusqueda";
              }
            }}
          />
          <input type="button" className="boton boton-buscar" />
        </div>

        <div>
          <ul className="header-ul">
            <NavLink
              to="/Home"
              className={({ isActive }) => (isActive ? "activo" : "")}
            >
              <li className="boton header-botones">
                <p>Inicio</p>
              </li>
            </NavLink>
            <NavLink
              to="/Biblioteca"
              className={({ isActive }) => (isActive ? "activo" : "")}
            >
              <li className="boton header-botones">
                <p>Biblioteca</p>
              </li>
            </NavLink>

            <NavLink
              to="/Categorias"
              className={({ isActive }) => (isActive ? "activo" : "")}
            >
              <li className="boton header-botones">
                <p>Categorias</p>
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="card-login-carrito">
          {nombreUsuario !== "" ? (
            <NavLink to="./Perfil" className="card-login-carrito-nombre">{nombreUsuario}</NavLink>
          ) : (
            <NavLink to="./Login" style={{ color: "white" }}>
              <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>
              Iniciar Sesion
            </NavLink>
          )}
          <div>
            <NavLink to="./Carrito">
              <div className="position-relative">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: "white" }}
                ></FontAwesomeIcon>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
