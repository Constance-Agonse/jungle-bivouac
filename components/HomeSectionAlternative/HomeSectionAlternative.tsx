import React from "react";
import Marquee from "react-double-marquee";

const images = [
  "https:///i.pinimg.com/564x/dd/59/94/dd5994ca7529d1321275adf59a7e6968.jpg",
  "https://i.pinimg.com/564x/ec/56/6f/ec566ff385635581b28255c9d8943311.jpg",
  "https://i.pinimg.com/564x/01/83/69/018369f3ff6dd050b8b653a41007cee5.jpg",
];

export const HomeSectionAlternative = () => {
  const imageUrl = images[Math.floor(Math.random()*images.length)];
  return (
    <div className="HomeSectionAlternative">
      <div className="HomeSectionAlternative__bg">
        <div
          className="HomeSectionAlternative__left-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
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
