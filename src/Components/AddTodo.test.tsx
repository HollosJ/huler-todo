import { render, screen } from "@testing-library/react";
import { AddTodo } from "./AddTodo";
import userEvent from "@testing-library/user-event";

describe("Add Todo form tests", () => {
  const onSubmit = jest.fn();

  it("Calls onSubmit when user enters text and clicks the add button", async () => {
    render(<AddTodo className="" onSubmit={onSubmit} />);

    const input = screen.getByPlaceholderText("Enter new Todo...");
    const button = screen.getByRole("button");

    await userEvent.type(input, "Mock todo");
    await userEvent.click(button);

    expect(onSubmit).toHaveBeenCalled();
  });

  it("Calls onSubmit when user enters text and presses the enter key", async () => {
    render(<AddTodo className="" onSubmit={onSubmit} />);

    const input = screen.getByPlaceholderText("Enter new Todo...");

    await userEvent.type(input, "Mock todo");
    await userEvent.keyboard("enter");

    expect(onSubmit).toHaveBeenCalled();
  });
});
