import { render, screen } from "@testing-library/react";
import React from "react";
import Alert from "../components/Alert";

describe("ALert component", function () {
  beforeEach(() => {
    //Before each test, we will render Alert component.
    render(<Alert />);
  });
  it("Should render Alert component.", function () {
    render(<Alert />);
  });
  it("Should have button Click to open alert.", function () {
    expect(screen.getByText("Click to open alert")).toBeInTheDocument();
  });
  it("Should have input with label text: alert-input.", function () {
    const component = screen.getByLabelText("alert-input");
    expect(component).toBeInTheDocument();
  });
});
