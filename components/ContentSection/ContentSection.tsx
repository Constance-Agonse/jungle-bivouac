import React from "react";
import Marquee from "react-double-marquee";

export const ContentSection = () => {
  return (
    <div className="ContentSection">
      <div className="ContentSection__tree">
        <div className="ContentSection__leaf-container ContentSection__leaf-container--left">
          <div className="ContentSection__leaf ContentSection__leaf--left ContentSection__leaf--quand">
            <h2>Quand?</h2>
            <p>Du vendredi 27 août à partir de 17h au dimanche 29 août.</p>
          </div>
        </div>

        <div className="ContentSection__leaf-container ContentSection__leaf-container--right">
          <div className="ContentSection__leaf ContentSection__leaf--right ContentSection__leaf--ou">
            <h2>Où?</h2>
            <p>
              Sur le terrain du grand-père de Cléo, un terrain de plusieurs
              hectares situé à 5 minutes à pied du joli lac du Bourdon.
            </p>
            <p>
              L'adresse la plus précise pour google maps est le camping La
              Calanque, Saint-Fargeau.
            </p>
            <p>A deux heures de Paris en voiture.</p>
          </div>
        </div>

        <div className="ContentSection__leaf-container ContentSection__leaf-container--left">
          <div className="ContentSection__leaf ContentSection__leaf--left ContentSection__leaf--comment">
            <h2>Comment?</h2>
            <p>
              Nous vous conseillons fortement de venir en voiture. Ca simplifie
              la logistique mais surtout ça sera plus simple pour transporter
              vos victuailles. (Il faudra arriver avec déjà bouffe et boissons
              pour tout le week-end.)
            </p>
            <p>
              Si vous voulez venir en train, de Bercy à Briare. environ 1h30.
              Ensuite il y a plusieurs options:
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
