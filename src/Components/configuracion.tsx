import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";


export function Configuracion(){
        /* Coockies y funciones para el modo oscuro */
        const cookies = new Cookies;
        let btnDakMode = cookies.get('DarkMode') === 'Activo';
        const [Check,setCheck] = useState(btnDakMode);
    
        const darkMode = document.querySelector('body');
        if(cookies.get('DarkMode') === 'Activo'){
            darkMode?.classList.add('DarkMode');
    
        }else{
            darkMode?.classList.remove('DarkMode');
        }
    
        function DarkMode(){
            
            if(Check){
                cookies.set('DarkMode', 'Desactivo' ,{path:"/"});
                setCheck(false);
            }
            else{
                cookies.set('DarkMode', 'Activo' ,{path:"/"});
                setCheck(true);
            }
    
        }
    
       /* Fin modo Oscuro */

       /* LogOut */
       function LogOut(){
            localStorage.removeItem('id');
            localStorage.removeItem('nombre');
            localStorage.removeItem('usuario');
            localStorage.removeItem('token');
            window.location.href = "./home";
        }
       /* Fin LogOut */
    return(
        <>
            <div className="card-contenido card-configuracion">
                <h2 className="texto-centrado margin-none">Bievenido a la Configuracion</h2>
                <div className="card-contenido card-contenido-personalizado">
                    <h4 className="card-header">Preferencias</h4>
                    <div className="card-tabla">
                        <div className="col">
                            <label>Modo Oscuro:</label>
                            <ul>
                                <li className="list-style-none">
                                    <div className="form-check form-switch">
                                        <input checked={Check} onChange={DarkMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <label>Configuracion de Sesion:</label>
                            {!localStorage.getItem('id') && 
                                        <NavLink to="../login">
                                            <button className="boton boton-amarillo">Iniciar Sesion</button>
                                        </NavLink>
                                 }
                                {localStorage.getItem('id') !=null &&
                                     <button onClick={LogOut} className="boton boton-rojo-amarillo">Cerrar Sesion</button>
                                }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}