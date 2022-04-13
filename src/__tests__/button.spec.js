import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

describe("Should test Button component.", function () {
  it("Should render Button component.", function () {
    render(<Button />);
  });
  it("Should have button tag.", function () {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("Should have function.", function () {
    render(<Button />);
    expect(screen.getByText("Dark/Light mode")).toBeInTheDocument();
  });
  it("Should change dark mode.", function () {
    const darkMode = false;
    const setIsDarkMode = jest.fn(() => !darkMode);
    render(<Button darkMode={darkMode} setIsDarkMode={setIsDarkMode} />);
    expect(screen.getByTestId("main-header")).toBeTruthy();
    fireEvent.click(screen.queryByTestId("dark-mode-action"));
    expect(setIsDarkMode).toBeCalledWith(true);
  });
});
