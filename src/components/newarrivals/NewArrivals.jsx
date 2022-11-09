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
  return (
    <div>
      <div style={containerStyles}>
      <h1>New Arrivals</h1>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default NewArrivals;
