import { NavLink } from "react-router-dom";



export function BarraInferior(){
    let carrito = JSON.parse(localStorage.getItem("carrito") ?? "0").length;
    
    return(
        
        <div className="barra-inferior">
            <NavLink to="./Home" className="carrito">
                <div className="logo">
                    <img  src="https://i.ibb.co/1ZDFKNQ/casa.png" alt="imagen-2022-12-20-021333176" />
                </div>                    
            </NavLink>

            <NavLink to="Carrito" className="carrito">
                <div className="position-relative">
                    <img src="https://i.ibb.co/fQwSFC5/carro-de-la-carretilla.png" alt="carro-de-la-carretilla"/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger bg-num-carrrito">{carrito}</span>
                </div>
            </NavLink>
            <NavLink to="./Configuracion" className="carrito">
                <div>
                    <img src="https://i.ibb.co/CstRXBS/configuraciones.png" alt="imagen-2022-12-20-021333176" />
                </div>                    
            </NavLink>
        </div>
       
    );
}