import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Should test header component.", function () {
  it("Should render header component.", function () {
    render(<Header />);
    expect(screen.getByTestId("header")).toBeTruthy();
  });

  it("Shoud have Header button in Header component.", function () {
    render(<Header />);
    expect(screen.getByText("Header button")).toBeInTheDocument();
  });
  it("Should change Set Quick and Task to true.", function () {
    const isSetQuickcAndTask = false;
    const setQuickAndTask = jest.fn(() => {
      !isSetQuickcAndTask;
    });
    render(
      <Header
        isSetQuickcAndTask={isSetQuickcAndTask}
        setQuickAndTask={setQuickAndTask}
      />
    );
    expect(screen.getByTestId("header")).toBeTruthy();
    fireEvent.click(screen.getByTestId("add-quic-and-task"));
    expect(setQuickAndTask).toBeCalledWith(true);
  });
});
