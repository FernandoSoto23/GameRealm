import React from 'react';
//componentes
import { Barra } from './Components/barra';
import { Contenido } from './Components/contenido';
import './build/css/app.css';
import { BarraInferior } from './Components/barraInferior';
import { Header } from './Components/header';
import { Footer } from './Components/footer';

function App() {
  
  return (

      
      <div className='contenedor-barra' >
        <Header></Header>
        <Barra/>
        <Contenido></Contenido>
        <BarraInferior/>
        <Footer></Footer>
      </div>
  );
}

export default App;
