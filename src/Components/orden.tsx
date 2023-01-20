

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";



export function Orden(props : any){
    let Url = useLocation();
    let Codigo = Url.search;
    const [codigo,setCodigo] = useState();
    const [titulo,setTitulo] = useState();
    const [imagen,setImagen] = useState();
    const [precio,setPrecio] = useState();
    const [descripcion,setDescripcion] = useState();
    
     useEffect(()=>{
        OrdenPlatillo();
        
    },[]); 

   
    async function OrdenPlatillo(){
        let url = `https://localhost:7092/api/menu/platillo${Codigo}`;
        let resp = await fetch(url);
        let datos = await resp.json();
        
        setCodigo(datos.codigo);
        setTitulo(datos.titulo);
        setImagen(datos.imagen);
        setPrecio(datos.precio);
        setDescripcion(datos.descripcion);

    }
    
    
    return(
        <>
            <article className='contenido-producto'>
                <h1>{titulo}</h1>
                <div>
                    <img className="ajustar-imagen" src={imagen} alt="..." />
                    <p>Precio: <span>${precio}</span></p>
                    <p>{descripcion}</p>
                </div>
            </article>
        </>
    );
}