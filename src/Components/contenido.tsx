import { Children, useState } from "react";
import {
    Routes,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import { Admin } from "./admin";
import { Carrito } from "./carrito";
import { Configuracion } from "./configuracion";
import { Editar } from "./crearActualizar";
import { Home } from "./home";
import { Login } from "./login";
import { Menu } from "./menus";
import { Orden } from "./orden";

export function Contenido(){

    const location = useLocation();
    let checar = false;
    let Ruta = location.pathname + location.search;
    console.log(location.pathname);
    switch(Ruta){
        case `/ComidaRapida/Orden${location.search}` :
            checar = true;
            break;
        case `/Ensaladas/Orden${location.search}` :
            checar = true;
            break;
        case `/Desayunos/Orden${location.search}` :
            checar = true;
            break;
        case `/Bebidas/Orden${location.search}` :
            checar = true;
            break;
        case `/Postres/Orden${location.search}` :
            checar = true;
            break;
        case `/Especiales/Orden${location.search}` :
            checar = true;
            break;
            
    }
    return(
        <div className="contenido">
                <Routes>
                    <Route path="/ComidaRapida" element={<Menu Tipo={1}/>}> </Route>
                    <Route path="/Ensaladas" element={<Menu Tipo={2} />}> </Route>
                    <Route path="/Desayunos" element={<Menu Tipo={3} />}> </Route>
                    <Route path="/Bebidas" element={<Menu Tipo={4} />}> </Route>
                    <Route path="/Postres" element={<Menu Tipo={5} />}> </Route>
                    <Route path="/Especiales" element={<Menu Tipo={6} />}> </Route>
                    <Route path="/Login" element={<Login />}> </Route>
                    <Route path="/Admin" element={<Login admin={true} />}> </Route>
                    

                    <Route path="/Configuracion" element={<Configuracion/>}> </Route>
                    <Route path="/Carrito" element={<Carrito/>}> </Route>
                    <Route path="/Admin/Panel" element={<Admin/>}> </Route>
                    <Route path="/Admin/Panel/Crear" element={<Editar />}> </Route>
                    
                    {checar && <Route path={location.pathname} element={<Orden/>}> </Route>}
                    <Route path="/home" element={<Home/>}> </Route>
                    <Route path="/" element={<Home/>}> </Route>
                </Routes>
        </div>
    );
}