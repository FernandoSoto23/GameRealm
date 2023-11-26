export const CardPerfil = (props) => {
    const {
        perfil,
        domicilio,
        ciudad,
        estado,
        usuario,
        nombre

      } = props;
  return (
    <div className="col-lg-4">
      <div className="card mb-4">
        <div className="card-body text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            alt="avatar"
            className="rounded-circle img-fluid"
            style={{ width: 150 }}
          />
          <h5 className="my-3">{usuario}</h5>
          <p className="text-muted mb-1">{nombre}</p>

          <p className="text-muted mb-1">{perfil}</p>
          <div className="d-flex justify-content-center mb-2">

          </div>
        </div>
      </div>
    </div>
  );
};
