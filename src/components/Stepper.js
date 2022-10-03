import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import img1 from "../images/women.png";
const images = [
  { url: img1 },
  { url: img1 },
  { url: img1 },

];
export default function Stepper() {
  return (
    <div>
      <SimpleImageSlider
        width="100vw"
        height="28.75vw"
        images={images}
        showBullets={true}
        showNavs={false}
      />
    </div>
  );
}
