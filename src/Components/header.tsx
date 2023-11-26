import path from "path";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faCartShopping,
  faMagnifyingGlass,
  faPlus,
  faRightFromBracket,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logoheader.png";
import { WebServiceUrl } from "../clases/rutas";

export function Header() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [busqueda, setBusqueda] = useState("");
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
    localStorage.setItem("busqueda", " ");
    if (!localStorage.getItem("BusquedaDeItemsGameRealm")) {
      const url = `${WebServiceUrl}/api/titulo/ListarTitulos`;
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
      console.log("No se hizo");
    }
  };
  const GuardarBusqueda = (event: any) => {
    localStorage.setItem("busqueda", event);
  };
  const CerrarSesion = () => {
    localStorage.removeItem("UsuarioGameRealm");
    window.location.href = "./home";
  };
  return (
    <header className="header">
      <nav className="header-navegacion">
        <div className="buscar-producto">
          <Link to={"./Home"}>
            <img src={logo} className="logo" />
          </Link>

          <input
            className="input"
            type="text"
            placeholder="Buscar"
            onChange={(e) => GuardarBusqueda(e.target.value)}
            onClick={() => BuscarItem()}
            onKeyUp={(e: any) => {
              if (e.key === "Enter") {
                window.location.href = "./../CatalogoBusqueda";
              }
            }}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#ffffff" }}
            onClick={() => (window.location.href = "./../CatalogoBusqueda")}
          />
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
            <div className="card-login-carrito-nombre">
              <NavLink to="./Perfil" className="perfil">
                <div>
                  <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} />
                </div>
                <div style={{ marginRight: "1rem" }}>
                  <p>{nombreUsuario}</p>
                </div>
              </NavLink>
              <div
                className="cerrar-sesion"
                onClick={() => CerrarSesion()}
                style={{ cursor: "pointer", userSelect: "none" }}
              >
                <div style={{ borderInlineStart: "1px solid white" }}>
                  <p style={{ margin: "0 1rem" }}>Cerrar Sesion</p>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    style={{ color: "#ffffff" }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="login-crear-cuenta">
              <NavLink
                to="./Login"
                className="login"
                style={{ color: "white" }}
              >
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  style={{ color: "#ffffff" }}
                />
                <p>Iniciar Sesion</p>
              </NavLink>
              <div style={{borderInlineStart: "1px solid white" }}></div>
              <NavLink
                to="./RegistrarUsuario"
                className="crear-cuenta"
                style={{ color: "white"}}
                
              >
                
                <p>Registrarse</p>
                <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} />
              </NavLink>
            </div>
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
