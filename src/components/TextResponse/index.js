import React from 'react';
import { css } from 'emotion';

const textResponseStyle = css`
  margin: 0;
`;

const TextResponse = ({ message }) => (
  <p className={textResponseStyle}>{message}</p>
);

export default TextResponse;