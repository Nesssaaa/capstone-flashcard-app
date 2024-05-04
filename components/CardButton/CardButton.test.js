import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CardButton from "./CardButton";

describe("CardButton Component", () => {
  test("renders children and triggers onClick", () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <CardButton onClick={mockOnClick}>
        <span>Test Button</span>
      </CardButton>
    );

    const button = getByText("Test Button");

    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
