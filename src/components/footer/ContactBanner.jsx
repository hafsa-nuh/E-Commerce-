import React from 'react'
import styled from 'styled-components';
import Button from './Button'
import ParagraphText from './ParagraphText'

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner-wrapper {
    background-color: gray;
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner-heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner-heading {
      font-size: 2.8rem;
    }
  }
`;

function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner-wrapper">
          <ParagraphText>
            We love hearing from you!
          </ParagraphText>
          <h3 className="contactBanner-heading">Send Us an Email</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
      </ContactBannerStyles>
  )
}

export default ContactBanner