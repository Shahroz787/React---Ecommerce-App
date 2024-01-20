import styled from "styled-components";
import { mobile, tab } from "../../Responsive";

export const CategoryItemContainer = styled.section`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;

  ${tab({ marginBottom: "-18rem" })}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
  
  ${tab({ height: "40vh" })}
`;
export const Info = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h2`
  color: #fff;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  color: gray;
  font-weight: 600;
`;
