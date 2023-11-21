import { useEffect, useState } from "react";
import {WebServiceUrl} from '../clases/rutas';
import Swal from 'sweetalert2'
import { Auth } from "../clases/metodosGlobales";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
const imagen = require('../build/img/logo.png') ;

export function Login(props : any){
    const { administrador } = props;
    const [user,setUser] = useState();
    const [pwd,setPwd] = useState();
    const [admin,setAdmin] = useState(administrador ?? false);
    async function loguear(){
        //LOGUEA AL ADMIN
        if(admin){
            let url = (`${WebServiceUrl}/api/usuario/admin?email=${user}&pwd=${pwd}`);
            let resp = await fetch(url);
            let datos = await resp.json();
            if(datos.msg === 'ok'){
                localStorage.setItem('id',datos.dato.id);
                localStorage.setItem('nombre',datos.dato.nombre);
                localStorage.setItem('usuario',datos.dato.nombreUsuario);
                localStorage.setItem('token',JSON.stringify(datos.dato.token));
                localStorage.setItem('admin',JSON.stringify(datos.dato.admin));
                window.location.href = "../admin/panel";
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Error al iniciar sesion",
                    text: "Contraseña incorrecta o usuario incorrecto, verifique bien sus datos",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            }
        }else{
            //LOGUEA AL USUARIO NORMAL
            let url = (`${WebServiceUrl}/api/usuario/loguear?email=${user}&pwd=${pwd}`);
            let resp = await fetch(url);
            let datos = await resp.json();
            if(datos.msg === 'ok'){
                localStorage.setItem('id',datos.dato.id);
                localStorage.setItem('nombre',datos.dato.nombre);
                localStorage.setItem('usuario',datos.dato.nombreUsuario);
                localStorage.setItem('token',JSON.stringify(datos.dato.token));
                window.location.href = "./home";
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Ingresa los datos correspondientes",
                    text: "Contraseña incorrecta o usuario incorrecto, verifique bien sus datos",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            }
        }

    }   

    useEffect(()=>{
/*         if(administrador){
            const auth : boolean = Auth("admin") ?? false;
            if(auth){
                
            }
        } */
        
    },[]);
    //para logueo de admin

    return(
        <div className="contenedor card-contenido contenedor-login">
            <img className="img-login" src={imagen} alt="" />
            <div className="contenedor-Logueo">
                <label className="label-login">Email</label>
                <input type="email" placeholder="E-Mail" className="input input-login" onChange={( e : any )=>setUser(e.target.value)} value={user}/>
            </div>
            <div className="contenedor-Logueo">
                <label className="label-login">Contraseña</label>
                <input type="password" placeholder="Contraseña" className="input input-login" onChange={( e : any )=> setPwd(e.target.value)} value={pwd}/>
            </div>

            {admin === false && 
                <>
                    <button type="submit" onClick={loguear} className="boton boton-amarillo btn-logueo">Iniciar Sesion</button>
                    <p className="p-login">¿Olvidaste tu contraseña?</p>
                    
                    <div className="linea"></div>
                    
                    <p className="p-login">¿Eres Nuevo en la app?</p>
                    <NavLink to="/RegistrarUsuario">
                            <p className="boton btn-crearCuenta">Crear una cuenta</p>
                    </NavLink>
                </>
            }
            {admin == true &&
                <>
                    <button type="submit" onClick={loguear} className="boton boton-amarillo btn-logueo">Iniciar Sesion</button>
                    <p>Estas en el modo Administrador, Inicia Sesion Para Administrar la Aplicacion</p>
                </>
            }
        </div>
    );
}