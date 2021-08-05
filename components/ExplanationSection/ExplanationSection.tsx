import React from "react";
import Marquee from "react-double-marquee";

export const ExplanationSection = () => {
  return (
    <div className="ExplanationSection">
      <div className="ExplanationSection__tree">
        <div className="ExplanationSection__leaf-container ExplanationSection__leaf-container--left">
          <div className="ExplanationSection__leaf ExplanationSection__leaf--left ExplanationSection__leaf--quand">
          <h2>Que prendre avec vous?</h2>
            <ul>
              <li>sac de couchage</li>
              <li>tente</li>
              <li>affaires chaudes</li>
              <li>maillot de bain</li>
              <li>vos habits de lumière</li>
              <li>écocup et paire de couverts</li>
              <li>batteries externes pour téléphones</li>
              <li>votre glacière pour les bières</li>
            </ul>
          </div>
        </div>

        <div className="ExplanationSection__leaf-container ExplanationSection__leaf-container--right">
          <div className="ExplanationSection__leaf ExplanationSection__leaf--right ExplanationSection__leaf--ou">
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

        <div className="ExplanationSection__leaf-container ExplanationSection__leaf-container--left">
          <div className="ExplanationSection__leaf ExplanationSection__leaf--left ExplanationSection__leaf--comment">
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
      <div className="ExplanationSection__running-text">
        <Marquee direction="left">
          L'idée est d'aller camper dans la nature entre copains avec du bon
          son.
        </Marquee>
      </div>
    </div>
  );
};
