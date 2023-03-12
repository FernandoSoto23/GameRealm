import { useEffect, useState } from "react";
import any from "react/jsx-runtime";

  const imagen = require('../build/img/logo.png') ;

export function Login(props : any){
    const [user,setUser] = useState();
    const [pwd,setPwd] = useState();
    async function loguear(){

        let url = (`http://25.8.193.19:9095/api/login/loguear?email=${user}&pwd=${pwd}`);
        
        let resp = await fetch(url);
        let datos = await resp.json();

       
        if(datos.msg === 'ok'){
            localStorage.setItem('id',datos.dato.id);
            localStorage.setItem('nombre',datos.dato.nombre);
            localStorage.setItem('usuario',datos.dato.nombreUsuario);
            localStorage.setItem('token',JSON.stringify(datos.dato.token));
            window.location.href = "./home";
        }else{
            alert("error");
        }
    }   
    useEffect(()=>{
        if(localStorage.getItem('id'))
        window.location.href = "./home";
    },[]);
    //para logueo de admin
    let admin = props.admin ?? false;

    return(
        <div className="contenedor card-contenido contenedor-login">
            <img className="img-login" src={imagen} alt="" />
            <div className="contenedor-Logueo">
                <label className="label-login">Email o Usuario</label>
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
                    <button type="submit" className="boton btn-crearCuenta">Crear Cuenta</button>
                </>
            }
            {admin == true &&
                <>
                    <p>Estas en el modo Administrador, Inicia Sesion Para Administrar la Aplicacion</p>
                </>
            }
        </div>
    );
}