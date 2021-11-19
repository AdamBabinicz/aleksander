import React, { useState, useEffect } from "react";
import logo from "../images/3.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
      <div className="header">
        <div className="navbar">
          <a href="#start" className="logo">
            <img src={logo} alt="..." />
          </a>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={30} style={{ color: "#fff" }} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="#start" onClick={closeMenu}>
                Start
              </a>
            </li>
            <li className="nav-item">
              <a href="#strateg" onClick={closeMenu}>
                Strateg
              </a>
            </li>
            <li className="nav-item">
              <a href="#podboje" onClick={closeMenu}>
                Podboje
              </a>
            </li>
            <li className="nav-item">
              <a href="#dziedzictwo" onClick={closeMenu}>
                Dziedzictwo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
