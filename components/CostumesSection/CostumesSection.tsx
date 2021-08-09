import React from "react";
import Marquee from "react-double-marquee";
import { CostumeSlider } from "../CostumeSlider/CostumeSlider";

export const CostumesSection = () => {
  return (
    <div className="CostumesSection__costumes">
      <div className="CostumesSection__running-text">
        <Marquee direction="right">
          Les amis de la jungle - inspirez-vous de notre séléction de pépites
          vestimentaires.
        </Marquee>
      </div>
      <CostumeSlider
        imageUrls={[
          "/assets/Newcostumes/1.png",
          "/assets/Newcostumes/2.png",
          "/assets/Newcostumes/3.png",
          "/assets/Newcostumes/4.png",
          "/assets/Newcostumes/5.png",
          "/assets/Newcostumes/6.png",
          "/assets/Newcostumes/7.png",
          "/assets/Newcostumes/8.png",
          "/assets/Newcostumes/9.png 16-01-50-791.png",
          "/assets/Newcostumes/10.png",
          "/assets/Newcostumes/11.png",
        ]}
        speed="medium"
      />
      <div className="CostumesSection__running-text">
        <Marquee direction="right">
          nature, primaire, animal, explorateur, végétal - Libérez l'animal
          sauvage qui est en vous.
        </Marquee>
      </div>
    </div>
  );
};