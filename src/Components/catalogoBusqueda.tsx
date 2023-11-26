import { useEffect, useState } from "react";
import { WebServiceUrl } from "../clases/rutas";
 import { } from './../assets/American Truck Simulator.jpg'
import { Link } from "react-router-dom";
export const CatalogoBusqueda = () => {
  const [titulos,setTitulo] = useState([]);

  const CrearCategorias = async ()=>{
    const url = `${WebServiceUrl}/api/titulo`;
    const resp = await fetch(url);
    const datos = await resp.json();
    if(datos.msg === "ok"){
      console.log(datos);
    }
  }

  useEffect(()=>{
    ObtenerTituloFiltrado();
  },[]);
  const ObtenerTituloFiltrado = ()=>{
    const busqueda = localStorage.getItem("busqueda") ?? "";
    const titulosGuardados = JSON.parse(localStorage.getItem("BusquedaDeItemsGameRealm") ?? "[]");
    const titulosFiltrados = titulosGuardados.filter((titulo : any) => {
      // Utilizando match con una expresión regular para buscar cualquier coincidencia parcial
      const regex = new RegExp(busqueda.toLowerCase(), 'i');
      return titulo.nombre.toLowerCase().match(regex);
    });
    console.log(titulosFiltrados);
    setTitulo(titulosFiltrados);
  }
  return(
    <div className='menu-grid'>

        {
            
             titulos.map( (titulos : any) => (
                <Link to={`./Orden?codigo=${titulos.codigo}`} key={ titulos.codigo }>
                    <article className='card-contenido contenido-producto'>
                        <div>
                            <img className='ajustar-imagen imagen-recortada' src={titulos.imagen} alt="..." />
                            <h3 className='texto-centrado'>{titulos.nombre}</h3>
                            <div className='linea'></div>
                            <p>Precio: <span className='span-precio'>${titulos.precio}</span></p>
                            
                            <p >{titulos.descripcion.substring(0,50)} <span className='ver-mas'> ...Ver Mas... </span></p>
                            <p className='envio'>Costo de envio $20</p>
                            <input type="submit" value="Seleccionar" className='boton boton-amarillo boton-largo ver-mas'/>
                        </div>
                    </article>
                </Link>
            )) 


        }
    </div>
);
};
