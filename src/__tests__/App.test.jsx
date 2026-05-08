import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("dark mode toggle changes button text", () => {
  render(<App />);
  const button = screen.getByText("Toggle Dark Mode");
  fireEvent.click(button);
  expect(screen.getByText("Toggle Light Mode")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Toggle Light Mode"));
  expect(screen.getByText("Toggle Dark Mode")).toBeInTheDocument();
});

test("filters products by category", () => {
  render(<App />);
  const select = screen.getByLabelText(/filter by category/i);
  fireEvent.change(select, { target: { value: "Dairy" } });
  expect(screen.getByText("Milk")).toBeInTheDocument();
  expect(screen.getByText("Cheese")).toBeInTheDocument();
  expect(screen.queryByText("Apple")).not.toBeInTheDocument();
});

test("adds item to cart", () => {
  render(<App />);
  const buttons = screen.getAllByText("Add to Cart");
  fireEvent.click(buttons[0]);
  expect(screen.getByText("Milk is in your cart.")).toBeInTheDocument();
});
