import { useEffect, useState } from "react";
import { WebServiceUrl } from "../clases/rutas";

export const Categorias = () => {
  const [categorias, setCategorias] = useState(
    JSON.parse(
      `[
        {"nombre": "Accion", "status": 1},
        {"nombre": "Disparos", "status": 1},
        {"nombre": "Estrategia", "status": 1},
        {"nombre": "Aventura", "status": 1},
        {"nombre": "RPG", "status": 1},
        {"nombre": "Deportes", "status": 1},
        {"nombre": "Carreras", "status": 1},
        {"nombre": "Simulacion", "status": 1},
        {"nombre": "Lucha", "status": 1},
        {"nombre": "Musical", "status": 1},
        {"nombre": "Puzzle", "status": 1},
        {"nombre": "Plataformas", "status": 1},
        {"nombre": "Terror", "status": 1},
        {"nombre": "Mundo Abierto", "status": 1},
        {"nombre": "Ciencia Ficción", "status": 1},
        {"nombre": "Fantasía", "status": 1},
        {"nombre": "Historia Interactiva", "status": 1},
        {"nombre": "Sigilo", "status": 1},
        {"nombre": "Survival", "status": 1},
        {"nombre": "Realidad Virtual", "status": 1},
        {"nombre": "Casual", "status": 1},
        {"nombre": "Educacional", "status": 1},
        {"nombre": "Multijugador en línea", "status": 1},
        {"nombre": "Battle Royale", "status": 1},
        {"nombre": "Indie", "status": 1}
      ]`
    )
  );

  useEffect(() => {}, []);

  return (
    <div className="categoria-grid">
      {categorias.map((cat: any) => (
        <div className="contenido-categoria">
          <p>{cat.nombre}</p>
        </div>
      ))}
    </div>
  );
};
