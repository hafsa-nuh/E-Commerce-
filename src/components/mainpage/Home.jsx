import React from "react";
 import ContactBanner from "../footer/ContactBanner";
import Categories from "./Category";
import "./Home.css";
import SliderHome from "./Slider";
// import ShoppingCart from "../shoppingcart/ShoppingCart";
import NewArrivals from "../newarrivals/NewArrivals";

const Home = ({ products, cartItems, onAdd, onRemove }) => {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <Categories />
          <SliderHome />
        </div>
      </section>
      <section>
        <NewArrivals />
      </section>
      <section className="footer-section">
        <ContactBanner />
      </section>
    </>
  );
};

export default Home;
