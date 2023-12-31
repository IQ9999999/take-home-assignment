import { render, fireEvent, screen } from "@testing-library/react";
import Registration from "./Register";

test("submitting the form calls onRegister with username and password", () => {
  const onRegister = jest.fn();
  render(<Registration onRegister={onRegister} />);
  fireEvent.change(screen.getByLabelText(/Username:/i), { target: { value: "testuser" } });
  fireEvent.change(screen.getByLabelText(/Password:/i), { target: { value: "testpass" } });
  fireEvent.click(screen.getByRole("button", { name: /Register/i }));
  expect(onRegister).toHaveBeenCalledWith("testuser", "testpass");
});
