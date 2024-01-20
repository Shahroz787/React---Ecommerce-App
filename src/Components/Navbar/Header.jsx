import React, { useEffect } from "react";
import { GrSearch } from "react-icons/gr";
import { BsCart3 } from "react-icons/bs";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";

import {
  NavbarContainer,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from "./NavbarElements";
import { CartState } from "../Context/Context";

const Header = () => {
  const {
    state: { cart },
  } = CartState();

  const auth = CartState();

  return (
    <NavbarContainer>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
            <GrSearch />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/" className="link">
              Shahroz Shop
            </Link>
          </Logo>
        </Center>
        <Right>
          <Link to="register" className="link">
            REGISTER
          </Link>
          <Link to="login" className="link">
            LOGIN
          </Link>
          <MenuItem>
            <Badge
              badgeContent={cart.length}
              color="primary"
              style={{ color: "#0544A1" }}
            >
              {!auth.user ? (
                <Link to="/login" className="link">
                  {" "}
                  <BsCart3 />
                </Link>
              ) : (
                <Link to="/cart" className="link">
                  {" "}
                  <BsCart3 />
                </Link>
              )}
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </NavbarContainer>
  );
};

export default Header;
