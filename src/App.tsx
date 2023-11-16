import React from 'react';
//componentes
import { Barra } from './Components/barra';
import { Contenido } from './Components/contenido';
import './build/css/app.css';
import { BarraInferior } from './Components/barraInferior';
import { Header } from './Components/header';

function App() {
  
  return (
    <div>
      
      <div className='contenedor-barra'>
        <Header></Header>
        <Contenido></Contenido>
        <BarraInferior/>
      </div>
      
    </div>
  );
}

export default App;
