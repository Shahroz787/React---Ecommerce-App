import styled from "styled-components";
import { mobile } from "../../Responsive";

export const NewsletterContainer = styled.section`
  height: 60vh;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;
export const Title = styled.h1`
  font-size: 70px;
`;
export const Description = styled.div`
  font-size: 24px;
  font-weight: 300;

  ${mobile({textAlign: "center"})}
`;
export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;


`;
export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;


  
  ${mobile({width: "80%"})}
`;
export const Button = styled.button`
  flex: 1;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-color: #0544a1;
  border: none;
  color: #fff;

  svg {
    font-size: 1.5rem;
  }
`;
