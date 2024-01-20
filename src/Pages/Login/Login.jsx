import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { CartState } from "../../Components/Context/Context";
import {
  LoginContainer,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
} from "./LoginElements";

const Login = () => {
  const [user, setUser] = useState("");

  const auth = CartState();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate("/cart");
  };

  return (
    <LoginContainer>
      <Wrapper>
        <Title>Login Account</Title>
        <Form>
          <Input
            type="text"
            placeholder="Enter your user name..."
            onChange={(e) => setUser(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Enter your email address..."
            onChange={(e) => setUser(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter your password..."
            onChange={(e) => setUser(e.target.value)}
          />
          <Button onClick={handleLogin}>LOGIN</Button>
          <Link>Do Not You Remember the Password?</Link>
          <Link >Create a New Account</Link>
        </Form>
      </Wrapper>
    </LoginContainer>
  );
};

export default Login;
