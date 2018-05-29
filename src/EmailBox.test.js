import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import EmailBox from "./EmailBox";

describe("EmailBox", () => {
  it("should be defined", () => {
    expect(EmailBox).toBeDefined();
  });

  it("should render correctly", () => {
    expect(toJson(shallow(<EmailBox />))).toMatchSnapshot();
  });
});
