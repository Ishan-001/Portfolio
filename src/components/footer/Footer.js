import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          "Sometimes things don't go your way, but you get up and keep going"
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          - CM Punk
        </p>
      </div>
    </Fade>
  );
}
