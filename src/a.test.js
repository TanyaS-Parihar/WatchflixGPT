import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import checkValidData from "./utils/validate";

test("passwordd", () => {
  render(checkValidData);
  const pw = screen.getByText("email");
  expect(password).toBeInTheDocument();
});
