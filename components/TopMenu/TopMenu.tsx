import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";

export const TopMenu = () => {
  const ref = useRef(null);
  const [isContentMenu, setIsContentMenu] = useState(false);
  const onScroll = (e) => {
    setIsContentMenu(
      e.target.scrollingElement.scrollTop >
        e.target.scrollingElement.clientHeight
    );
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll, false);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cx("TopMenu", {
        "TopMenu--content": isContentMenu,
      })}
      ref={ref}
    >
      <div className="TopMenu__inner">
        <div className="TopMenu__item">COMMENT S’Y RENDRE?</div>
        <div className="TopMenu__item">COMMENT ÇA MARCHE?</div>
        <div className="TopMenu__item">LES AMIS DE LA JUNGLE</div>
        <div className="TopMenu__item">CONTACT</div>
      </div>
    </div>
  );
};
