import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png'
export function Footer(){
    return(
        <footer className="footer ">
            <div className='contenedor'>
            <div className="">
            <Link to={"./Home"}>
                <img src={logo} className='img' />
            </Link>
            </div>
            <div className='texto'>
                <span>© 2023 GameRealm Corporation. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en EE. UU. y otros países.</span>
            </div>
            <div className="">

            </div>
            </div>
        </footer>
    );
}