import logo from '../assets/logo1.png'
export function Footer(){
    return(
        <header className="footer ">
            <div className='contenedor'>
            <div className="header-logo ">
                <img src={logo} className='img' />
            </div>
            <div className='texto'>
                <span>© 2023 GameRealm Corporation. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en EE. UU. y otros países.</span>
            </div>
            <div className="header-logueo">

            </div>
            </div>
        </header>
    );
}