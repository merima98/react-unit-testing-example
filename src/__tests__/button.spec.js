import renderer from "react-test-renderer";
import React from "react";
import { mount } from "enzyme";
import enzymeConfig from "../../enzymeConfig";
import Jubotron from "../components/Jubotron";

describe("Should test Jubotron component", function () {
  it("should render component", function () {
    const component = renderer.create(<Jubotron />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot(); //testing the owerall rendering of component at a given time
  });
});
