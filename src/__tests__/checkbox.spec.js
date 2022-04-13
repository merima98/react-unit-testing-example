import { render, screen } from "@testing-library/react";
import Checkbox from "../components/Checkbox";

describe("Should test checkbox component. ", function () {
  it("Should render checkbox component.", function () {
    render(<Checkbox />);
    expect(screen.getByTestId("checkbox-action")).toBeTruthy();
  });
});
