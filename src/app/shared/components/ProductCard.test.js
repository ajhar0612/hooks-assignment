import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard";

const props = {
  productId: "10001",
  price: "10.5",
  imageURL: "/assets/images/breakfast.jpg",
  title: "Breakfast",
  description: "Some random description added as placeholder for card",
  onMoreClick: jest.fn()
};

test("should render with correct text", () => {
  const { getByText } = render(<ProductCard {...props} />);
  const titleElement = getByText(props.title);
  const description = getByText(props.description);

  expect(titleElement).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});

test("should call onMoreClick function on 'Learn More' click", () => {
  const { getByText } = render(<ProductCard {...props} />);
  const linkElement = getByText("Learn More");

  fireEvent.click(linkElement);
  expect(props.onMoreClick).toHaveBeenCalled();
});
