import React, { useContext } from "react";
import { ResponsiveContext } from "../../pages";
import { FaFacebookF } from "react-icons/fa";
import { Button } from "../Button/Button";

const djs = [
  {
    name: "Lou Ravi",
    scLink: undefined,
    fb: "https://www.facebook.com/clvs.rvn",
    style: "tba"
  },
  {
    name: "Walid",
    scLink: undefined,
    fb: "https://www.facebook.com/skouri",
    style: "tba"
  },
  {
    name: "Paul-Sinh",
    scLink:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/289925252&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    scLinkMobile:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/289925252&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    fb: "https://www.facebook.com/BadBalance",
    style: "tba"
  },
  {
    name: "Human Connections",
    scLink:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/889885666&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    scLinkMobile:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/889885666&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    fb: "https://www.facebook.com/sergeychuvayev/",
    style: "tba"
  },
];

export const LineUpSection = () => {
  const documentWidth = useContext(ResponsiveContext);

  return (
    <div className="LineUpSection">
      <div className="LineUpSection__content">
        <div className="LineUpSection__title">Lineup</div>
        <div className="LineUpSection__lineup">
          {djs.map((dj) => (
            <div className="LineUpSection__lineup__dj">
              <div className="LineUpSection__lineup__name">
                <div>{dj.name}</div>
                <FaFacebookF onClick={() => {
                  window.open(dj.fb);
                }} />
                {/* <Button
                  className="LineUpSection__lineup__name__social"
                  text={}
                  onClick={() => {

                  }}
                /> */}
              </div>
              {dj.scLink && (
                <div className="LineUpSection__lineup__sc">
                  {documentWidth <= 1024 ? (
                    <iframe
                      width="100%"
                      height="166"
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      src={dj.scLinkMobile}
                    ></iframe>
                  ) : (
                    <iframe
                      width="100%"
                      height="166"
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      src={dj.scLink}
                    ></iframe>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
