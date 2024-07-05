import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

const ExampleComponent = () => <div>Hello, World!</div>;

test("renders the ExampleComponent", () => {
  render(<ExampleComponent />);
  expect(screen.getByText("Hello, World!")).toBeInTheDocument();
});
