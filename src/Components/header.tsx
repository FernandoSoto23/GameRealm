import path from "path";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";

//menu fixed


export function Header(){
    const cookies = new Cookies;
    let btnDakMode = cookies.get('DarkMode') === 'Activo';
    const [Check,setCheck] = useState(btnDakMode);
   
    
    const darkMode = document.querySelector('body');
    if(cookies.get('DarkMode') === 'Activo'){
        darkMode?.classList.add('DarkMode');

    }else{
        darkMode?.classList.remove('DarkMode');
    }
    let variable = 10;

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

    function click(){
        console.log("desde click");
    }
    return(
        <header className="header">
            <nav className="header-navegacion">
                <div className="buscar-producto">
                    <input className="input" type="text" placeholder="Buscar"/>
                    <button className="boton boton-buscar" onClick={click}></button>
                </div>
                <div>
                    <a href="" className="carrito">
                        <div className="position-relative">
                            <img src="https://i.ibb.co/fQwSFC5/carro-de-la-carretilla.png" alt="carro-de-la-carretilla"/>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger bg-num-carrrito">{variable}</span>
                        </div>
                        
                    </a>
                </div>
            </nav>
            
            <div className="header-logueo form-check form-switch">
                
                <NavLink to="./Login">Iniciar Sesion</NavLink>
                <input checked={Check} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={DarkMode}/>

            </div>
        </header>
    );
};

