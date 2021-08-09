import React from "react";

const djs = [
  {
    name: 'Lou Ravi',
    scLink: undefined
  }, {
    name: 'Walid',
    scLink: undefined
  },
  {
    name: 'Paul-Sinh',
    scLink: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/289925252&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  },
  {
    name: 'Human Connections',
    scLink: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/889885666&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  },
]

export const LineUpSection = () => {
  return (
    <div className="LineUpSection">
      <div className="LineUpSection__content">
        <div className="LineUpSection__title">
          Lineup
        </div>
        <div className="LineUpSection__lineup">
          {djs.map((dj) => (
            <div className="LineUpSection__lineup__dj">
              <div className="LineUpSection__lineup__name">
                {dj.name}
              </div>
              {dj.scLink && (
                <div className="LineUpSection__lineup__sc">
                  <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={dj.scLink}></iframe>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* <div className="LineUpSection__background">
        <div className="LineUpSection__background__img" />
      </div> */}
      </div>
    </div>)
}