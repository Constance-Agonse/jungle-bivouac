import React from "react";
import Marquee from "react-double-marquee";

export const HomeSectionAlternative = () => {
  return (
    <div className="HomeSectionAlternative">
      <div className="HomeSectionAlternative__bg">
        <div className="HomeSectionAlternative__left-image" />
        <div className="HomeSectionAlternative__right-menu">
          <div className="HomeSectionAlternative__right-menu__item">
            27 Août
          </div>
          <div className="HomeSectionAlternative__right-menu__item HomeSectionAlternative__right-menu__item--logo">
            JUNGLE BIVOUAC
          </div>
          <div className="HomeSectionAlternative__right-menu__item HomeSectionAlternative__right-menu__item--underlined">
            Saint-Fargeau
          </div>
        </div>
      </div>
      <div className="HomeSectionAlternative__moving-text">
        <Marquee direction="left">
          Mini bivouac entre amis du vendredi 27 au dimanche 29 août. Evènement
          top secret réservé aux copains.
        </Marquee>
      </div>
    </div>
  );
};
