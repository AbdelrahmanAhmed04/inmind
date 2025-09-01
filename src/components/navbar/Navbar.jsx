import { useState } from "react";
import { Link } from "react-router-dom";
import lightLogo from "../../assets/logo-light-dot-dark.svg";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo-container">
        <img src={lightLogo} alt="Logo" width="100px" />
      </Link>
      <div className="nav-links">
        <a href="#about">About</a>
        <Link to="/projects">Projects</Link>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <a className="nav-cta" href="#contact">
          <svg
            className="arrow-icon"
            viewBox="0 0 70 22"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              className="arrow-line"
              d="M1 11L68 11"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="arrow-head"
              d="M59 21L69 11L59 1"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Create A Project</p>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
