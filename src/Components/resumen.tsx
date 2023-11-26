import { faAlignRight, faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { text } from "stream/consumers";



export function Resumen() {
    return (
        // <div className="contenedor-padre">
        //     <div>
        //         <div className="contenedor-objetos"style={{ margin: "0 auto", width: "100rem" }} >
        //             <p>Carrito</p>
        //         </div>
        //         <div>
        //             <p>pagos</p>
        //         </div>
        //     </div>
        // </div>
        <div style={{ margin: "0 auto", width: "100rem" }}>
                <div className='contenedor-objetos'>
                    <div className='card-derecha '>
                        <div className="card-header">
                            <h3>Tu carrito</h3>
                        </div>
                        <div className="card-body">
                            <div className="centrar-img">
                                <img className="imagen" src="https://i.ibb.co/qBrd2tN/minecraftr.jpg" />
                            </div>
                            <div className="titulo">
                                <p className="p">Minecraft Java (PC)</p>
                            </div>
                            <div className="precio">
                                <button className="btn"><FontAwesomeIcon icon={faMinus} /></button>
                                <p>50</p>
                                <button className="btn"><FontAwesomeIcon icon={faPlus} /></button>
                            <p>563.73 MXN</p>
                            </div>
                            <div className="btn-Margen">
                            <button className="btn-eliminar"><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                            
                        </div>
                        <div className="card-footer">
                            <p className="p">Al hacer una compra estas aceptando nuestros terminos y condiciones</p>

                        </div>
                    </div>
                    <div className='card-izquierda'>
                        <div className="card-footer">
                            <h3>Resumen</h3>
                        </div>
                        <div className="card-body">
                            <div className="btn-compra">
                            <button>Continuar con la compra</button>
                            </div>
                            <ul className="card-resumen">
                                <li>1 producto
                                    <strong>
                                        <span className="span">a</span>
                                    </strong>
                                </li>
                                <li> hola

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
}