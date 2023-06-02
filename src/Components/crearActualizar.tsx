import { useState,useEffect } from "react";
import { Platillo } from "../clases/platillo";
import { Link, useLocation } from "react-router-dom";
import Swal from 'sweetalert2';
import {WebServiceUrl} from '../clases/rutas';
import { SanitizarDatosString,SanitizarDatosInt} from "../clases/metodosGlobales";
export function Editar(props : any){
    return(
        <>
            {props.crear === 1 && <Crear></Crear>}
            {props.crear === 2 && <Crear accion={1}/>}
        </>
    )
}


function Crear(props : any){

    const [filtro,setFiltro] =useState(0);
    const [codigo,setCodigo] =useState(0);
    const [titulo,setTitulo] = useState("");
    const [precio,setPrecio] = useState(0);
    const [imagen,setImagen] = useState("");
    const [descripcion,setDescripcion] = useState("");
    const [ErroresPantalla,setErroresPantalla]: any = useState([]);
    const [tokenActivo,setTokenActivo]: any = useState([]);
    const [boton,setBotonActivo] = useState(true);
    const [accionActualizar,setAccionActualizar] = useState(false);
    const VerificarToken = async ()=>{
        const extraerCadena = localStorage.getItem("token");
        const token = extraerCadena?.replace(/\"/g,''); 
        const url = `${WebServiceUrl}/api/login/validar?token=${token}`;
        const resp = await fetch(url);
        const datos = await resp.json();
        setTokenActivo(datos);
    }
    let Url = useLocation();
    let Codigo = Url.search;
    useEffect(()=>{
        //Llamamos la FUNCION para VALIDAR el token de ADMINISTRADOR
       
        if(props.accion === 1){
            CrearMenu();
            setAccionActualizar(true);
        }
        
    },[]);


    async function CrearMenu() {
        const url = `${WebServiceUrl}/api/menu/platillo${Codigo}`;
        await fetch(url).then((resp)=>{
            resp.json().then((datos)=>{
                setFiltro(datos.tipoMenu);
                setCodigo(datos.codigo);
                setTitulo(datos.titulo);
                setPrecio(datos.precio);
                setImagen(datos.imagen);
                setDescripcion(datos.descripcion);
            });
        });
    }
    

    const FetchAnuncio = async (url : string,requestOptions : object) =>{
        const resp = await fetch(url,requestOptions); 
        let result;
        if(resp.status === 200){
            setBotonActivo(false);
            console.log("La creacion del anuncio fue un exito");
            return result = true;
        }else{
            console.log("El fetch del anuncio no jalo");
            return result = false;
        }
    }
    async function Guardar(){
        VerificarToken();
        var platillo : Platillo = new Platillo(filtro,codigo,titulo,precio,imagen,descripcion);
        let Errores : string[] = [];
        //Vamos a SANITIZAR los datos PARA evitar Inyeccion SQL
        platillo.Titulo = SanitizarDatosString(titulo);
        platillo.Precio = SanitizarDatosInt(precio);
        platillo.Imagen = SanitizarDatosString(imagen);
        platillo.Descripcion = SanitizarDatosString(descripcion);
        //VALIDACION DE ERRORES
        if(platillo.TipoMenu === null || platillo.TipoMenu === 0){
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
        setErroresPantalla(Errores);

        //SI NO HAY ERRORES AVANZA
        //Si props.accion es 1 Es la ACCION de ACTUALIZAR si no es la ACCION de CREAR
        
        if(!Errores[0] && tokenActivo){

            const id = localStorage.getItem("id");
            const extraerCadena = localStorage.getItem("token");
            const token = extraerCadena?.replace(/\"/g,''); 
            
            let url = `${WebServiceUrl}/api/menu/guardar/`;

           if(props.accion === 1)
                url = `${WebServiceUrl}/api/menu/actualizar?codigo=${platillo.Codigo}`;
           
           const construirJson = {
                id : id,
                token : token,
                menu : platillo
           }
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(construirJson) ?? undefined
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
                        FetchAnuncio(url,requestOptions).then((result)=>{
                            Swal.fire(
                                'Remplazado!',
                                'Tu archivo ha sido Actualizado.',
                                'success'
                            )
                        });

                    }
                })
                
                return;
           }
            FetchAnuncio(url,requestOptions).then((result)=>{
                if(result){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'El platillo fue guardado exitosamente',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      setTimeout(()=>{
                        window.location.href = "../panel";
                      },1500);
                }else{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Hay un error interno,Consulta al programador para mas detalles',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            });
           
        }else{
            console.log("El token es falso o hay errores");
        }
    }
    return(
        <div className="card-contenido">
        <h2 className="texto-centrado">Crear o Actualizar Anuncio</h2>
        
        <Link to={"../admin/panel"} className="input margin-10 boton-amarillo">Regresar</ Link>
       
        
            <form className="crearActualizar">
                <fieldset className="campos">
                    <legend>Informacion Del Nuevo Platillo</legend>
                        <label>Tipo de Menu:</label>
                        <select onChange={(e)=>{setFiltro(Number(e.target.value))}} value={filtro}>
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
                        <input className="input input-precio" type="number" min={0} onChange={(e:any)=>{setPrecio(Number(e.target.value))}} value={precio}/>
                        <label >Imagen:</label>
                        <input className="input " type="text" placeholder="Pega la url de la imagen" onChange={(e)=>{setImagen(e.target.value)}} value={imagen}></input>
                        <label>Descripcion:</label>
                        <textarea className="textarea" onChange={(e)=>{setDescripcion(e.target.value)}} value={descripcion}></textarea>
                       
                    {
                        props.accion === 1 && boton && 
                        <input className="boton boton-azul-verde" type="button" onClick={Guardar} value="Actualizar Anuncio"/>
                    }
                    {
                        props.accion === undefined && boton && 
                        <input className="boton boton-azul-verde" type="button" onClick={Guardar} value="Crear Nuevo Anuncio"/>
                    }

                    {
                    ErroresPantalla.map((e : any)=> 
                    <p className="errores texto-centrado">
                        {e}
                    </p>)
                    }
                </fieldset>

            </form>
        </div>
    )
}