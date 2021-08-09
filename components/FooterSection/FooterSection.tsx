import React from "react";

export const FooterSection = () => {
    return (
        <div className="FooterSection">
            <div>
                <p>Contactez-nous sur facebook ou par téléphone</p>
                <div className="FooterSection__organisateur">
                    <img></img>
                    <p>Cléo</p>
                    <p>06 33 93 45 12</p>
                </div>
                <div className="FooterSection__organisateur">
                    <img></img>
                    <p>Constance</p>
                    <p>07 67 78 24 58</p>
                </div>

            </div>
            <div className="Button">
                <p>
                Merci de remplir le questionnaire en nous donnant le plus d'infos possibles
                </p>
                
            </div>
        </div>
    )
}