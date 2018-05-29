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

  it("should render children correctly", () => {
    expect(
      toJson(
        shallow(
          <EmailBox>
            <div>
              <h1>Test</h1>
              <p>Children</p>
            </div>
          </EmailBox>
        )
      )
    ).toMatchSnapshot();

    const randomChild = <p>{Math.random()}</p>;

    expect(
      shallow(<EmailBox>{randomChild}</EmailBox>).containsMatchingElement(
        randomChild
      )
    ).toBeTruthy();
  });
});
