import React from "react";
import ProductDetailsCard from "./../app/shared/components/ProductDetailsCard";

import SizeContainer from "./container/SizeContainer";

const props = {
  productId: "10001",
  price: "10.5",
  imageURL: "/assets/images/breakfast.jpg",
  title: "Breakfast",
  description: "Some random description added as placeholder for card"
};

export const example1 = () => (
  <SizeContainer type="lg">
    <ProductDetailsCard {...props} />
  </SizeContainer>
);

export default {
  title: "ProductDetailsCard",
  component: ProductDetailsCard
};
