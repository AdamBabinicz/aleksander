import React, { useState, useEffect } from "react";
import logo from "../images/3.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="header" scrollNav={scrollNav}>
        <div className="navbar">
          <a href="#start" className="logo" onClick={toggleHome}>
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
            <li className="nav-item" onClick={closeMenu}>
              <Link
                to="/"
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Start
              </Link>
            </li>
            <li className="nav-item" onClick={closeMenu}>
              <a
                href="#strateg"
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
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
