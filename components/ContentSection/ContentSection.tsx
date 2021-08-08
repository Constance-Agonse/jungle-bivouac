import React from "react";
import Marquee from "react-double-marquee";

export const ContentSection = () => {
  return (
    <div className="ContentSection">
      <div className="ContentSection__tree">
        <div className="ContentSection__leaf-container ContentSection__leaf-container--left">
          <div className="ContentSection__leaf ContentSection__leaf--left ContentSection__leaf--quand">
            <h2>Quand?</h2>
            <p>
              Du vendredi <b>27 août</b> à partir de 17h au dimanche 29 août.
            </p>
          </div>
        </div>

        <div className="ContentSection__leaf-container ContentSection__leaf-container--right">
          <div className="ContentSection__leaf ContentSection__leaf--right ContentSection__leaf--ou">
            <h2>Où?</h2>
            <p>
              Sur le terrain du grand-père de Cléo, un terrain de plusieurs
              hectares situé à 5 minutes à pied du joli <b>lac du Bourdon</b>.
            </p>
            <p>
              <b>
                Google maps:{" "}
                <a target="_blank" href="https://goo.gl/maps/V2feNCPbERLxGo3T9">
                  <b>La Calanque, Saint-Fargeau</b>
                </a>
              </b>
            </p>
            <p>A deux heures de Paris en voiture.</p>
          </div>
        </div>

        <div className="ContentSection__leaf-container ContentSection__leaf-container--left">
          <div className="ContentSection__leaf ContentSection__leaf--left ContentSection__leaf--comment">
            <h2>Comment?</h2>
            <p>
              <b>Nous vous conseillons fortement de venir en voiture.</b>
              <br />
              Ca simplifie la logistique mais surtout ça sera plus simple pour
              transporter vos victuailles. (Il faudra arriver avec déjà bouffe
              et boissons pour tout le week-end.)
            </p>
            <p>
              Si vous voulez venir{" "}
              <a
                target="_blank"
                href="https://www.thetrainline.com/book/results?origin=11d9556489c5cb692f93fcef327abac1&destination=9ca96ffd97917c38cbfceb2ab7cdb59c&outwardDate=2021-08-27T07%3A15%3A00&outwardDateType=departAfter&journeySearchType=single&passengerDiscountCards%5B%5D=c61c7d4b4052a980aee59dc6ada0d421e1e1b4fb&passengers%5B%5D=1994-08-08%7C2d45383e-3407-4cf3-976a-4e00df84e0c1&selectedOutward=wue1Wk80Ca0%3D%3Ag7DY8JRuJxo%3D%3AStandard"
              >
                <b>en train, de Bercy à Briare</b>
              </a>
              . environ 1h30. Ensuite il y a plusieurs options:
            </p>
            <ul>
              <li>2h de vélo par des petites routes boisées.</li>
              <li>
                Pour les autres, on pourra auto-organiser une navette, le mieux
                serait de grouper les arrivées en train.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ContentSection__running-text">
        <Marquee direction="left">
          L'idée est d'aller camper dans la nature entre copains avec du bon
          son.
        </Marquee>
      </div>
    </div>
  );
};
