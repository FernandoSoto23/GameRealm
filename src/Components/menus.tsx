
import { useLocation} from 'react-router-dom';
const imagen = require('../build/img/muestra.png') ;

export function Menu(){
    let location = useLocation();
    let Tipo: String = "";
    switch(location.pathname){
        case '/ComidaRapida' :
            Tipo = "Comida Rapida";
            break;
        case '/Ensaladas' :
            Tipo = "Ensalada";
            break;
        case '/Desayunos' :
            Tipo = "Desayunos";
            break;
            
    }
    return(
        <div>
            
            <article className='contenido-producto'>
                <h1>Ensalada depito:</h1>
                <div className='contenedor-producto'>
                    <img src={imagen} alt="..." />
                    <p>Precio: <span>$3,000</span></p>
                    <p>Este platillo te encantara, encargalo y te haremos un descuento especial en los primos 20 minutos</p>
                </div>
             </article>
             <article className='contenido-producto'>
                <h1>Ensalada Hermosa:</h1>
                <div className='contenedor-producto'>
                    <img src={imagen} alt="..." />
                    <p>Precio: <span>3,000</span></p>
                    <p>Este platillo te encantara, encargalo y te haremos un descuento especial en los primos 20 minutos</p>
                </div>
             </article>
             <article className='contenido-producto'>
                <h1>Ensalada Hermosa:</h1>
                <div className='contenedor-producto'>
                    <img src={imagen} alt="..." />
                    <p>Precio: <span>3,000</span></p>
                    <p>Este platillo te encantara, encargalo y te haremos un descuento especial en los primos 20 minutos</p>
                </div>
             </article>
             <article className='contenido-producto'>
                <h1>Ensalada Hermosa:</h1>
                <div className='contenedor-producto'>
                    <img src={imagen} alt="..." />
                    <p>Precio: <span>3,000</span></p>
                    <p>Este platillo te encantara, encargalo y te haremos un descuento especial en los primos 20 minutos</p>
                </div>
             </article>
        </div>
    );
}