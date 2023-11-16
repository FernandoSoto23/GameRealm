
  export function RegistrarUsuario() {
  return (
    <div style={{margin : "0 auto",width : "100rem"}}>
    <div className="contenedor-padre">
      <div className="card-logo">
        <h1>:v</h1>
      </div>
      <div className="card-registrarUsuario">
        <form>
          <h1>Crear cuenta</h1>
          <input className="input" type="text" placeholder="Nombre completo" />
          <input className="input" type="text" placeholder="Nombre usuario" />
          <input className="input" type="email" placeholder="Correo electronico"/>
          <input className="input" type="password" placeholder="Contraseña" />
          <input className="input" type="password" placeholder="Confirmar contraseña" />
          <input className="input" type="telefono" placeholder="Teléfono" />
          <div className="boton-orientacion">
          <div>
            <button className="boton-rojo">Cancelar</button>
          </div>
          <div> 
            <button className="boton-amarillo" >Crear cuenta</button>  
          </div>
          </div>
        </form>
      </div>
      
    </div>
    </div>

  );
  }