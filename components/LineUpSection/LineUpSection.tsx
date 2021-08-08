import React from "react";

export const LineUpSection = () => {
  return (
    <div className="LineUpSection">
      <div className="LineUpSection__lineup">
        <div className="LineUpSection__lineup__dj">
          <div className="LineUpSection__lineup__name">
            DJ Poopidong
          </div>
          <div className="LineUpSection__lineup__sc">
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1096968979&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
        </div>
      </div>
      <div className="LineUpSection__background">
        <div className="LineUpSection__background__img" />
      </div>
    </div>
  )
}