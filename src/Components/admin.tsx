import { useState } from "react";


export function Admin(){
    const [filtro,setFiltro] =useState("");
    const [datos,setDatos] : any =useState();
    async function filtrar(){
        if(filtro === "0" || filtro === ""){
            return;
        }
        const url = `http://25.8.193.19:9095/api/menu/listarxtipo?tipomenu=${filtro}`;
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
    return(
        <div className="card-contenido">
            <h2 className="texto-centrado">Panel De Control</h2>
            <label>Selecciona una Seccion: </label>

            <select onChange={(e)=>{setFiltro(e.target.value)}}>
                <option value="0">--Seleccione--</option>
                <option value="1">Comida Rapida</option>
                <option value="2">Ensaladas</option>
                <option value="3">Desayunos</option>
                <option value="4">Bebidas</option>
                <option value="5">Postres</option>
                <option value="6">Especiales</option>
            </select>
            <button onClick={filtrar}>Filtrar</button>

            <table className="tabla-carrito ">
                <thead className="tabla-encabezado">
                    <tr >
                        <th scope="col">Titulo</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Precio</th>

                        <th scope="col">Seleccionar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datos != null && 
                        datos.map((e : any)=>
                        <tr>
                            <td className="celda"><h1>{e.titulo}</h1></td>
                            <td className="celda"><img>{e.imagen}</img></td>
                            <td className="celda"><h1>{e.precio}</h1></td >
                            <td className="celda"><h1>{e.precio}</h1></td>
                        </tr>
                        )
                    }
                </tbody>
               

            </table>
        </div>
        
    )
}