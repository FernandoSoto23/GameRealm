
import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import {WebServiceUrl} from '../clases/rutas';

export function Menu(props : any){
    const {Tipo} = props;
    return(
        <>
            {Tipo === 1 && <MenuDinamico Ruta="listarxTipo" Tipo={Tipo}/>}
            {Tipo === 2 && <MenuDinamico Ruta="listarxTipo" Tipo={Tipo}/>}
            {Tipo === 3 && <MenuDinamico Ruta="listarxTipo" Tipo={Tipo}/>}
            {Tipo === 4 && <MenuDinamico Ruta="listarxTipo" Tipo={Tipo}/>}
            {Tipo === 5 && <MenuDinamico Ruta="listarxTipo" Tipo={Tipo}/>}
            {Tipo === 6 && <MenuDinamico Ruta="listarxTipo" Tipo={Tipo}/>}
        </>
    );
}

export function MenuDinamico(props : any){
    const {Ruta, Tipo} = props;  
    const [Menu,SetMenu] = useState([{"codigo":"","titulo":"","descripcion":"","imagen":"","precio":""}]);

    useEffect(()=>{
        CrearMenu();
    },[]);
    async function CrearMenu(){
        let url = `${WebServiceUrl}/api/menu/${Ruta}?TipoMenu=${Tipo}`;
        try{
            let response = await fetch(url);
            if(response.ok){
                console.log("La respuesta fue buena");
            }else {
                console.log('Respuesta de red OK pero respuesta de HTTP no OK');
            }
            let datos = await response.json();

            SetMenu(datos);
        }catch( error : any){
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        }
        
    }
    return(
        <div className='menu-grid'>

            {
                
                 Menu.map( (menus : any) => (
                    <Link to={`./Orden?codigo=${menus.codigo}`} key={ menus.codigo }>
                        <article className='card-contenido contenido-producto'>
                            <div>
                                <img className='ajustar-imagen imagen-recortada' src={menus.imagen} alt="..." />
                                <h3 className='texto-centrado'>{menus.titulo}</h3>
                                <div className='linea'></div>
                                <p>Precio: <span className='span-precio'>${menus.precio}</span></p>
                                
                                <p >{menus.descripcion.substring(0,50)} <span className='ver-mas'> ...Ver Mas... </span></p>
                                <p className='envio'>Costo de envio $20</p>
                                <input type="submit" value="Seleccionar" className='boton boton-amarillo boton-largo ver-mas'/>
                            </div>
                        </article>
                    </Link>
                )) 


            }
        </div>
    );
}
