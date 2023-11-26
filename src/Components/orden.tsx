import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { WebServiceUrl } from "../clases/rutas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faGamepad,
  faGlobe,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import VideoModal from "./modal";
import ModalVideo from "./modal";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export function Orden(props: any) {
  let Url = useLocation();
  let Codigo = Url.search;
  const [contador, setContador] = useState(0);
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState();
  const [imagen, setImagen] = useState();
  const [precio, setPrecio] = useState();
  const [descripcion, setDescripcion] = useState();
  const [plataforma, setPlataforma] = useState();
  const [region, setRegion] = useState();
  const [idioma, setIdioma] = useState();
  const [link, setLink] = useState("");
  const [xbox, setXbox] = useState();
  const [playstation, setPlayStation] = useState();
  const [nintendoSwitch, setNintendoSwitch] = useState();
  let cantidad = 0;
  useEffect(() => {
    CargarTitulo();
  }, [contador]);

  function agregar() {
    if (contador < 10) setContador(contador + 1);
  }
  function quitar() {
    if (contador > 1) setContador(contador - 1);
  }
  async function CargarTitulo() {
    if(localStorage.getItem("carrito")){
      var carrito = JSON.parse(localStorage.getItem("carrito") ?? "")
      for(let i = 0; i < carrito.length; i++){
        if(carrito[i].codigo === codigo){
          cantidad = carrito[i].cantidad;
          setContador(cantidad);
        }
      }
    }
    let url = `${WebServiceUrl}/api/titulo/ObtenerTitulo${Codigo}`;
    let resp = await fetch(url);
    let datos = await resp.json();

    setCodigo(datos.codigo);
    setNombre(datos.nombre);
    setImagen(datos.imagen);
    setPrecio(datos.precio);
    setDescripcion(datos.descripcion);
    let { Xbox, PlayStation, NintendoSwitch } = JSON.parse(datos.plataforma);

    Xbox = Xbox === 1 ? "Xbox" : "";
    PlayStation = PlayStation === 1 ? "PlayStation" : "";
    NintendoSwitch = NintendoSwitch === 1 ? "Nintendo Switch" : "";
    setXbox(Xbox);
    setPlayStation(PlayStation);
    setNintendoSwitch(NintendoSwitch);

    setPlataforma(JSON.parse(datos.plataforma));
    setRegion(datos.region);
    setIdioma(datos.idioma);
    setLink(datos.link)
  }

  function guardar() {
    if (contador <= 0) {
      console.log("NO MI REY, POR AQUI NO PASAS");
      return;
    }
    const objeto = [
      {
        codigo: codigo,
        nombre: nombre,
        cantidad: contador,
        imagen: imagen,
        precio: precio,
      },
    ];
    const carrito = localStorage.getItem("carrito") ?? "null";
    //este codigo esta funcional

    if (carrito == "null") {
      localStorage.setItem("carrito", JSON.stringify(objeto));
      Alerta(true, "Se añadio Correctamente");
    } else {
      //SobreEscribir
      SobreEscribir(JSON.parse(carrito));
      //Añadir un nuevo producto
      AddCarrito(JSON.parse(carrito));
    }
  }
  function SobreEscribir(JsonParam: any) {
    JsonParam.forEach((e: any, index: any) => {
      if (e["codigo"] === codigo) {
        JsonParam[index].cantidad = contador;
        localStorage.setItem("carrito", JSON.stringify(JsonParam));
        Alerta(true, "Se Actualizo su carrito");
      }
    });
  }

  function AddCarrito(JsonParam: any) {
    let existe: boolean = false;

    for (let i = 0; i < JsonParam.length; i++) {
      if (JsonParam[i]["codigo"] === codigo) {
        existe = true;
      }
    }

    if (!existe) {
      JsonParam.push({
        codigo: codigo,
        nombre: nombre,
        cantidad: contador,
        imagen: imagen,
        precio: precio,
      });
      localStorage.setItem("carrito", JSON.stringify(JsonParam));

      Alerta(true, "Se añadio Correctamente");
    }
  }

  function Alerta(respuesta: any, mensaje: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    if (respuesta) {
      Toast.fire({
        icon: "success",
        title: mensaje,
      });
    } else {
      Toast.fire({
        icon: "warning",
        title: mensaje,
      });
    }
  }
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div style={{ margin: "auto", width: "120rem" }}>
        <div className="contenido-padre">
          <div className="card-imagen">
            <img src={imagen} />
            <div>
              <button className="boton-trailer" onClick={openModal}>
                Ver trailer{" "}
                <span>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    style={{ color: "#fd0808" }}
                    size="lg"
                  />
                </span>
              </button>

              {showModal && (
                <ModalVideo
                  videoSrc={link}
                  onClose={closeModal}
                />
              )}
            </div>
          </div>
          <div className="card-producto">
            <div>
              <h1>{nombre}</h1>
            </div>
            <div className="col">
              <div className="row">
                <div className="AlinearColumna">
                  <FontAwesomeIcon
                    icon={faGamepad}
                    size="2xl"
                    className="margen-top"
                  />
                  <p>
                    Plataforma: {xbox} {playstation} {nintendoSwitch}
                  </p>
                </div>
                <div  className="AlinearColumna">
                  <FontAwesomeIcon
                    icon={faKey}
                    size="2xl"
                    className="margen-top"
                  />
                  <p>Tipo: Clave</p>
                </div>
              </div>
              <div className="row">
                <div className="seccion-columna">
                  <p className=""> Región: Global</p>
                </div>
              </div>

              <div className="seccion-columna">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  size="2xl"
                  className="separador"
                />
                <FontAwesomeIcon
                  icon={faGlobe}
                  size="2xl"
                  className="separador"
                />
              </div>
            </div>
            <div>
              <p className="separacion">{descripcion}</p>
            </div>
          </div>
          <div className="card-compra">
            <form>
              <p>Stock disponible</p>
              <p>{precio} MXN</p>
              <p>Vendedor oficial : Mojang </p>
              <button className="boton-compra">Comprar ahora</button>
              <div>
              <div className="añadir-carrito">
                        <div className="contenedor-contador">
                            <input type="button" className="btn-numerar" onClick={ quitar } value={" - "} />
                            <span className="input-number texto-centrado">{(contador === 0)? cantidad : contador}</span>
                            <input type="button" className="btn-numerar" onClick={ agregar } value={"+"}/>
                        </div>
                        <input type="button" onClick={guardar} className="boton boton-amarillo" value={"Añadir al Carrito"} />
                    </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*             <article className='card-contenido contenido-producto menu-orden'>
                <div className="menu-orden-flex">
                    <img className='ajustar-imagen' src={imagen} alt="..." />
                    <h3 className='texto-centrado'>{titulo}</h3>
                    <div className='linea'></div>
                    <p>Precio: <span className='span-precio'>${precio}</span></p>
                    <p>{descripcion}</p>
                    <p className='envio'>Costo de envio $20</p>
                    <div className="añadir-carrito">
                        <div className="contenedor-contador">
                            <button className="btn-numerar" onClick={ quitar }>-</button>
                            <span className="input-number texto-centrado">{contador}</span>
                            <button className="btn-numerar" onClick={ agregar }>+</button>
                        </div>
                        <button onClick={guardar} className="boton boton-amarillo">Añadir al Carrito</button>
                    </div>
                </div>
            </article> */}
    </>
  );
}
