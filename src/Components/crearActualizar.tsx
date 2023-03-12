import { useState } from "react";
import { Platillo } from "../clases/platillo";


export function Editar(){
    return(
        <>
            <Crear></Crear>
        </>
    )
}
function Crear(){
    const [filtro,setFiltro] =useState("");
    const [titulo,setTitulo] = useState("");
    const [precio,setPrecio] = useState(0);
    const [imagen,setImagen] = useState("");
    const [descripcion,setDescripcion] = useState("");
    
    async function Guardar(){
        
        let platillo : Platillo = new Platillo(Number(filtro),titulo,precio,imagen,descripcion);
        let Errores : string[] = [];
        //validar errores
        if(platillo.Filtro === null || platillo.Filtro === 0){
            Errores.push("Seleccione una opcion");
        }
        if(platillo.Titulo === null || platillo.Titulo === ""){
            Errores.push("Por favor ingrese un titulo");
        }
        if(platillo.Precio === null || platillo.Precio === 0){
            Errores.push("Por favor ingrese un precio");
        }
        if(platillo.Imagen === null || platillo.Imagen === ""){
            Errores.push("Por favor ingrese una imagen");
        }
        if(platillo.Descripcion === null || platillo.Descripcion === ""){
            Errores.push("Por favor ingrese una descripcion");
        }
        
        //SI NO HAY ERRORES AVANZA
        if(!Errores[0]){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(platillo)
            };
            const url = "";
            const resp = await fetch(url,requestOptions)

            
        }
    }

    return(
        <div className="card-contenido">
        <h2 className="texto-centrado">Crear Nuevo Anuncio</h2>
            <form className="crearActualizar">
                <fieldset className="campos">
                    <legend>Informacion Del Nuevo Platillo</legend>
                    <label>Tipo de Menu:</label>
                    <select onChange={(e)=>{setFiltro(e.target.value)}}>
                        <option value="0">--Seleccione--</option>
                        <option value="1">Comida Rapida</option>
                        <option value="2">Ensaladas</option>
                        <option value="3">Desayunos</option>
                        <option value="4">Bebidas</option>
                        <option value="5">Postres</option>
                        <option value="6">Especiales</option>
                    </select>
                    <label>Titulo:</label>
                    <input className="input input-titulo" type="text" onChange={(e)=>{setTitulo(e.target.value)}} value={titulo}/>
                    <label>Precio:</label>
                    <input className="input input-precio" type="number" min={0} onChange={(e:any)=>{setPrecio(e.target.value)}} value={precio}/>
                    <label >Imagen:</label>
                    <input className="input " type="text" placeholder="Pega la url de la imagen" onChange={(e)=>{setImagen(e.target.value)}} value={imagen}></input>
                    <label>Descripcion:</label>
                    <textarea className="textarea" onChange={(e)=>{setDescripcion(e.target.value)}} value={descripcion}></textarea>
                    <input className="boton boton-azul-verde" type="button" onClick={Guardar} value="click"/>
                </fieldset>

            </form>
        </div>
    )
}