import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

describe("Should test Button component.", function () {
  it("Should render button component.", function () {
    render(<Button />);
  });
  it("Should have button tag.", function () {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
