import React from "react";
import { render, shallow } from "enzyme";
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

    expect(shallow(<EmailBox>{randomChild}</EmailBox>).html()).toContain(
      shallow(randomChild).html()
    );
  });

  it("should inline css", () => {
    const css = `
      .irrelevant-class {
        color: red;
      }

      .relevant-class {
        color: green;
      }
    `;

    const wrapper = render(
      <EmailBox css={css}>
        <div className="relevant-class" />
      </EmailBox>
    );

    const targetDiv = wrapper.find(".relevant-class");

    expect(targetDiv.attr("style")).toContain("color: green");
    expect(targetDiv.css("color")).toEqual("green");
  });
});
