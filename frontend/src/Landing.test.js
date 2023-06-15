import { render, fireEvent, screen } from "@testing-library/react";
import Landing from "./Landing";

test("calls onSignOut when logout button is clicked", () => {
  const onSignOut = jest.fn();
  render(<Landing username="testuser" onSignOut={onSignOut} />);
  fireEvent.click(screen.getByText(/Logout/i));
  expect(onSignOut).toHaveBeenCalled();
});

test("displays the correct username", () => {
  render(<Landing username="testuser" />);
  expect(screen.getByText(/Welcome, testuser!/i)).toBeInTheDocument();
});
