import { useEffect, useState } from "react";
import { WebServiceUrl } from "../clases/rutas";
import imagen1 from '../assets/Catálogo/accion.jpg';
import imagen2 from '../assets/Catálogo/diparos.jpg';
import imagen3 from '../assets/Catálogo/estrategia.png';
import imagen4 from '../assets/Catálogo/aventura.jpg';
import imagen5 from '../assets/Catálogo/RPG.jpg';
import imagen6 from '../assets/Catálogo/deporte.jpg';
import imagen7 from '../assets/Catálogo/carreras.jpg';
import imagen8 from '../assets/Catálogo/simulacion.jpg';
import imagen9 from '../assets/Catálogo/Lucha.jpg';
import imagen10 from '../assets/Catálogo/musical.jpg';
import imagen11 from '../assets/Catálogo/Puzzle.jpg';
import imagen12 from '../assets/Catálogo/plataforma.jpg';
import imagen13 from '../assets/Catálogo/Terror.jpg';
import imagen14 from '../assets/Catálogo/mundo abierto.jpg';
import imagen15 from '../assets/Catálogo/Ciencia_F.jpg';
import imagen16 from '../assets/Catálogo/Fantasia.png';
import imagen17 from '../assets/Catálogo/hisotira_interactiva.jpg';
import imagen18 from '../assets/Catálogo/sigilo.jpg';
import imagen19 from '../assets/Catálogo/Survival.jpg';
import imagen20 from '../assets/Catálogo/realidad virtual.jpg';
import imagen21 from '../assets/Catálogo/casual.png';
import imagen22 from '../assets/Catálogo/Educacional.jpg';
import imagen23 from '../assets/Catálogo/multijugador.png';
import imagen24 from '../assets/Catálogo/battle royale.jpg';
import imagen25 from '../assets/Catálogo/indie.jpg';

export const Categorias = () => {
  const [categorias, setCategorias] = useState(
    JSON.parse(
      `[
        {"nombre": "Accion", "status": 1, "imagen": "${imagen1}", "color": "#FF0000"},
  {"nombre": "Disparos", "status": 1, "imagen": "${imagen2}", "color": "#FFA500"},
  {"nombre": "Estrategia", "status": 1, "imagen": "${imagen3}", "color": "#008080"},
  {"nombre": "Aventura", "status": 1, "imagen": "${imagen4}", "color": "#4B0082"},
  {"nombre": "RPG", "status": 1, "imagen": "${imagen5}", "color": "#9932CC"},
  {"nombre": "Deportes", "status": 1, "imagen": "${imagen6}", "color": "#008000"},
  {"nombre": "Carreras", "status": 1, "imagen": "${imagen7}", "color": "#FF4500"},
  {"nombre": "Simulacion", "status": 1, "imagen": "${imagen8}", "color": "#87CEEB"},
  {"nombre": "Lucha", "status": 1, "imagen": "${imagen9}", "color": "#800000"},
  {"nombre": "Musical", "status": 1, "imagen": "${imagen10}", "color": "#FFD700"},
  {"nombre": "Puzzle", "status": 1, "imagen": "${imagen11}", "color": "#800080"},
  {"nombre": "Plataformas", "status": 1, "imagen": "${imagen12}", "color": "#000080"},
  {"nombre": "Terror", "status": 1, "imagen": "${imagen13}", "color": "#696969"},
  {"nombre": "Mundo Abierto", "status": 1, "imagen": "${imagen14}", "color": "#8B4513"},
  {"nombre": "Ciencia Ficción", "status": 1, "imagen": "${imagen15}", "color": "#00CED1"},
  {"nombre": "Fantasía", "status": 1, "imagen": "${imagen16}", "color": "#7CFC00"},
  {"nombre": "Historia Interactiva", "status": 1, "imagen": "${imagen17}", "color": "#556B2F"},
  {"nombre": "Sigilo", "status": 1, "imagen": "${imagen18}", "color": "#483D8B"},
  {"nombre": "Survival", "status": 1, "imagen": "${imagen19}", "color": "#228B22"},
  {"nombre": "Realidad Virtual", "status": 1, "imagen": "${imagen20}", "color": "#800000"},
  {"nombre": "Casual", "status": 1, "imagen": "${imagen21}", "color": "#FF6347"},
  {"nombre": "Educacional", "status": 1, "imagen": "${imagen22}", "color": "#00FA9A"},
  {"nombre": "Multijugador en línea", "status": 1, "imagen": "${imagen23}", "color": "#4682B4"},
  {"nombre": "Battle Royale", "status": 1, "imagen": "${imagen24}", "color": "#B22222"},
  {"nombre": "Indie", "status": 1, "imagen": "${imagen25}", "color": "#800080"}
      ]`
    )
  );

  useEffect(() => { }, []);

  return (
    <div className="categoria-grid">
      {categorias.map((cat: any) => (
        <div
          className="contenido-categoria"
          style={{
            backgroundImage: `url(${cat.imagen})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "cover",
            
          }}>
          <p>{cat.nombre}</p>
        </div>
      ))}
    </div>
  );
};
