
//menu fixed


export function Header(){
    let variable = 10;
    function click(){
        console.log("desde click");
    }
    return(
        <header className="header">
            <nav className="header-navegacion">
                <div className="buscar-producto">
                    <input className="input" type="text" placeholder="Buscar"/>
                    <button className="boton boton-buscar" onClick={click}></button>
                </div>
                <div>
                    <a href="" className="carrito">
                        <div className="position-relative">
                            <img src="https://i.ibb.co/fQwSFC5/carro-de-la-carretilla.png" alt="carro-de-la-carretilla"/>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger bg-num-carrrito">{variable}</span>
                        </div>
                        
                    </a>
                </div>
            </nav>
            <div className="header-logueo">
                <a href="">Iniciar Sesion</a>
            </div>
        </header>
    );
};