import React, { useState } from "react";
import Slider from "react-slick";
import {
  AiTwotoneStar,
  AiOutlineStar,
  AiOutlinePlus,
  AiFillHeart,
} from "react-icons/ai";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, NavLink } from "react-router-dom";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <FaLongArrowAltRight className="next-btn" />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <FaLongArrowAltLeft className="next-btn" />
      </button>
    </div>
  )
}

const FlashCard = ({ addToCart, productItems }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {Array.isArray(productItems)
          ? productItems.map((items, id) => {
              return (
                <div className="box">
                  <div className="product mtop" key={id}>
                    <div className="img">
                      <img src={items.image_url} alt={items.name} />
                      <NavLink to={`product/${items.id}`} >
                        <button className="btn">Buy Now</button>
                      </NavLink>
                    </div>
                    <div className="product-details">
                      <div className="product-like">
                        <label>{count}</label> <br />
                        <AiFillHeart className="heart" onClick={increment} />
                      </div>
                      <br />
                      <h3>{items.name}</h3>
                      {/* <br /> */}
                      <div className="paragra">
                        <p>{items.description}</p>
                      </div>
                      <div className="rate">
                        <AiTwotoneStar className="icons" />
                        <AiTwotoneStar className="icons" />
                        <AiTwotoneStar className="icons" />
                        <AiTwotoneStar className="icons" />
                        <AiOutlineStar className="icon" />
                      </div>
                      <div className="price">
                        <h4>Ksh {items.price}.00 </h4>
                        <button onClick={() => addToCart(items)}>
                          <Link to="login">
                            <AiOutlinePlus />
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </Slider>
    </>
  );
};

export default FlashCard;
