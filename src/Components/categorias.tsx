import { useEffect, useState } from "react";
import { WebServiceUrl } from "../clases/rutas";

export const Categorias = () => {
  const [categorias, setCategorias] = useState();

  const CrearCategorias = async () => {
    
    const {id} : any= JSON.parse(localStorage.getItem("UsuarioGameRealm") ?? "");
    const url = `${WebServiceUrl}/api/Biblioteca/ListarBiblioteca?idUsuario=${id}`;
    const resp = await fetch(url);
    const datos = await resp.json();
    if (datos.msg === "ok") {
      console.log(datos);
    }
  };

  useEffect(() => {
    CrearCategorias();
  }, []);

  return (
    <div className="contenedor-categorias">
      <div className="small-box bg-info">
        <div className="inner">
          <h3>150</h3>
          <p>New Orders</p>
        </div>
        <div className="icon">
          <i className="fas fa-shopping-cart" />
        </div>
        <a href="#" className="small-box-footer">
          More info <i className="fas fa-arrow-circle-right" />
        </a>
      </div>
    </div>
  );
};
