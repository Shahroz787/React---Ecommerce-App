import React from "react";
import {
  CategoryItemContainer,
  Image,
  Info,
  Title,
  Button,
} from "./CategoryItemElements";
import { Link } from "react-router-dom";

const CategoryItem = ({ Item }) => {
  return (
    <CategoryItemContainer>
      <Image src={Item.img} />
      <Info>
        <Title>{Item.title}</Title>
        <Button>
          <Link to="/product" className="link">
            SHOP it NOW
          </Link>
        </Button>
      </Info>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
