import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import {
  AiTwotoneStar,
  AiOutlineStar,
  AiOutlinePlus,
  AiOutlineHeart,
} from "react-icons/ai";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = () => {
  const [productItems, setProductItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/products")
      .then((r) => r.json())
      .then((data) => setProductItems(data));
  }, []);
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {productItems.map((items , id) => {
          return (
            <div className="box">
              <div className="product mtop" key={id}>
                <div className="img">
                  <span className="discount">{items.name}</span>
                  <img src={items.image_url} alt={items.name} />
                  <div className="product-like">
                    <label>{count}</label> <br />
                    <AiOutlineHeart onClick={increment} />
                  </div>
                </div>
                <div className="product-details">
                  <h3>{items.description}</h3>
                  <div className="rate">
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                    <AiTwotoneStar />
                    <AiOutlineStar />
                  </div>
                  <div className="price">
                    <h4>Ksh {items.price}.00 </h4>
                    <button>
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  )
}

export default FlashCard
