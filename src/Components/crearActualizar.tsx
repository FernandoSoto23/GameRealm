import { useState,useEffect } from "react";
import { Platillo } from "../clases/platillo";
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2';

export function Editar(props : any){
    return(
        <>
            {props.crear === 1 && <Crear></Crear>}
            {props.crear === 2 && <Crear accion={1}/>}
        </>
    )
}
function Crear(props : any){
    let Url = useLocation();
    let Codigo = Url.search;

    useEffect(()=>{
        
        if(props.accion === 1){
            CrearMenu();
        }
        
    },[]);
    async function CrearMenu(){
        let url = `https://sekyhwebservice.azurewebsites.net/api/menu/platillo${Codigo}`;
        try{
            let response = await fetch(url);
            if(response.ok){
                console.log("La respuesta fue buena");
            }else {
                console.log('Respuesta de red OK pero respuesta de HTTP no OK');
            }
            let datos = await response.json();
            console.log(datos)
            setFiltro(datos.tipoMenu);
            setCodigo(datos.codigo);
            setTitulo(datos.titulo);
            setImagen(datos.imagen);
            setDescripcion(datos.descripcion);
            setPrecio(datos.precio);
        }catch( error : any){
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        }
        
    }

    const [filtro,setFiltro] =useState("");
    const [codigo,setCodigo] =useState("");
    const [titulo,setTitulo] = useState("");
    const [precio,setPrecio] = useState(0);
    const [imagen,setImagen] = useState("");
    const [descripcion,setDescripcion] = useState("");
    const [Errores1,setErrores]: any = useState([]);
    const [tokenActivo,setTokenActivo]: any = useState([]);

    async function Guardar(){
        
        let platillo : Platillo = new Platillo(Number(filtro),codigo,titulo,precio,imagen,descripcion);
        let Errores : string[] = [];
        //validar errores
        
        if(platillo.TipoMenu === null || platillo.TipoMenu === 0){
            Errores.push("Seleccione una opcion");
        }
        if(platillo.Codigo === null || platillo.Codigo === ""){
            Errores.push("Ingrese un codigo");
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
        setErrores(Errores);
        //SI NO HAY ERRORES AVANZA
        const extraerCadena = localStorage.getItem("token");
        const token = extraerCadena?.replace(/\"/g,''); 
        const url = `https://sekyhwebservice.azurewebsites.net/api/login/validar?token=${token}`;
        const resp = await fetch(url);
        const datos = await resp.json();
        setTokenActivo(datos);


        if(!Errores[0] && tokenActivo){
            let url = `https://sekyhwebservice.azurewebsites.net/api/menu/guardar/`;
           if(props.accion === 1){
            url = `https://sekyhwebservice.azurewebsites.net/api/menu/actualizar/`;
           }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(platillo)
            };
           
           
           if(props.accion === 1){
                Swal.fire({
                    title: 'Esta seguro?',
                    text: "Desea Remplazar el Platillo?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, Remplazalo!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        fetch(url,requestOptions);

                    Swal.fire(
                        'Remplazado!',
                        'Tu archivo ha sido Actualizado.',
                        'success'
                    )
                    }
                })
                
                return;
           }
           await fetch(url,requestOptions);
           Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El platillo fue guardado exitosamente',
            showConfirmButton: false,
            timer: 1500
          })
            
        }else{
            console.log("El token es falso o hay errores");
        }
    }

    return(
        <div className="card-contenido">
        <h2 className="texto-centrado">Crear o Actualizar Anuncio</h2>
            <form className="crearActualizar">
                <fieldset className="campos">
                    <legend>Informacion Del Nuevo Platillo</legend>
                    <label>Tipo de Menu:</label>
                    <select onChange={(e)=>{setFiltro(e.target.value)}} value={filtro}>
                        <option value="0">--Seleccione--</option>
                        <option value="1">Comida Rapida</option>
                        <option value="2">Ensaladas</option>
                        <option value="3">Desayunos</option>
                        <option value="4">Bebidas</option>
                        <option value="5">Postres</option>
                        <option value="6">Especiales</option>
                    </select>
                    <label>Codigo:</label>
                    <input className="input input-titulo" type="text" onChange={(e)=>{setCodigo(e.target.value)}} value={codigo}/>
                    <label>Titulo:</label>
                    <input className="input input-titulo" type="text" onChange={(e)=>{setTitulo(e.target.value)}} value={titulo}/>
                    <label>Precio:</label>
                    <input className="input input-precio" type="number" min={0} onChange={(e:any)=>{setPrecio(e.target.value)}} value={precio}/>
                    <label >Imagen:</label>
                    <input className="input " type="text" placeholder="Pega la url de la imagen" onChange={(e)=>{setImagen(e.target.value)}} value={imagen}></input>
                    <label>Descripcion:</label>
                    <textarea className="textarea" onChange={(e)=>{setDescripcion(e.target.value)}} value={descripcion}></textarea>
                    <input className="boton boton-azul-verde" type="button" onClick={Guardar} value="Enter"/>
                    {
                    Errores1.map((e : any)=> 
                    <p className="errores texto-centrado">
                        {e}
                    </p>)
                    }
                </fieldset>

            </form>
        </div>
    )
}