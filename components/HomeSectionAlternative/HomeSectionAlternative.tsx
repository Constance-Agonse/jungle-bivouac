import React from "react";
import Marquee from "react-double-marquee";

export const HomeSectionAlternative = () => {
  return (
    <div className="HomeSectionAlternative">
      <div className="HomeSectionAlternative__bg"></div>
      <div className="HomeSectionAlternative__moving-text">
        <Marquee direction="left">
          Mini bivouac entre amis du vendredi 27 au dimanche 29 août. Evènement
          top secret réservé aux copains.
        </Marquee>
      </div>
    </div>
  );
};
