import React from "react";
import Marquee from "react-double-marquee";
import { CostumeSlider } from "../CostumeSlider/CostumeSlider";

export const ExplanationSection = () => {
  return (
    <div className="ExplanationSection">
      <div className="ExplanationSection__tree">
        <div className="ExplanationSection__leaf-container ExplanationSection__leaf-container--left">
          <div className="ExplanationSection__leaf ExplanationSection__leaf--left ExplanationSection__leaf--que-prendre">
            <img
              src="/assets/monkey1.png"
              className="ExplanationSection__leaf--que-prendre__monkey"
              alt=""
            />
            <h2>Que prendre avec vous?</h2>
            <ul>
              <li>Sac de couchage</li>
              <li>Tente</li>
              <li>Affaires chaudes</li>
              <li>Maillot de bain</li>
              <li>Vos habits de lumière</li>
              <li>Écocup et paire de couverts</li>
              <li>Batteries externes pour téléphones</li>
              <li>Votre glacière pour les bières</li>
            </ul>
          </div>
        </div>

        <div className="ExplanationSection__leaf-container ExplanationSection__leaf-container--right">
          <div className="ExplanationSection__leaf ExplanationSection__leaf--right ExplanationSection__leaf--surtout">
            <img
              src="/assets/tigre.png"
              className="ExplanationSection__leaf-container--right__tigre"
              alt=""
            />
            <h2>
              Et surtout de l'eau, de l'alcool et de la nourriture pour tout le
              week-end.
            </h2>
            <p>
              On prévoit un barbeuc le samedi midi ( plus posé que le vendredi
              soir). Prenez ce que vous voulez pour le barbeuc, on gardera en
              glacière pendant une nuit. Pour le reste des repas, prenez des
              choses pas trop périssables comme de quoi vous faire des
              sandwichs, des fruits, melon, pastèque, cakes salés, salades etc.
            </p>
            <p>L'idée est qu'on mette tout en commun autour de buffets.</p>
          </div>
        </div>

        <div className="ExplanationSection__leaf-container ExplanationSection__leaf-container--left">
          <div className="ExplanationSection__leaf ExplanationSection__leaf--left ExplanationSection__leaf--participe">
          <img
              src="/assets/monkey3.png"
              className="ExplanationSection__leaf--participe__monkey"
              alt=""
            />
            <p>
              On vous demandera une participation (15 € max) qui couvrira la
              location du matos électricité pour avoir du bon son tout le
              week-end.
            </p>
            <div className="ExplanationSection__leaf--participe__shifted-text">
              <p>
                Chacun sera invité à veiller à la propreté du lieu qui est un
                terrain que la famille de Cléo utilise régulièrement.
              </p>
              <p>
                Il n'y a pas de bâtiment sur le terrain, donc pas de toillettes,
                ça sera full nature et on organisera des petits espaces dédiés
                pour poser sa petite pêche tranquil.
              </p>
              <p>
                Une douche est à disposition sur la plage du lac du Bourdon, à 5
                minutes à pied.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="ExplanationSection__costumes">
        <div className="ExplanationSection__running-text">
          <Marquee direction="right">
            Les amis de la jungle - inspirez-vous de notre séléction de pépites
            vestimentaires.
          </Marquee>
        </div>
        <CostumeSlider
          imageUrls={[
            "/assets/costumes/1.png",
            "/assets/costumes/2.png",
            "/assets/costumes/3.png",
            "/assets/costumes/4.png",
            "/assets/costumes/5.png",
            "/assets/costumes/6.png",
            "/assets/costumes/7.png",
            "/assets/costumes/8.png",
          ]}
          speed="medium"
        />
        <div className="ExplanationSection__running-text">
          <Marquee direction="right">
            nature, primaire, animal, explorateur, végétal - Libérez l'animal
            sauvage qui est en vous.
          </Marquee>
        </div>
      </div> */}
    </div>
  );
};
