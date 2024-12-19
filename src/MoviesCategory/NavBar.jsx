import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css"; // Custom CSS file for Netflix-style navbar

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  const handleNavLinkClick = () => {
    // Collapse the navbar after clicking a link
    const navbarToggler = document.querySelector(".navbar-collapse");
    if (navbarToggler) {
      navbarToggler.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        {/* Netflix Logo */}
        <Link to="/" className="navbar-brand">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" className="navbar-logo-img" />
        </Link>

        {/* Toggle Button for Mobile View */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/trending-now" className="nav-link" onClick={handleNavLinkClick}>
                Trending Now
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/top-rated" className="nav-link" onClick={handleNavLinkClick}>
                Top Rated
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/action-movies" className="nav-link" onClick={handleNavLinkClick}>
                Action Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/horror-movies" className="nav-link" onClick={handleNavLinkClick}>
                Horror Movies
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/romance-movies" className="nav-link" onClick={handleNavLinkClick}>
                Romance Movies
              </Link>
            </li> */}
          </ul>

          {/* Search and Profile Avatar */}
          <form className="d-flex align-items-center">
            <input className="form-control me-2 navbar-search" type="search" placeholder="Search" aria-label="Search" />
          </form>

          {/* Hamburger Menu Buttons */}
          <div className="d-block d-md-none mt-2">
            <Link
              to="/signup"
              className="btn btn-danger w-100 mb-2"
              style={{
                padding: "5px 16px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Sign up
            </Link>

            <Link
              to="/signin"
              className="btn btn-danger w-100"
              style={{
                padding: "5px 16px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Sign in
            </Link>
          </div>

          {/* Buttons for Larger Screens */}
          <div className="d-none d-md-flex ">
            <Link
              to="/signup"
              className="btn btn-danger"
              style={{
                padding: "5px 16px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Sign up
            </Link>

            <Link
              to="/signin"
              className="btn btn-danger"
              style={{
                padding: "5px 16px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "bold",
                marginLeft: "10px",
              }}
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
