import React from "react";
import Marquee from "react-double-marquee";

export const ExplanationSection = () => {
  return (
    <div className="ExplanationSection">
      <div className="ExplanationSection__tree">
        <div className="ExplanationSection__leaf-container ExplanationSection__leaf-container--left">
          <div className="ExplanationSection__leaf ExplanationSection__leaf--left ExplanationSection__leaf--que-prendre">

            <h2>Que prendre avec vous?</h2>
            <ul>
              <li>Sac de couchage</li>
              <li>Tente</li>
              <li>Affaires chaudes</li>
              <li>Maillot de bain</li>
              <li>Habits de lumière</li>
              <li>Écocup et paire de couverts</li>
              <li>Batteries externes pour téléphones</li>
              <li>Glacière pour les bières</li>
              <li>PQ</li>
              <li>...</li>
            </ul>
          </div>
        </div>

        <div className="ExplanationSection__leaf-container ExplanationSection__leaf-container--right">
          <div className="ExplanationSection__leaf ExplanationSection__leaf--right ExplanationSection__leaf--surtout">
            <img
              src="/assets/dancingbb.png"
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
            <p className='ExplanationSection__leaf--participe--bold'>
              Une participation volontaire est la bienvenue afin couvrir nos frais de loc du groupe éléctrogène pour le son. On ne dépassera pas la barre des 15 €.

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


    </div>
  );
};
