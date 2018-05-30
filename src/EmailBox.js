import juice from "juice";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

export default ({ children, css }) => {
  const inlined = juice(
    `<style>${css}</style>${renderToStaticMarkup(children)}`
  );

  return (
    <div className="email-box" dangerouslySetInnerHTML={{ __html: inlined }} />
  );
};
