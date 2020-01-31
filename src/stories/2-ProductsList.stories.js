import React from 'react';
import ProductsList from './../app/shared/components/ProductsList';

import productData from "./mock-data/product-data";

export default {
    title: 'ProductsList',
    component: ProductsList,
  };

export const listExample = () => <ProductsList productData={productData} />;

