import { link } from "fs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function Admin(){
    


    const [filtro,setFiltro] =useState("");
    const [datos,setDatos] : any =useState();
    const [mostrarPag,setMostrarPag] = useState(false);
    useEffect(()=>{
        Auth();
    },[]);

    async function filtrar(){
        if(filtro === "0" || filtro === ""){
            return;
        }
        const url = `https://sekyhwebservice.azurewebsites.net/api/menu/listarxtipo?tipomenu=${filtro}`;
        try{
            let response = await fetch(url);
            if(response.ok){
                console.log("Todo bien");
            }else{
                console.log('Respuesta de red OK pero respuesta de HTTP no OK');
            }
            let arregloObjetos = await response.json();
            console.log(arregloObjetos);
            setDatos(arregloObjetos);
        }
        catch(error : any){
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        }
    }
    const Auth = async ()=>{
        const token = JSON.parse(localStorage.getItem("token") ?? "null");
        console.log(token)
        let url = (`https://sekyhwebservice.azurewebsites.net/api/login/Auth?token=${token}`);
        let resp = await fetch(url);
        let datos = await resp.json();
        if(datos.msg !== 'ok'){
            window.location.href = "../home";
        }else{
            setMostrarPag(true);
        }
    }    
    return(
        <>
        {mostrarPag &&
        
        

        <div className="card-contenido">
            
            <h2 className="texto-centrado">Panel De Control</h2>
            <div className="panel-opciones content-select">
                
                <label>Selecciona una Seccion: </label>

                <select className="diseño-select" onChange={(e)=>{setFiltro(e.target.value)}}>
                    <option value="0">--Seleccione--</option>
                    <option value="1">Comida Rapida</option>
                    <option value="2">Ensaladas</option>
                    <option value="3">Desayunos</option>
                    <option value="4">Bebidas</option>
                    <option value="5">Postres</option>
                    <option value="6">Especiales</option>
                </select>
               
                <button onClick={filtrar} className="boton boton-amarillo">Filtrar</button>
                <Link to="./Crear">
                    <button onClick={filtrar} className="boton boton-amarillo">Crear</button>
                </Link>
            </div>
            
            <table className="tabla ">
                <thead className="tabla-encabezado">
                    <tr >
                        <th scope="col">Titulo</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Seleccionar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datos != null && 
                        datos.map((e : any)=>
                        <tr key={e.codigo} >
                            <td className="celda">
                                <h4>{e.titulo}</h4>
                            </td>
                            <td className="celda">
                                <h4 className="texto-centrado">$:{e.precio}</h4>
                            </td >
                            <td className="celda">
                                <div className="celda-dentro">
                                    <img className="imagen" src={e.imagen}/>
                                </div>
                            </td>
                            <td className="celda">
                                <div className="celda-dentro">
                                    <Link to={`./Actualizar?codigo=${e.codigo}`}>
                                        <button className="boton boton-azul-verde">Editar</button>
                                    </Link>
                                    <button className="boton boton-rojo">Eliminar</button>
                                </div>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
               

            </table>
        </div>
        }
        </>
    )
}