import styled from "styled-components";
import { mobile } from "../../Responsive";

export const ProductListContainer = styled.section``;

export const Title = styled.h1`
  margin: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  margin: 20px;



  
  ${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})}
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;


  
  ${mobile({marginRight: "0px"})}
`;

export const Select = styled.select`
margin-right: 20px;
padding: 10px;


${mobile({margin: "10px 0px"})}
`;
export const Option = styled.option``;
