import React from "react";
import FlashCard from "./FlashCard";
import { ImFire } from "react-icons/im";
import "./style.css";


const HotDeals = ({ addToCart, productItems }) => {
  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading f_flex">
            <i>
              <ImFire />
            </i>
            <h1>Hot Deals</h1>
          </div>
          <FlashCard addToCart={addToCart} productItems={productItems} />
        </div>
      </section>
    </>
  );
};

export default HotDeals;
