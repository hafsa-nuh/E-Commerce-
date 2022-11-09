import React from "react";
import Footer from "../footer/Footer";
// import ContactBanner from "../footer/ContactBanner";
import Categories from "./Category";
import "./Home.css";
import SliderHome from "./Slider";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <Categories />
          <SliderHome />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Home;
