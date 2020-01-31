import React from "react";
import { render } from "@testing-library/react";
import ProductDetailsPage from "./ProductDetailsPage";
import { BrowserRouter as Router } from "react-router-dom";

const props = {
  productId: "10001",
  price: "10.5",
  imageURL: "/assets/images/breakfast.jpg",
  title: "Breakfast",
  description: "Some random description added as placeholder for card",
  onMoreClick: () => {}
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    productId: "10001"
  })
}));

jest.mock("./../data/product-data", () => [
  {
    productId: "10001",
    price: "10.5",
    imageURL: "/assets/images/breakfast.jpg",
    title: "Breakfast",
    description: "Some random description added as placeholder for card"
  }
]);

test("should render with correct text", () => {
  const { getByText } = render(
    <Router>
      <ProductDetailsPage />
    </Router>
  );
  const titleElement = getByText(props.title);
  const description = getByText(props.description);

  expect(titleElement).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
