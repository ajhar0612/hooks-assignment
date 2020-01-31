import React from "react";
import { useHistory } from "react-router-dom";

import ProductFilterBar from "./../shared/components/ProductFilterBar";
import ProductsList from "./../shared/components/ProductsList";

import productData from "./../data/product-data";
import priceFilterConstants from "./../constants/price-filter.constants";

const menuItems = [
  {
    value: priceFilterConstants.PRICE_SORT_DEFAULT,
    label: "Default"
  },
  {
    value: priceFilterConstants.PRICE_SORT_ASC,
    label: "Asc"
  },
  {
    value: priceFilterConstants.PRICE_SORT_DSC,
    label: "Dsc"
  }
];

const sortPriceDEF = (p1, p2) => 0;
const sortPriceASC = (p1, p2) => (p1.price > p2.price ? 1 : -1);
const sortPriceDSC = (p1, p2) => (p1.price < p2.price ? 1 : -1);

const priceSort = {
  [priceFilterConstants.PRICE_SORT_DEFAULT]: sortPriceDEF,
  [priceFilterConstants.PRICE_SORT_ASC]: sortPriceASC,
  [priceFilterConstants.PRICE_SORT_DSC]: sortPriceDSC
};

export default function ProductsPage() {
  const history = useHistory();

  const [filterData, setFilteredData] = React.useState([...productData]);

  const handleFilterChange = ({ title, price }) =>
    setFilteredData(
      [...productData]
        .filter(i => i.title.includes(title))
        .sort(priceSort[price])
    );

  const handleMoreClick = productId => history.push(`/product/${productId}`);

  return (
    <>
      <ProductFilterBar onChange={handleFilterChange} menuItems={menuItems} />
      <ProductsList productData={filterData} onMoreClick={handleMoreClick} />
    </>
  );
}
