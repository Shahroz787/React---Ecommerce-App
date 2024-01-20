import React, { useEffect } from "react";
import Announcement from "../../Components/Announcement/Announcement";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Header";
import { AiFillDelete } from "react-icons/ai";

import {
  CartContainer,
  Wrapper,
  Title,
  CartTop,
  CartBottom,
  CartTopButton,
  CartTopTexts,
  CartTopText,
  CartInfo,
  CartSummary,
  Product,
  ProductInfo,
  Image,
  Info,
  ProductName,
  ProductId,
  ProductSize,
  ProductColor,
  PriceInfo,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Select,
  Option,
  Button,
  SmallButton,
  EmptyTitle,
} from "./CartElements";

import { CartState } from "../../Components/Context/Context";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <CartContainer>
      <Announcement />

      {cart.length > 0 ? (
        <>
          <Wrapper>
            <Title>YOUR LUGGAGE</Title>
            <CartTop>
              <CartTopButton>CONTINUE SHOPPING</CartTopButton>
              <CartTopTexts>
                <CartTopText>Shopping Laggage ({cart.length})</CartTopText>
                <CartTopText>Your Wishlist (1)</CartTopText>
              </CartTopTexts>
              <CartTopButton type="empty">CHECKOUT NOW</CartTopButton>
            </CartTop>
            <CartBottom>
              <CartInfo>
                {cart.map((items) => (
                  <>
                    <Hr />
                    <Product>
                      <ProductInfo>
                        <Image src={items.img} />
                        <Info>
                          <ProductName>
                            <b>Product:</b> {items.name}
                          </ProductName>
                          <ProductId>
                            <b>ID:</b> {items.id}
                          </ProductId>
                          <ProductColor color="#0544A1" />
                          <ProductSize>
                            <b>Size:</b> {items.size}
                          </ProductSize>
                        </Info>
                      </ProductInfo>
                      <PriceInfo>
                        <ProductAmountContainer>
                          <Select
                            name="qty"
                            onChange={(e) =>
                              dispatch({
                                type: "CHANGE_CART_QTY",
                                payload: {
                                  id: items.id,
                                  qty: e.target.value,
                                },
                              })
                            }
                          >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                          </Select>
                        </ProductAmountContainer>

                        <ProductPrice>৳ {items.price}</ProductPrice>

                        <SmallButton
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: items,
                            })
                          }
                        >
                          <AiFillDelete fontSize="20px" />
                        </SmallButton>
                      </PriceInfo>
                    </Product>
                    <Hr />
                  </>
                ))}
              </CartInfo>
              <CartSummary>
                <SummaryTitle>ORDER SUMMERY</SummaryTitle>

                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>৳ 1410</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>৳ 110</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>৳ 110</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>৳ {total}</SummaryItemPrice>
                </SummaryItem>

                <Button>CHECKOUT NOW</Button>
              </CartSummary>
            </CartBottom>
          </Wrapper>
        </>
      ) : (
        <EmptyTitle>
          Your cart is empty! <Link to="/product_list">Go for Shopping</Link>
        </EmptyTitle>
      )}

      <Footer />
    </CartContainer>
  );
};

export default Cart;
