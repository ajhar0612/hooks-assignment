import React from "react";
import ProductFilterBar from "./../app/shared/components/ProductFilterBar";

import SizeContainer from "./container/SizeContainer";

const props = {
  onChange: () => {},
  menuItems: [
    {
      value: 0,
      label: "Item0"
    },
    {
      value: 1,
      label: "Item1"
    }
  ]
};

export const example1 = () => (
  <SizeContainer type="lg">
    <ProductFilterBar {...props} />
  </SizeContainer>
);

export default {
  title: "ProductFilterBar",
  component: ProductFilterBar
};
