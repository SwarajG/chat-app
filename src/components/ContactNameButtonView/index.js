import React from 'react';
import { css } from 'emotion';

const nameStyle = isActive => css`
  cursor: pointer;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  ${isActive ? `
    background-color: #D8D8D8;
  `: ''}
`;

const ContactNameButton = ({ user, isActive = false, updateReceiverId }) => (
  <p className={nameStyle(isActive)} onClick={() => updateReceiverId(user.id)}>{user.name}</p>
);

export default ContactNameButton;