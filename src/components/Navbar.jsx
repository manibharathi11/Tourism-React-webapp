import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons CSS is loaded
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure Bootstrap JavaScript is loaded

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return unsubscribe;
  }, []);

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand font-weight-bold">
            Tour <span className="text-primary ">.</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list text-white"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i
                    className="bi bi-person-fill"
                    style={{ color: "white" }}
                  ></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {isLoggedIn && (
                    <>
                      <li>
                        <Link to="/admin" className="dropdown-item">
                          Admin
                        </Link>
                      </li>
                      <li>
                        <Link to="/seo" className="dropdown-item">
                          SEO
                        </Link>
                      </li>
                    </>
                  )}
                  <li>
                    <Link to="/profile" className="dropdown-item">
                      Profile
                    </Link>
                  </li>
                  <li>
                    {isLoggedIn ? (
                      <Link
                        to="/"
                        onClick={handleLogout}
                        className="dropdown-item"
                      >
                        Logout
                      </Link>
                    ) : (
                      <Link to="/signin" className="dropdown-item">
                        Sign in
                      </Link>
                    )}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
