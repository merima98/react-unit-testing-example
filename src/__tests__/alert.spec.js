import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByText,
} from "@testing-library/react";
import React from "react";
import Alert from "../components/Alert";

describe("ALert component", function () {
  it("Should render Alert component.", function () {
    render(<Alert />);
  });
  it("Should have button Click to open alert.", function () {
    render(<Alert />);
    expect(screen.getByText("Click to open alert")).toBeInTheDocument();
  });
  it("Should have input with label text: alert-input.", function () {
    const alertComponent = render(<Alert />);
    const temp = alertComponent.getByLabelText("alert-input");
    expect(temp).toBeInTheDocument();
  });
});
