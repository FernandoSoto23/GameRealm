
  const imagen = require('../build/img/logo.png') ;

export function Login(){
    return(
        <div className="contenedor card-contenido contenedor-login">
            <img className="img-login" src={imagen} alt="" />
            <div className="contenedor-Logueo">
                <label className="label-login">Email o Usuario</label>
                <input type="email" placeholder="E-Mail" className="input input-login"/>
            </div>
            <div className="contenedor-Logueo">
                <label className="label-login">Contraseña</label>
                <input type="password" placeholder="Contraseña" className="input input-login"/>
            </div>

            <button type="submit" className="boton boton-amarillo btn-logueo">Iniciar Sesion</button>
            <p className="p-login">¿Olvidaste tu contraseña?</p>
            
            <div className="linea"></div>
            
            <p className="p-login">¿Eres Nuevo en la app?</p>
            <button type="submit" className="boton btn-crearCuenta">Crear Cuenta</button>
        </div>
    );
}