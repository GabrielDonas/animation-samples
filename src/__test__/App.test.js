import { shallow } from "enzyme";
import App from "../App";
import Header from "../components/Header";
import Title from "../components/Title";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

describe.skip("App should render all its components", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it.each([
    ["Header", <Header />],
    ["Title", <Title />],
    ["Gallery", <Gallery />],
    ["Footer", <Footer />],
  ])("the App should render the %s component", (title, component) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(component)).toEqual(true);
  });
});
