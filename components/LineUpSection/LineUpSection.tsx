import React, { useContext } from "react";
import { ResponsiveContext } from "../../pages";
import { FaFacebookF, FaSoundcloud } from "react-icons/fa";
import { Button } from "../Button/Button";

const djs = [
  {
    name: "Véro",
    scLink: undefined,
    fb: "https://www.facebook.com/Erwan.lfd",
  },
  {
    name: "Lou Ravi",
    scLink: undefined,
    fb: "https://www.facebook.com/clvs.rvn",
  },
  {
    name: "Wasko",
    scLink: "https://soundcloud.app.goo.gl/EN5ei",
    fb: "https://www.facebook.com/skouri",
  },
  {
    name: "Paul-Sinh",
    scLink: "https://soundcloud.app.goo.gl/8tMtR5aev1AN73gR6",
    fb: "https://www.facebook.com/BadBalance",
  },
  {
    name: "Human Connections",
    scLink: "https://soundcloud.com/sergeyhumanconnections",
    fb: "https://www.facebook.com/sergeychuvayev/",
  },
];

export const LineUpSection = () => {
  const documentWidth = useContext(ResponsiveContext);

  return (
    <div className="LineUpSection">
      <div className="LineUpSection__content">
        <img className="LineUpSection__content__cleo-wants" src="/assets/cleowants.png" alt="" />
        <div className="LineUpSection__title">Lineup</div>
        <div className="LineUpSection__lineup">
          {djs.map((dj) => (
            <div className="LineUpSection__lineup__dj">
              <div className="LineUpSection__lineup__dj__name">
                {dj.name}
              </div>
              <div className="LineUpSection__lineup__dj__style"></div>
              <div className="LineUpSection__lineup__dj__icons">
                {dj.scLink && (
                  <button
                    onClick={() => {
                      window.open(dj.scLink);
                    }}
                    className="LineUpSection__lineup__dj__icons__button"
                  >
                    <FaSoundcloud color="white" />
                  </button>
                )}
                {dj.fb && (
                  <button
                    onClick={() => {
                      window.open(dj.fb);
                    }}
                    className="LineUpSection__lineup__dj__icons__button"
                  >
                    <FaFacebookF color="white" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="LineUpSection__playlist">
          <iframe src="https://open.spotify.com/embed/playlist/4erjWaITltgNJdfRWBAeoW" width="100%" height="380" frameBorder="0"  allow="encrypted-media"></iframe>
        </div>
      </div>
    </div>
  );
};
