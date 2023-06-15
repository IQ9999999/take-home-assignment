import { render, fireEvent, screen } from "@testing-library/react";
import Login from "./Login";

test("submitting the form calls onSignIn with username and password", () => {
  const onSignIn = jest.fn();
  render(<Login onSignIn={onSignIn} />);
  fireEvent.change(screen.getByLabelText(/Username:/i), { target: { value: "testuser" } });
  fireEvent.change(screen.getByLabelText(/Password:/i), { target: { value: "testpass" } });
  fireEvent.click(screen.getByText(/Login/i));

  expect(onSignIn).toHaveBeenCalledWith("testuser", "testpass");
});
