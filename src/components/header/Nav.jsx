import React, { useState } from "react";
import { BsBorderStyle, BsChevronDown } from "react-icons/bs";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./header.css"


export default function Nav({brandName,cartItems}) {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="categories d_flex">
            <span>
              <BsBorderStyle className="icons" />
            </span>
            <h4>
              Categories <BsChevronDown className="icons" />
            </h4>
          </div>
          <div className="navlink">
            <ul
              className={
                mobileMenu ? "nav-links-mobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <button
              className="toggle"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? (
                <FaTimes className="icons close home-btn" />
              ) : (
                <FaBars className="icons open" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );

}
