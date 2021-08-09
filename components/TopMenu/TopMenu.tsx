import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
import { Button } from "../Button/Button";

export const TopMenu = () => {
  const ref = useRef(null);
  const [isContentMenu, setIsContentMenu] = useState(false);
  const onScroll = (e) => {
    setIsContentMenu(
      e.target.scrollingElement.scrollTop >
      e.target.scrollingElement.clientHeight - 20
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
        <a href="#content" className="TopMenu__item">COMMENT S’Y RENDRE?</a>
        <a href="#explanation" className="TopMenu__item">COMMENT ÇA MARCHE?</a>
        <a href="#costumes" className="TopMenu__item">LES AMIS DE LA JUNGLE</a>
        <a href="#footer" className="TopMenu__item">CONTACT</a>
        <Button
          text="Remplir le questionnaire"
          onClick={() => {
            window.open('https://bit.ly/3AsA8Cs');
          }}
          className="TopMenu__item-button"
        />
      </div>
    </div>
  );
};
