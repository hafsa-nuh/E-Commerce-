import React from 'react'
import styled from "styled-components";
import { discount } from "../../data";
import DiscountItem  from './DiscountItem';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Discount = () => {
  return (
    <>
      <div className="flash">
        <div className="heading-left row  f_flex discount">
          <img src="https://img.icons8.com/windows/32/fa314a/gift.png" />
          <h2>Big Discounts</h2>
        </div>
        <Container>
          {discount.map((item) => (
            <DiscountItem item={item} key={item.id} />
          ))}
        </Container>
      </div>
    </>
  );
}

export default Discount

