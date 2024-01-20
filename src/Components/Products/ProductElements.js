import styled from "styled-components";

export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`;

export const ProductContainer = styled.section`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

export const Image = styled.img`
  height: 75%;
  width: 100%;
  z-index: 2;

  
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`;
export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0544a1;
    color: #fff;
    transform: scale(1.1);
  }
`;
