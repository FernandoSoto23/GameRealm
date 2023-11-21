import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faGamepad, faGlobe, faKey } from '@fortawesome/free-solid-svg-icons';

export function Producto() {
    return (
        <div style={{ margin: "auto", width: "120rem" }}>
            <div className="contenido-padre">
                <div className="card-imagen">
                    <img src="https://i.ibb.co/qBrd2tN/minecraftr.jpg" />
                    <a href="https://www.youtube.com/watch?v=MmB9b5njVbA">
                        <button className="button-trailer">Ver trailer</button>
                    </a>
                </div>
                <div className="card-producto">
                    <div>
                        <h1>Minecraft Java edition (PC)</h1>
                    </div>
                    <div className="seccion-fila">
                        <div className="seccion-columna">
                                <FontAwesomeIcon icon={faGamepad} size="2xl" className="margen-top" />
                                <FontAwesomeIcon icon={faKey} size="2xl" className="margen-top" />
                        </div>
                        <div className="seccion-columna">
                            <p>Plataforma: PC</p>
                            <p>Tipo: Clave</p>
                        </div>
                            <div className='seccion-columna'>
                                <FontAwesomeIcon icon={faBagShopping} size="2xl" className='separador' />
                                <FontAwesomeIcon icon={faGlobe} size="2xl" className='separador' />
                            </div>
                        <div className="seccion-columna">
                            <p className="">Cantidad : 1</p>
                            <p className=""> Región: Global</p>
                        </div>
                    </div>
                    <div>
                        <p className="separacion">Minecraft es un videojuego sandbox enfocado en permitirle al jugador explorar y modificar un mundo generado dinámicamente hecho de bloques de un metro cúbico. Es mantenido por Mojang Studios, que forma parte de Xbox Game Studios, que a su vez es parte de Microsoft.</p>
                    </div>
                </div>
                <div className="card-compra">
                    <form >
                        <p>Stock disponible</p>
                        <p>$563.73</p>
                        <p>Vendedor oficial : Mojang</p>
                        <button className="boton-compra">Comprar ahora</button>
                        <div>
                            <button className="boton-agregar">Agregar al carrito</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
