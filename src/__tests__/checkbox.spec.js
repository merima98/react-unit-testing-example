import { render, screen } from "@testing-library/react";
import Checkbox from "../components/Checkbox";

fdescribe("Should test checkbox component. ", function () {
  it("Should render checkbox component.", function () {
    const deleteButton = "Delete";
    render(<Checkbox buttonText={deleteButton} />);
    expect(screen.getByTestId("checkbox-action")).toBeTruthy();
  });
  it("Should have checkbox-clas.", function () {
    const deleteButton = "Delete";
    render(<Checkbox buttonText={deleteButton} />);
    expect(screen.getByTestId("checkbox-class")).toBeTruthy();
  });
  it("Should have button tag.", function () {
    const deleteButton = "Delete";
    render(<Checkbox buttonText={deleteButton} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("Should have Delete button text.", function () {
    const deleteButton = "Delete";
    render(<Checkbox buttonText={deleteButton} />);
    expect(screen.getByTestId("data-testid-button-text")).toBeTruthy();
    expect(screen.getByTestId("data-testid-button-text")).toHaveTextContent(
      "Delete"
    );
  });
});
