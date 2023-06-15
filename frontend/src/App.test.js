import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("renders the register view initially", () => {
  render(<App />);
  expect(screen.getByText(/Please Register/i)).toBeInTheDocument();
});

test("switches between register and login views", () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Switch to Sign In/i));
  expect(screen.getByText(/Please Sign In/i)).toBeInTheDocument();
});
