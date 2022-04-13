import React from "react";
import { render, screen } from "@testing-library/react";

import Jubotron from "../components/Jubotron";

describe("Should test Jubotron component", function () {
  beforeEach(() => {
    //Before eact test, we will render Jubotron component.
    render(<Jubotron />);
  });
  it("Should have `React unit testing - React testing library.` in child component.", function () {
    expect(
      screen.getByText("React unit testing - React testing library.")
    ).toBeInTheDocument();
  });
});
