import { mount, shallow } from "enzyme";
import { render, getByTestId } from "@testing-library/react";
import Canvas from "../components/Canvas";
import Animation from "../components/Animation";

import mockSVG from "../animations/lotties/dots.json";

describe("Test Canvas props", () => {
  const animationTitle = "Some Title";
  const animationData = mockSVG;

  it("accepts animation title props", () => {
    const wrapper = mount(<Canvas animationTitle={animationTitle} />);
    expect(wrapper.props().animationTitle).toEqual(animationTitle);
  });

  it("accepts a SVG as animation data props", () => {
    const wrapper = mount(<Canvas animation={animationData} />);
    expect(wrapper.props().animation).toEqual(animationData);
  });
});

//ISSUE: Find a effective way to test hooks.
describe("Animation shouldn't start automatically", () => {
  it("isPaused should be true", () => {
    const isPaused = true;
    const wrapper = mount(<Animation isPaused={isPaused} />);
    expect(wrapper.props().isPaused).toBe(isPaused);
  });
});
