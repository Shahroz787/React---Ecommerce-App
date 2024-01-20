import React from "react";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { MdSmartphone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

import {
  Center,
  Desc,
  FooterContainer,
  Left,
  Logo,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
  ListItem,
  List,
  ContactItem,
  Payment
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <Left>
        <Logo>Shahroz Shop</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quam
          deserunt nihil quos beatae id esse, incidunt quae dolor placeat.
        </Desc>
        <SocialContainer>
          <SocialIcon bg="3b5998">
            <ImFacebook />
          </SocialIcon>

          <SocialIcon bg="1da1f2">
            <ImTwitter />
          </SocialIcon>

          <SocialIcon bg="FF0000">
            <ImYoutube />
          </SocialIcon>

          <SocialIcon bg="C32AA3">
            <AiFillInstagram />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Important Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Fashion</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Wish list</ListItem>
          <ListItem>Delivery Policy</ListItem>
          <ListItem>Terms & Condition</ListItem>
          <ListItem>Setting & Privacy</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <GoLocation /> 273-usmania colony jail road,karachi
        </ContactItem>
        <ContactItem>
          <MdSmartphone />
          +923143317952
        </ContactItem>
        <ContactItem>
          <AiOutlineMail />
          shahrozahmed787@gmail.com
        </ContactItem>

        <Payment src="https://www.rhodesgraduation.com/wp-content/uploads/cards.png" />
      </Right>
    </FooterContainer>
  );
};

export default Footer;
