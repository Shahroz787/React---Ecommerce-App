import React from "react";
import {
  ProductListContainer,
  FilterContainer,
  Filter,
  Title,
  FilterText,
  Select,
  Option,
} from "./ProductListElements";
import Navbar from "../../Components/Navbar/Header";
import Announcement from "../../Components/Announcement/Announcement";
import Products from "../../Components/Products/Products";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";

const ProductList = () => {
  return (
    <ProductListContainer>
   
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>

          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>

          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>


          <Select>
            
            <Option selected>Latest</Option>
            <Option>Lowest Price</Option>
            <Option>Highest Price</Option>
           
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </ProductListContainer>
  );
};

export default ProductList;
