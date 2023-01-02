import { Children } from "react";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Home } from "./home";

import { Menu } from "./menus";

export function Contenido(){
    return(
        <div>
                <Routes>
                    <Route path="/ComidaRapida" element={<Menu/>}> </Route>
                    <Route path="/Ensaladas" element={<Menu/>}> </Route>
                    <Route path="/Desayunos" element={<Menu/>}> </Route>
                    <Route path="/home" element={<Home/>}> </Route>
                </Routes>
        </div>
    );
}