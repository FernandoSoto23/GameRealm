


export function Carrito(){
    const array = JSON.parse(localStorage.getItem("carrito") ?? "null");
    console.log(array);
    const variable = true;
   return(
    <>
        <table className="tabla-carrito card-contenido">
            <thead className="tabla-encabezado">
                <tr >
                    <th scope="col">Nombre</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Seleccionar</th>
                </tr>
            </thead>
            <tbody>
                {
                    array.map((e:any,i:any)=>
                        <tr key={e.codigo} className="tabla-carrito-contenido">
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
    </>
   );
}