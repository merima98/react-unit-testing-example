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
  it("Should change visibility of main and Set quick and task to true.", function () {
    const isSetQuickcAndTask = false;
    const setQuickAndTask = jest.fn(() => {
      !isSetQuickcAndTask;
    });
    const isSetShowMain = false;
    const setShowMain = jest.fn(() => !isSetShowMain);
    render(
      <Header
        setShowMain={setShowMain}
        isSetShowMain={isSetShowMain}
        isSetQuickcAndTask={isSetQuickcAndTask}
        setQuickAndTask={setQuickAndTask}
      />
    );
  });
});
