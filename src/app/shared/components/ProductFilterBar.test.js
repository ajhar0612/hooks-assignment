import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ProductFilterBar from "./ProductFilterBar";

const props = {
  onChange: jest.fn(),
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

test("should call on change after title input", () => {
  const mockTitleValue = "trial value";
  const { getByLabelText } = render(<ProductFilterBar {...props} />);
  const titleInput = getByLabelText("search");
  fireEvent.change(titleInput, { target: { value: "trial value" } });

  expect(props.onChange).toHaveBeenCalledWith({
    title: mockTitleValue,
    price: props.menuItems[0].value
  });
});
