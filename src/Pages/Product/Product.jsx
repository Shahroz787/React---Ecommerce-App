import React from "react";
import Announcement from "../../Components/Announcement/Announcement";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Header";
import Newsletter from "../../Components/Newsletter/Newsletter";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { GrAddCircle } from "react-icons/gr";
import {
  ProductContainer,
  Wrapper,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  Amount,
  AmountContainer,
  Button,
} from "./ProductElements";

const Product = () => {
  return (
    <ProductContainer>
      <Announcement />

      <Wrapper>
        <ImageContainer>
          <Image src="https://5.imimg.com/data5/TC/MK/SU/SELLER-19107171/armani-jeans-for-men-500x500.jpg" />
        </ImageContainer>

        <InfoContainer>
          <Title>Armaani Jeans</Title>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ex
            nulla molestiae consectetur vitae animi, maiores expedita delectus
            quod beatae impedit saepe assumenda maxime, et eveniet eius a
            recusandae itaque culpa architecto sequi? Voluptatum, mollitia
            doloremque aliquid adipisci minima accusamus officiis enim id,
            voluptates, quisquam delectus voluptatem dolores. Aspernatur, rerum?
          </Desc>
          <Price>৳ 687</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="blue" />
              <FilterColor color="green" />
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <IoMdRemoveCircleOutline />
              <Amount>1</Amount>
              <GrAddCircle />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </ProductContainer>
  );
};

export default Product;
