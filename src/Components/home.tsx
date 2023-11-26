import React, { useState } from "react";
import { UncontrolledCarousel } from "reactstrap";
import imagen1 from '../assets/P23.jpg';
import imagen2 from '../assets/wallpaperflare-com-amd.jpg';
import imagen3 from '../assets/wallpaperflare-com-intel.jpg';
import imagen4 from '../assets/wallpaperflare-com-marcas.jpg';
import imagen5 from '../assets/wallpaperflare-com-nvidia.jpg';
import imagen6 from '../assets/wallpaperflare-com-ps.jpg';
import imagen7 from '../assets/wallpaperflare-com-rtx.jpg';
export function Home() {
  return (
    <div className="home">
      <UncontrolledCarousel 
        items={[
          {
            altText: "Slide 1",
            caption: "Slide 1",
            interval: 1000,
            key: 1,
            src: `${imagen1}`,
          },
          {
            altText: "Slide 2",
            caption: "Slide 2",
            interval: 1000,
            key: 2,
            src: `${imagen2}`,
          },
          {
            altText: "Slide 3",
            caption: "Slide 3",
            interval: 1000,
            key: 3,
            src: `${imagen3}`,
          },
          {
            altText: "Slide 3",
            caption: "Slide 3",
            interval: 1000,
            key: 3,
            src: `${imagen4}`,
          },
        ]}
      />
    </div>
  );
}
