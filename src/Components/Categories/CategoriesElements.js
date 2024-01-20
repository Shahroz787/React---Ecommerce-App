import styled from "styled-components";
import { mobile } from "../../Responsive";

export const CategoriesContainer = styled.section`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  ${mobile({ padding: "0px", flexDirection: "column" })}
  
  
`;
