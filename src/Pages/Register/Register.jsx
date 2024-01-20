import React from "react";
import {
  RegisterContainer,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
} from "./RegisterElements";

const Register = () => {
  return (
    <RegisterContainer>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="Enter your first name..." />
          <Input placeholder="Enter your last name..." />
          <Input placeholder="Enter your user name..." />
          <Input placeholder="Enter your email address..." />
          <Input placeholder="Enter your password..." />
          <Input placeholder="Ensure your password..." />
          <Agreement>
            By using this Demonstration Product, You are agreeing to be bound by
            the <b>TERMS & CONDITION</b> of this agreement.
          </Agreement>
          <Button>CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </RegisterContainer>
  );
};

export default Register;
