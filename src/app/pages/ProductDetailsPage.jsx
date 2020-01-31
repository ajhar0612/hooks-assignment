import React from "react";

import { useParams } from "react-router-dom";

import ProductDetailsCard from "./../shared/components/ProductDetailsCard";

import productData from "./../data/product-data";

export default function ProductDetailPage() {
  let { productId } = useParams();

  const product = productData.find(product => product.productId === productId);

  return <ProductDetailsCard {...product} />;
}
