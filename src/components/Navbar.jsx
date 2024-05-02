import React, { useEffect } from "react";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import { useState } from "react";
function Navbar() {
  //isloggedin
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Check if user is already logged in
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  //logout
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
        // Redirect to home page or do any necessary clean up
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };
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
            <Link to={"/"} className="logo m-0">
              Tour <span className="text-primary">.</span>
            </Link>

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
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact Us</Link>
              </li>
              <li>
                {isLoggedIn ? (
                  <>
                    <Link to="/" onClick={handleLogout}>
                      Logout
                    </Link>
                  </>
                ) : (
                  <Link to="/signin">Sign in</Link>
                )}
              </li>
              <li>
                <Link to={"/profile"}>Profile</Link>
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
