import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <a href="#start">Start</a>
          </li>
          <li className="nav-item">
            <a href="#strateg">Strateg</a>
          </li>
          <li className="nav-item">
            <a href="#podboje">Podboje</a>
          </li>
          <li className="nav-item">
            <a href="#dziedzictwo">Dziedzictwo</a>
          </li>
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>
            2021 - {new Date().getFullYear()}.<br />
            <br /> Na podstawie "pl.wikipedia.org"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
