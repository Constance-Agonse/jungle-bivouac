import React from "react";
import { Button } from "../Button/Button";
import { GrFacebook } from "react-icons/gr";

const organisateurs = [
  {
    name: "Cléo",
    telephone: "06 33 93 45 12",
    avatar: "/assets/avatar1.png",
    fb: "https://www.facebook.com/cleo.ravise"
  },
  {
    name: "Constance",
    telephone: "07 67 78 24 58",
    avatar: "/assets/avatar2.jpeg",
    fb: "https://www.facebook.com/constance.agonse/"
  },
]

export const FooterSection = () => {
  return (
    <div className="FooterSection">
      <div className="FooterSection__part">
        <div className="FooterSection__title">
          Contactez-nous sur facebook ou par téléphone
        </div>
        <div className="FooterSection__deuxorga">
          {organisateurs.map((organisateur) => (
            <div className="FooterSection__organisateur">
              <img src={organisateur.avatar} />
              <div className="FooterSection__organisateur__info">
                <div className="FooterSection__organisateur__info__name">{organisateur.name}</div>
                <div className="FooterSection__organisateur__info__num">{organisateur.telephone}</div>
                <a
                  target="_blank"
                  href={organisateur.fb}
                  className="FooterSection__organisateur__info__social"
                >
                  <GrFacebook size="20px" color="#39569c" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="FooterSection__part">
        <div className="FooterSection__title">
          Merci de remplir le questionnaire en nous donnant le plus d'infos possibles pour que nous organisions tout bien.
        </div>
        <Button
          text="Remplir le questionnaire"
          onClick={() => {
            window.open('https://bit.ly/3AsA8Cs');
          }}
          className="TopMenu__item-button"
        />
      </div>
    </div>
  )
}