import { css } from 'emotion';

const windowWrapper = css`
  height: 260px;
  max-height: 260px;
  overflow: auto;
  padding: 20px;
  width: 100%;
`;

const contentWrapper = css`
  display: flex;
  flex-direction: column;
`;

const sendMessageWrapper = css`
  height: 40px;
  width: 100%;
  background-color: #B1DFDB;
`;

const inputStyle = css`
  background: #B1DFDB;
  border: 0;
  border-bottom: 1px solid #FFF;
  width: 80%;
  padding: 5px 10px;
  margin-left: 10px;
  color: #000;
`;

const sendButton = css`
  background-color: #1AA59A;
  color: #000;
`;

export default {
  windowWrapper,
  sendMessageWrapper,
  contentWrapper,
  inputStyle,
  sendButton
};