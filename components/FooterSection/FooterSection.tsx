import React from "react";
import { Button } from "../Button/Button";

export const FooterSection = () => {
    return (
        <div className="FooterSection">
            <div>
                <p>Contactez-nous sur facebook ou par téléphone</p>
                <div className="FooterSection__deuxorga">
                    <div className="FooterSection__organisateur">
                        <img src="/assets/018369f3ff6dd050b8b653a41007cee5.jpeg" />
                        <div className="FooterSection__organisateur--info">
                            <p>Cléo</p>
                            <p>06 33 93 45 12</p>
                        </div>
                    </div>
                    <div className="FooterSection__organisateur">
                        <img src="/assets/018369f3ff6dd050b8b653a41007cee5.jpeg" />
                        <div className="FooterSection__organisateur--info">
                            <p>Constance</p>
                            <p>07 67 78 24 58</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footersection__button">
                <p>
                    Merci de remplir le questionnaire en nous donnant le plus d'infos possibles pour que nous organisions tout bien.
                </p>
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