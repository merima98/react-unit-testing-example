import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import Wrapper from "../components/Wrapper.jsx";

describe("Should test Wrapper component", function () {
  it("Should render Wrapper component.", function () {
    render(<Wrapper />);
  });
  it("Should have child componet.", function () {
    const { getByRole } = render(<Wrapper />);
    expect(screen.getByText("Wrapper"));
  });
});
