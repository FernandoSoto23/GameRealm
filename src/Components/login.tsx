


export function Login(){
    return(
        <div className="contenedor card-contenido contenedor-login">
            <img src="" alt="" />
            <div className="contenedor-Logueo">
                <label>Email o Usuario</label>
                <input type="email" className="input input-email"/>
            </div>
            <div className="contenedor-Logueo">
                <label>Contraseña</label>
                <input type="password"className="input input-password"/>
            </div>
            <button type="submit" className="boton boton-verde"> Loguear</button>
        </div>
    );
}