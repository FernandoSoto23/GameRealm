

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2';
import {WebServiceUrl} from '../clases/rutas';


export function Orden(props : any){
    let Url = useLocation();
    let Codigo = Url.search;
    const [contador,setContador] = useState(0);
    const [codigo,setCodigo]  = useState("");
    const [titulo,setTitulo] = useState();
    const [imagen,setImagen] = useState();
    const [precio,setPrecio] = useState();
    const [descripcion,setDescripcion] = useState();
    
     useEffect(()=>{
        OrdenPlatillo();
    },[]); 

    function agregar(){
        if(contador < 10)
        setContador( contador + 1 );
    }
    function quitar(){
        if(contador > 1)
        setContador( contador - 1 )
    }
    async function OrdenPlatillo(){
        let url = `${WebServiceUrl}/api/menu/platillo${Codigo}`;
        let resp = await fetch(url);
        let datos = await resp.json();
        
        setCodigo(datos.codigo);
        setTitulo(datos.titulo);
        setImagen(datos.imagen);
        setPrecio(datos.precio);
        setDescripcion(datos.descripcion);

    }
    
    function guardar(){
        if(contador <= 0){
            console.log("NO MI REY, POR AQUI NO PASAS");
            return;
        }
        const objeto = [
            {   
                "codigo" : codigo,
                "titulo": titulo, 
                "cantidad": contador,
                "imagen" : imagen,
                "precio": precio
            }
        ];
        const carrito = localStorage.getItem("carrito") ?? "null";
        //este codigo esta funcional

        if(carrito == 'null'){
            localStorage.setItem("carrito", JSON.stringify(objeto));
            Alerta(true,"Se añadio Correctamente");
        }else{
            //SobreEscribir
            SobreEscribir(JSON.parse(carrito));
            //Añadir un nuevo producto
            AddCarrito(JSON.parse(carrito));
        }
    }
    function SobreEscribir(JsonParam: any){
        JsonParam.forEach((e : any,index : any)=>{
            if(e["codigo"] === codigo){
                JsonParam[index].cantidad = contador;
                localStorage.setItem("carrito" , JSON.stringify(JsonParam))
                Alerta(true,"Se Actualizo su carrito");
            }
        });
    }
    
    function AddCarrito(JsonParam : any){
        let existe : boolean = false;
        
        for(let i = 0; i < JsonParam.length; i++){
            
            if(JsonParam[i]["codigo"] === codigo){
                existe = true;
            }
        }
        
         if(!existe){
            JsonParam.push({"codigo": codigo,"titulo":titulo,"cantidad" : contador,"imagen": imagen,"precio":precio});
            localStorage.setItem("carrito" , JSON.stringify(JsonParam))
            
            Alerta(true,"Se añadio Correctamente");
         }
         
 }

 function Alerta(respuesta : any, mensaje : string){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    if(respuesta){
        Toast.fire({
            icon: 'success',
            title: mensaje
        })
    }else{
        Toast.fire({
            icon: 'warning',
            title: mensaje
        })
    }

 }
    return(
        <>
            <article className='card-contenido contenido-producto menu-orden'>
                <div className="menu-orden-flex">
                    <img className='ajustar-imagen' src={imagen} alt="..." />
                    <h3 className='texto-centrado'>{titulo}</h3>
                    <div className='linea'></div>
                    <p>Precio: <span className='span-precio'>${precio}</span></p>
                    <p>{descripcion}</p>
                    <p className='envio'>Costo de envio $20</p>
                    <div className="añadir-carrito">
                        <div className="contenedor-contador">
                            <button className="btn-numerar" onClick={ quitar }>-</button>
                            <span className="input-number texto-centrado">{contador}</span>
                            <button className="btn-numerar" onClick={ agregar }>+</button>
                        </div>
                        <button onClick={guardar} className="boton boton-amarillo">Añadir al Carrito</button>
                    </div>
                </div>
            </article>
        </>
    );
}