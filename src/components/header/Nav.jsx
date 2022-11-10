// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./header.css";
import React, { useState } from "react";
import { BsBorderStyle, BsChevronDown } from "react-icons/bs";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./header.css"


export default function Nav({brandName,cartItems}) {
  const [mobileMenu, setMobileMenu] = useState(false);
  // const [isNavExpanded, setIsNavExpanded] = useState(false);
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

  // return (
  //   <nav className="navigation">

  //     <Link  className="brand-name"to="/">{brandName}</Link>

  //     <button
  //       className="hamburger"
  //       onClick={() => {
  //         setIsNavExpanded(!isNavExpanded);
  //       }}
  //     >
  //       {/* icon from Heroicons.com */}
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         className="h-5 w-5"
  //         viewBox="0 0 20 20"
  //         fill="white"
  //       >
  //         <path
  //           fillRule="evenodd"
  //           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //     </button>
  //     <div
  //       className={
  //         isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
  //       }
  //     >

  //       <ul>
  //         <li><Link to="/checkout"> My Cart :{cartItems}</Link></li>
  //         <li> <a><Link to="/">Home</Link></a>
  //         </li>
  //         <li>
  //           <a><Link to="/about">About</Link></a>
  //         </li>
  //         <li>
  //           <a><Link to="/contact">Contact</Link></a>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // );
}
