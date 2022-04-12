import React from "react";
import Jubotron from "../components/Jubotron";
import { render } from "@testing-library/react";

describe("Should test Jubotron component", function () {
  it("should render component", function () {
    render(<Jubotron />);
  });
});
