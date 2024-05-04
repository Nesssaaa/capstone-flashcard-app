import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FaButton from "./FaButton";

describe("FActionButton Component", () => {
  test("renders children and triggers onClick", () => {
    const mockOnClick = jest.fn();
    const { getByLabelText } = render(
      <FaButton onClick={mockOnClick}>
        <span>Test FAB</span>
      </FaButton>
    );

    const fabButton = getByLabelText("Das ist ein Floating Action Button");

    expect(fabButton).toBeInTheDocument();

    fireEvent.click(fabButton);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
