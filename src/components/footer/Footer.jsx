import React from "react";
import "./Footer.css";
import { Container, Left, Desc, SocialContainer, SocialIcon, Center , Title , Right, ContactItem ,TextRow ,TestP } from "./FooterStyled";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsTelephone,
} from "react-icons/bs";
import {BiMailSend} from "react-icons/bi"

function Footer() {
  return (
    <>
      <Container>
        <Left>
          <div className="logo">
            <h1>
              Tech <span> Shop</span>
            </h1>
          </div>
          <Desc>
            <li>+254 711 234567</li>
            <li>Nairobi, Kenya</li>
            <li>Moi Avenue</li>
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <BsFacebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <BsInstagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <BsTwitter />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Our Braches</Title>
            <ContactItem>Mombasa</ContactItem>
            <ContactItem>Kisumu</ContactItem>
            <ContactItem>Nairobi</ContactItem>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>Dixie Path , South Tobinchester 98336</ContactItem>
          <ContactItem>
            <BsTelephone style={{ marginRight: "10px" }} /> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <BiMailSend style={{ marginRight: "10px" }} /> contact@lama.dev
          </ContactItem>
        </Right>
      </Container>
      <TextRow>
        <TestP>
          &copy;{new Date().getFullYear()} Icon Tech | All rights reserved |
          Terms Of Service | Privacy
        </TestP>
      </TextRow>
    </>
  );
}
export default Footer;
