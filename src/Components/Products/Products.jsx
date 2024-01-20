import React from "react";
import { ProductsContainer } from "./ProductsElements";
import { popularProducts } from "./ProductsData";
import Product from "./Product";

const Products = () => {
  return (
    <ProductsContainer>
      {popularProducts.map((Item) => (
        <Product Item={Item} key={Item.id} />
      ))}
    </ProductsContainer>
  );
};

export default Products;
