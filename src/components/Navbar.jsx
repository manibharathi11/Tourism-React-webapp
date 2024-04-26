import React from "react";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <nav className="site-nav">
        <div className="container">
          <div className="site-navigation">
            <a href="index.html" className="logo m-0">
              Tour <span className="text-primary">.</span>
            </a>

            <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li className="has-children">
                <a href="#">Dropdown</a>
                <ul className="dropdown">
                  <li>
                    <Link to={"/element"}>Elements</Link>
                  </li>
                  <li>
                    <a href="#">Menu One</a>
                  </li>
                  <li className="has-children">
                    <a href="#">Menu Two</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Sub Menu One</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Two</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Three</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Menu Three</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/service"}>Services</Link>
              </li>
              <li className="active">
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact Us</Link>
              </li>
            </ul>

            <a
              href="#"
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
