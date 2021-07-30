import React from "react";
import Marquee from "react-double-marquee";

export const HomeSection = () => {
  return (
    <div className="HomeSection">
      <div className="HomeSection__image">
        <div className="HomeSection__image__bg">
          <div className="HomeSection__image__logo">
            <div className="HomeSection__image__logo__title">
              JUNGLE BIVOUAC
            </div>
            <div className="HomeSection__image__logo__subtitle">
              <div className="HomeSection__image__logo__subtitle__item">
                27 août 2021
              </div>
              <div className="HomeSection__image__logo__subtitle__item">
                Saint-Fargeau
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="HomeSection__moving-text">
        <Marquee direction="left">
          Mini bivouac entre amis du vendredi 27 au dimanche 29 août. Evènement
          top secret réservé aux copains.
        </Marquee>
      </div>
    </div>
  );
};
