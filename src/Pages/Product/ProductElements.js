import styled from "styled-components";
import { mobile, tab } from "../../Responsive";

export const ProductContainer = styled.section``;

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ marginBottom: "4rem" })}

  ${mobile({ padding: "10px", flexDirection: "column" })}

  ${tab({padding:"50px 20px 50px 20px"})}
`;
export const ImageContainer = styled.div`
  flex: 1;

  ${tab({ flex: "2" })}
`;
export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  ${mobile({ height: "40vh" })}
  ${tab({ height: "50vh" })}
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 4rem;

  
`;
export const Title = styled.h1`
  font-weight: 200;
`;
export const Desc = styled.p``;
export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: "column", gap: "2rem", marginBottom: "-10px" })}

  ${tab({ width: "100%" })}
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
`;
export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ gap: "2rem", flexDirection: "column" })}

  ${tab({ width: "100%" })}
`;
export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #0544a1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;

  ${mobile({ marginTop: "1rem", marginLeft: "-2rem" })}

  svg {
    font-size: 1.5rem;
  }
`;
export const Button = styled.button`
  padding: 15px;
  border: 2px solid #0544a1;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: 500;

  &:hover {
    color: #fff;
    background-color: #0544a1;
  }
`;
