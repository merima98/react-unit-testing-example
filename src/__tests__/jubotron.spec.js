import React from "react";
import { render, screen } from "@testing-library/react";

import Jubotron from "../components/Jubotron";

describe("Should test Jubotron component", function () {
  it("should render component", function () {
    render(<Jubotron />);
  });
  it("Should have `React unit testing - React testing library.` in child component.", function () {
    render(<Jubotron />);
    expect(
      screen.getByText("React unit testing - React testing library.")
    ).toBeInTheDocument();
  });
});
