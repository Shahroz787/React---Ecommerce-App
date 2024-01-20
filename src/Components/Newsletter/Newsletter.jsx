import React from "react";
import {
  NewsletterContainer,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from "./NewsletterElements";
import { IoSendSharp } from "react-icons/io5";

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <Title>Newsletter</Title>
      <Description>Get up to date information about your favourite products.</Description>
      <InputContainer>
        <Input placeholder="Drop your email..."/>
        <Button>
          <IoSendSharp />
        </Button>
      </InputContainer>
    </NewsletterContainer>
  );
};

export default Newsletter;
