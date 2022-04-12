import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import Wrapper from "../components/Wrapper.tsx";

describe("Should test Wrapper component", function () {
  it("Should render Wrapper component.", function () {
    render(<Wrapper />);
  });
  it("Should have child componet.", function () {
    const { getByRole } = render(<Wrapper />);
    console.log("I am in wrapper component, ", getByRole);
    expect(screen.getByText("Wrapper"));
  });
});
