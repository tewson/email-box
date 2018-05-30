import juice from 'juice';
import PropTypes from 'prop-types';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const EmailBox = ({ children, css }) => {
  const inlined = juice(
    `<style>${css}</style>${renderToStaticMarkup(children)}`,
  );

  return (
    <div className="email-box" dangerouslySetInnerHTML={{ __html: inlined }} />
  );
};

EmailBox.propTypes = {
  children: PropTypes.node.isRequired,
  css: PropTypes.string.isRequired,
};

export default EmailBox;
