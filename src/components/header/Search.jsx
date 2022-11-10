import React, { useContext } from "react";
import { FaSearch, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../../services/UserContext";

const Search = () => {
  const {user} =useContext(UserContext)
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo">
            <h1>
              Tech <span> Shop</span>
            </h1>
          </div>
          <div className="search-box f_flex">
            <FaSearch className="icons" />
            <input type="text" placeholder="search and hit enter..." />
            <span> All Category </span>
          </div>
          <div className="icon f_flex width">
            <div>
            <Link to="/login"><FaUserAlt className="icons icon-circle" /></Link>
            </div>
            <div className="cart">
              <Link to="cart">
                <FaShoppingCart className="icons icon-circle" />
                <span>0</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
