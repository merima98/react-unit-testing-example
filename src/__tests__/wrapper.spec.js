import React from "react";
import { render, screen } from "@testing-library/react";
import Wrapper from "../components/Wrapper.jsx";

describe("Should test Wrapper component", function () {
  beforeEach(() => {
    //Before each test, we will render Wrapper component.
    render(<Wrapper />);
  });
  it("Should have child componet.", function () {
    expect(screen.getByText("Wrapper"));
  });
});
