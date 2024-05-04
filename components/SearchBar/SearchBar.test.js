import React from "react";
import { render } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar Component", () => {
  test("renders input field and triggers handleSearch", () => {
    const mockHandleSearch = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar handleSearch={mockHandleSearch} />
    );

    const inputField = getByPlaceholderText("Suche...");

    expect(inputField).toBeInTheDocument();

    const searchQuery = "test query";
    mockHandleSearch(searchQuery);

    expect(mockHandleSearch).toHaveBeenCalledTimes(1);
    expect(mockHandleSearch).toHaveBeenCalledWith(searchQuery);
  });
});
