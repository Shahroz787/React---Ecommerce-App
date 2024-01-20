import styled from "styled-components";
import { mobile, tab } from "../../Responsive";

export const CartContainer = styled.section``;
export const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 7rem;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const CartTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  ${mobile({ padding: "10px", marginBottom: "1.5rem" })}
`;

export const CartTopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "empty" && "none"};
  background-color: ${(props) =>
    props.type === "empty" ? "#0544A1" : "transparent"};
  color: ${(props) => props.type === "empty" && "white"};
`;

export const CartTopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

export const CartTopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 20px;
`;

export const CartBottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: "column" })}
`;
export const CartInfo = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: "column", gap: "3rem" })}
`;
export const ProductInfo = styled.div`
  display: flex;
  flex: 2;
`;
export const Image = styled.img`
  width: 200px;
`;
export const Info = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductSize = styled.span``;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
export const PriceInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  svg {
    font-size: 1.3rem;
    cursor: pointer;
  }
`;
export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

export const Hr = styled.hr`
  background-color: #0544a1;
  height: 1px;
  border: none;
  margin: 20px 0px;
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

export const CartSummary = styled.div`
  flex: 1;
  border: 0.5px solid #0544a1;
  border-radius: 10px;
  padding: 20px;

  ${mobile({ marginTop: "2.5rem" })}
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;

  ${tab({ fontSize: "1.3rem" })}
`;
export const SummaryItem = styled.div`
  margin: 45px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
export const SummaryItemText = styled.span``;
export const SummaryItemPrice = styled.span``;

export const Select = styled.select`
  width: 3.5rem;
  height: 2.5rem;
  margin-bottom: 1rem;
`;

export const Option = styled.option`
  text-align: center;
  font-size: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0544a1;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
`;

export const SmallButton = styled.button`
  width: 15%;
  padding: 10px;
  background-color: #0544a1;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  margin-top: 2rem;
`;

export const EmptyTitle = styled.h2`
  margin-top: 12rem;
  color: red;
  margin-bottom: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
