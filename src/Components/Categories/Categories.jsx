import React from "react";
import { CategoriesContainer } from "./CategoriesElements";
import { categories } from "./CategoriesData";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <CategoriesContainer>
      {categories.map((Item) => (
        <CategoryItem Item={Item} key={Item.id} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
