import { shallow } from "enzyme";

import EmailIndex from "../Components/EmailIndex";

describe("EmailIndex Component", () => {
  let component;
  beforeEach(() => (component = shallow(<EmailIndex />)));

  it('should have a count of how many emails were rendered', () => {
    expect(component.contains(<span>1 - 10 of 10</span>)).toBe(true);
  });

  
});
