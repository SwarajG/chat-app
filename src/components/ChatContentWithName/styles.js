import { css } from 'emotion';

const chatView = isReceiverView => css`
  display: flex;
  color: #000;
  flex-direction: column;
  align-items: flex-start;
  ${isReceiverView ? `
    align-items: flex-end;
  `: ''}
`;

const chatContent = css`
  margin-bottom: 20px;
`;

const senderNameStyle = css`
  margin: 0;
  margin-bottom: 5px;
`;

export default {
  chatView,
  chatContent,
  senderNameStyle
};