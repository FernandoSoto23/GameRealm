import { WebServiceUrl } from "../clases/rutas";
import { CardBody,Card,CardImg,CardGroup,Button,CardText,CardSubtitle,CardTitle} from "reactstrap";
import {useState,useEffect}from "react"
import Swal from "sweetalert2";

export const Biblioteca = () => {
  const [biblioteca,setBiblioteca] = useState([]);
  const [bibliotecaVacia,setBibliotecaVacia] = useState(false);
  const CrearBiblioteca = async () => {

    

    if(localStorage.getItem("UsuarioGameRealm")){
      const { id  } : any = JSON.parse(
        localStorage.getItem("UsuarioGameRealm") ?? ""
      );
      console.log(id);
      const url = `${WebServiceUrl}/api/Biblioteca/ListarBiblioteca?idUsuario=${id}`;
      const resp = await fetch(url);
      const datos = await resp.json();
      if (datos.msg === "ok") {
        setBiblioteca(datos.dato);
      }
    }else{
    setBibliotecaVacia(true);
    }

  };

  useEffect(()=>{
    CrearBiblioteca();
  },[]);
  return (
    <div className='menu-grid'>

        {bibliotecaVacia && <h1 style={{marginTop : "5rem"}}>La biblioteca se encuentra sin juegos</h1>}
        {
            biblioteca &&
             biblioteca.map( (b : any) => (
                <div key={ b.codigo }>
                    <article className='card-contenido contenido-producto'>
                        <div>
                            <img className='ajustar-imagen imagen-recortada' src={b.imagen} alt="..." />
                            <h3 className='texto-centrado'>{b.nombre}</h3>
                            <div className='linea'></div>
                            
                            
                            <input style={{marginTop : "1rem"}} type="submit" value="Ver Key" className='boton boton-amarillo boton-largo ver-mas' onClick={()=>Swal.fire(`La Key del producto seleccionado es ${b.tituloKey}`)}/>
                        </div>
                    </article>
                </div>
            )) 


        }
    </div>
  );
};
