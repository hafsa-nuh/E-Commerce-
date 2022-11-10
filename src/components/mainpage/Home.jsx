import React from "react";
 import ContactBanner from "../footer/ContactBanner";
import Categories from "./Category";
import "./Home.css";
import SliderHome from "./Slider";
// import ShoppingCart from "../shoppingcart/ShoppingCart";
import NewArrivals from "../newarrivals/NewArrivals";
import HotDeals from "../deals/HotDeals";
import Discount from "../discount/Discount";
import Annocument from "../announcement/Announce";
const Home = ({ products, cartItems, onAdd, onRemove }) => {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <Categories />
          <SliderHome />
        </div>
      </section>
      <HotDeals />
      <NewArrivals />
      <Discount/>
      <Annocument />
      <ContactBanner />
      {/* <section>
      </section>
      <section className="footer-section">
      </section> */}
    </>
  );
};

export default Home;
