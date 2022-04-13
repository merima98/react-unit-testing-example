import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

describe("Should test Button component.", function () {
  beforeEach(() => {
    //Before each test, we will render Button component.
    render(<Button />);
  });
  it("Should have button tag.", function () {
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
