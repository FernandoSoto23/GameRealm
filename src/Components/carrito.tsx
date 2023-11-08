import { Link } from "react-router-dom";



export function Carrito(){
    const array = JSON.parse(localStorage.getItem("carrito") ?? "null");
    
   return(
    <>
        {array != null &&
            <table className="tabla-carrito card-contenido">
            <thead className="tabla-encabezado">
                <tr>
                <th scope="col" className="titulo texto-centrado">Imagen</th>
                    <th scope="col" className="titulo texto-centrado">Nombre</th>
                    <th scope="col"className="titulo texto-centrado">Cantidad</th>
                    <th scope="col"className="titulo texto-centrado">Seleccionar</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    array.map((e:any,i:any)=>
                        <tr key={e.codigo} className="tabla-carrito-contenido">
                            <td className="texto-centrado">
                                <img className="imagen-recortada imagen-carrito" src={e.imagen}></img>
                            </td>
                            <td className="celda">
                                <p>{e.titulo}</p>
                                <p>$:{e.precio}</p>
                            </td>
                            <td className="celda texto-centrado">
                                <p>{e.cantidad}</p>
                            </td>
                            <td className="celda celda-boton">
                                <button className="boton boton-rojo boton-celda">Eliminar</button>
                            </td>
                            
                        </tr>
                    )
                }
            </tbody>
        </table>
        }
        <Link to="/Resumen">
            <button className="boton boton-azul">Siguiente</button>
        </Link>
        {array ===null && <h1 className="texto-centrado">Tu Carrito Esta Vacio</h1>}

    </>
   );
}