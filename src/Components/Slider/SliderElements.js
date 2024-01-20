import styled from "styled-components";
import {mobile, tab} from "../../Responsive"

export const SliderContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  ${mobile({ display: "none" })}
  ${tab({ display: "none" })}
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #0544a1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.3rem;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  margin: auto;
  z-index: 2;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
export const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
export const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 70px;
`;
export const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid gray;
`;

export const Image = styled.img`
  width: 100%;
  height: 80%;
`;
