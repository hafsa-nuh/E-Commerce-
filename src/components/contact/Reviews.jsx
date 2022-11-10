import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import styled from "styled-components";
import ParagraphText from "../footer/ParagraphText";
import Titles from "./Titles";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import customerReviews from "./customerReviews";

const ReviewSecStyles = styled.div`
padding: 10rem 0;
text-align: center;
.review-wrapper{
    max-width 700px;
    margin: 0 auto;
}
.review-info{
    width: 100%
    heigh: fit-content;
    padding: 3rem;
    background-color: rgb(208, 201, 201);
    border-radius: 12px;
    margin-top: 5rem;
}
.review-desc{
   .paragraph{
    text-align: center;
   } 
}
.review-name{
    margin-top: 4rem;
    font-family: 'Monospace'
    font-size: 2.2rem;
}
.review-title{
    font-size: 1.6rem;
    margin-top: 0.3rem;
}
.arrows{
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        width: 50px;
        pointer-events: none;
    }
    .next, 
    .prev{
        margin: 0 0.5rem;
        width: fit-content;
        background-color: rgb(208, 201, 201);
        padding: .5rem 2rem;
        border-radius: 8px;
        cursor: pointer;
    }
}
//The fade class is added by the react switch transition
.fade-enter{
    opacity: 0;
    transform: scale(.96)
}
.fade-enter-active{
    opacity: 1;
    transform: scale(1)
    transition: 250ms ease-in;
    transition-property: opacity, transform;
}
.fade-exit{
    opacity: 1;
    transform: scale(1)
}
.fade-exit-active{
    opacity: 0;
    transform: scale(.96)
    transition: 250ms ease-in opacity;
    transition-property: opacity, transform;
}
`;

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = customerReviews[activeIndex];

  const handlePrev = () =>{
    if (activeIndex === 0){
        setActiveIndex(customerReviews.length - 1)
    }else{
        setActiveIndex((oldIndex) => oldIndex - 1)
    }
  }

  const handleNext = () =>{
        //check if this is the last slide
        if (activeIndex >= customerReviews.length - 1){
            setActiveIndex(0)
        }else{
            setActiveIndex((oldIndex) => oldIndex + 1)
        }
}

  return (
    <ReviewSecStyles>
      <div>
        <div className="container">
          <Titles
            subtitle="What our client say about us"
            title="Reviews"
          ></Titles>
          <div className="review-wrapper">
            <SwitchTransition>
              <CSSTransition
              key={activeSlide.id}
              timeout = {300}
              classNames="fade"
              >
                <div className="review-info">
                  <div className="review-desc">
                    <ParagraphText>{activeSlide.desc}</ParagraphText>
                  </div>
                  <h2 className="review-name">{activeSlide.name}</h2>
                  <p className="review-title">{activeSlide.location}</p>
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className="arrows">
            <div
              className="prev"
              onClick={handlePrev}
              role="button"
              tabIndex={0}
              onKeyDown={handlePrev}
            >
              <MdArrowBack />
            </div>
            <div
              className="next"
              onClick={handleNext}
              role="button"
              tabIndex={0}
              onKeyDown={handleNext}
            >
              <MdArrowForward />
            </div>
          </div>
        </div>
      </div>
    </ReviewSecStyles>
  );
}
