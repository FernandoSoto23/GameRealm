
  export function RegistrarUsuario() {
  return (
  <form className="row g-3">
    <div className="col-md-6">
      <label htmlFor="inputEmail4" className="form-label">Nombre completo</label>
      <input type="text" className="form-control" id="inputNC" />
    </div>
    <div className="col-md-6">
      <label htmlFor="inputPassword4" className="form-label">Nombre de Usuario</label>
      <input type="text" className="form-control" id="inputNU" />
    </div>
    <div className="col-md-6">
      <label htmlFor="inputAddress" className="form-label">Email</label>
      <input type="email" className="form-control" id="inputEmail" />
    </div>
    <div className="col-md-6">
      <label htmlFor="inputAddress2" className="form-label">Contraseña</label>
      <input type="password" className="form-control" id="inputContraseña"/>
    </div>
    <div className="col-md-2">
        <label htmlFor="" className="form-label">Telefono</label>
        <input type="tel" className="form-control" id="inputTel"/>
    </div>
    <div>
    <button type="button" className="btn btn-success">Success</button>
    </div>
    </form>
  );
  }