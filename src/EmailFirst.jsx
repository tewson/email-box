import juice from 'juice';
import PropTypes from 'prop-types';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const EmailFirst = ({ children, css }) => {
  const inlined = juice(
    `<style>${css}</style>${renderToStaticMarkup(children)}`,
  );

  return (
    <div
      className="email-first"
      style={{
        maxWidth: 600,
      }}
      dangerouslySetInnerHTML={{ __html: inlined }}
    />
  );
};

EmailFirst.propTypes = {
  children: PropTypes.node.isRequired,
  css: PropTypes.string.isRequired,
};

export default EmailFirst;
