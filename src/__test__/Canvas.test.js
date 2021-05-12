import { mount, shallow } from "enzyme";
import Canvas from "../components/Canvas";

describe("", () => {
  it("accepts user account props", () => {
    const title = "033xz01op";
    const wrapper = mount(<Canvas animationTitle={title} />);
    expect(wrapper.props().title).toEqual(title);
  });
  //it("contains users account email", () => {
  //  const wrapper = mount(<Account user={user} />);
  //  const value = wrapper.find("p").text();
  //  expect(value).toEqual("david@gmail.com");
  //});
});
