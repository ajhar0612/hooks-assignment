import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ProductsPage from "./ProductsPage";
import { BrowserRouter as Router } from "react-router-dom";

import { getRandomNumber } from "./../test/utils/random-number";

const mockFn = jest.fn();

const productIdList = ['10001', '10002'];

jest.mock("./../data/product-data", () => [
  {
    productId: "10001",
    price: 10.5,
    imageURL: "/assets/images/breakfast.jpg",
    title: "Breakfast",
    description:
      "Some random description added as placeholder for card, Some random description added as placeholder for card, Some random description added as placeholder for card , Some random description added as placeholder for card , Some random description added as placeholder for card"
  },
  {
    productId: "10002",
    price: 5.86,
    imageURL: "/assets/images/burgers.jpg",
    title: "Tasty burger",
    description: "Some random description added as placeholder for card"
  }
]);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useHistory: () => ({
    push: mockFn
  })
}));

test("should redirect to correct product page", () => {
  const { getAllByText } = render(
    <Router>
      <ProductsPage />
    </Router>
  );
  const randomNumber = getRandomNumber(0, 1);
  const titleElement = getAllByText("Learn More");

  expect(titleElement[randomNumber]).toBeInTheDocument();
  fireEvent.click(titleElement[randomNumber]);
  expect(mockFn).toHaveBeenCalledWith(`/product/${productIdList[randomNumber]}`);
});

test("should filter properly based on text entered", () => {
    const { getByText, getByLabelText } = render(
      <Router>
        <ProductsPage />
      </Router>
    );
    const titleInput = getByLabelText("search");
    fireEvent.change(titleInput, { target: { value: "Tasty" } });
    const titleElement = getByText("Tasty burger");
    const learnMoreElement = getByText("Learn More");
  
    expect(titleElement).toBeInTheDocument();
    expect(learnMoreElement).toBeInTheDocument();
});
