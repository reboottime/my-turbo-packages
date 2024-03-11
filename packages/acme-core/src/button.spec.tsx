import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./button";

it("renders the button with the correct text", () => {
  render(<Button>Click Me</Button>);

  expect(screen.getByText(/click me/i)).toBeInTheDocument();
});

it("renders the button with event handler", async () => {
  userEvent.setup();

  const onButtonClick = jest.fn();

  render(<Button onClick={onButtonClick}>Click Me</Button>);

  await userEvent.click(screen.getByText(/click me/i));

  expect(onButtonClick).toHaveBeenCalled();
});