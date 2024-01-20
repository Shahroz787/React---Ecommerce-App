import styled from "styled-components";
import { mobile } from "../../Responsive";

export const NavbarContainer = styled.nav`
  height: 60px;

  ${mobile({ backgroundHeight: "50px" })}
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px", justifyContent: "center" })}
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

export const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

export const SearchContainer = styled.div`
  border: 1px solid #403226;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-left: 25px;
  padding: 5px;

  ${mobile({ marginLeft: "18px" })}
  svg {
    font-size: 1rem;
  }
`;

export const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "20px" })}
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const Center = styled.div`
  flex: 1;
  text-align: center;

  ${mobile({ marginLeft: "1rem" })}
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 1.7rem;
  ${mobile({ justifyContent: "center", gap: "1rem", flex: "3" })}
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ fontSize: "12px" })}

  svg {
    font-size: 1.5rem;
  }
`;
