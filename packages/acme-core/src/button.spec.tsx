import { render, screen } from "@testing-library/react";

import Button from "./button";

test("renders the button with the correct text", () => {
  render(<Button>Click Me</Button>);

  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
