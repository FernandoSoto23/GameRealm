import { Children, useEffect, useState } from "react";
import {
    Routes,
    Route,
    Link,
    useLocation,
    NavLink
} from "react-router-dom";
import { Admin } from "./admin";
import { Carrito } from "./carrito";
import { Configuracion } from "./configuracion";
import { Editar } from "./crearActualizar";
import { Home } from "./home";
import { Login } from "./login";
import { Menu } from "./menus";
import { Orden } from "./orden";
import Resumen from "./resumen";
import { RegistrarUsuario } from "./RegistrarUsuario";
import { Producto } from "./producto";

export function Contenido(){
    const [id,setId] = useState();
    let boleanActualizado =false;
    const location = useLocation();
    let checar = false;
    let Ruta = location.pathname + location.search;
    
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
        case `/admin/panel/Actualizar${location.search}` :
            boleanActualizado =true;
            break;
    }
    const MostrarUsuario = ()=>{
        let usuarioGameRealm  : any = localStorage.getItem("UsuarioGameRealm");
        usuarioGameRealm = JSON.parse(usuarioGameRealm);
        console.log(usuarioGameRealm["nombreUsuario"])
        if(usuarioGameRealm !== null){
            setId(usuarioGameRealm["id"]);
        }
    }
    useEffect(()=>{
        MostrarUsuario();
    },[]);
    return(
        <div>
            <div className="contenido">
                <NavLink to="./Carrito">
                    <h3>Carrito</h3>
                    {location.pathname === "/Carrito" && <div className ="linea-amarilla"></div>}
                </NavLink>
                <Link to="./Resumen">
                    <h3>Resumen</h3>
                    {location.pathname === "/Resumen" && <div className ="linea-amarilla"></div>}
                </Link>            
            </div>
            
            <Routes>
                            
                    <Route path="/Carrito" element={<Carrito/>}> </Route>
                    <Route path="/Biblioteca" element={<Producto/>}> </Route>
                    <Route path="/Categoria" element={<Menu Tipo={2} />}> </Route>
                    
                    <Route path="/Desayunos" element={<Menu Tipo={3} />}> </Route>
                    <Route path="/Bebidas" element={<Menu Tipo={4} />}> </Route>
                    <Route path="/Postres" element={<Menu Tipo={5} />}> </Route>
                    <Route path="/Especiales" element={<Menu Tipo={6} />}> </Route>
                    <Route path="/Login" element={<Login />}> </Route>
                    <Route path="/Admin" element={<Login administrador={true} />}> </Route>
                    

                    <Route path="/Configuracion" element={<Configuracion/>}> </Route>
                    <Route path="/Carrito" element={<Carrito/>}> </Route>
                    <Route path="/Resumen" element={<Resumen/>}> </Route>
                    <Route path="/Perfil" element={<Perfil/>}> </Route>
                    

                    <Route path="/Admin/Panel" element={<Admin/>}> </Route>
                    <Route path="/Admin/Panel/Crear" element={<Editar crear={1}/>}> </Route>
                    <Route path="/RegistrarUsuario" element={<RegistrarUsuario/>}></Route>
                    {boleanActualizado && <Route path={location.pathname} element={<Editar crear={2}/>}> </Route>}
                    
                    {checar && <Route path={location.pathname} element={<Orden/>}> </Route>}
                    <Route path="/home" element={<Home/>}> </Route>
                    <Route path="/" element={<Home/>}> </Route>
            </Routes>
            

                
        </div>
    );
}