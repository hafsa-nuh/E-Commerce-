import React from "react";
import ImageSlider from "./ImageSlider";

function NewArrivals() {
  const slides = [
    {
      url: "https://i.postimg.cc/xC6p96VN/galaxy-buds2-key-visual-v2.webp",
      title: "Galaxy Buds",
    },
    { url: "https://i.postimg.cc/Hk02p6QW/hpenvy.png", title: "HP Envy" },
    { url: "https://i.postimg.cc/261984kH/sony-a7iii-kit.jpg", title: "Sony" },
    { url: "https://i.postimg.cc/sDmYqMy1/zplip.png", title: "Z Flip" },
    { url: "https://i.postimg.cc/dQBZtgfx/lgdoubledoor.webp", title: "Fridge" },
  ];

  const containerStyles = {
    width: "80%",
    height: "500px",
    margin: "0 auto",
    paddingBottom: "3rem"
  };
  const image ={
    width: '40px',
    height: '40px',
    marginTop: '5px'
  }
  const h4 ={
    fontWeight: 400
  }
  return (
    <div style={{ background: "#f6f9fc" }}>
      <div style={containerStyles}>
        <div className="heading-left">
          <img
            src="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
            alt=""
            style={image}
          />
          <h2 style={h4}>New Arrivals </h2>
        </div>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default NewArrivals;
