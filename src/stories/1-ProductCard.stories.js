import React from "react";
import ProductCard from "./../app/shared/components/ProductCard";

import SizeContainer from "./container/SizeContainer";

const props = {
  productId: "10001",
  price: "10.5",
  imageURL: "/assets/images/breakfast.jpg",
  title: "Breakfast",
  description: "Some random description added as placeholder for card",
  onMoreClick: () => {}
};

export const product = () => (
  <SizeContainer type="sm">
    <ProductCard {...props} />
  </SizeContainer>
);

export default {
  title: "ProductCard",
  component: ProductCard
};
