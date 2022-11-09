import React from "react";
import styled from "styled-components";

export default function ContactImage() {
  const ImageStyle = styled.div`
    img{
        height: 600px;
        width: 800px; 
    } 
    .contact-image{
        text-align: right;
        position: relative
        flex: 2;
        
    }
  `;
  return (
    <ImageStyle>
      <div className="contact-image">
        <img
          src="https://i.postimg.cc/KYpN0RXj/contactimage.webp"
          alt="Contact Us"
        />
      </div>
    </ImageStyle>
  );
}
