import { css } from 'emotion';

const chatWindowWrapper = css`
  width: ${window.innerWidth - 100}px;
  margin: 0 auto;
  color: #FFF;
  margin-top: 40px;
`;

const headerWrapper = css`
  display: flex;
  height: 60px;
  align-items: center;
  padding-left: 20px;
  margin: 0 auto;
  background-color: #1AA59A;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const contentWrapper = css`
  display: flex;
`;

const listWrapper = css`
  position: relative;
  width: 20%;
  background-color: #F5F5F5;
  color: #0C090A;
  height: 300px;
  overflow: auto;
  border-bottom-left-radius: 5px;
`;

const windowWrapper = css`
  width: 80%;
  height: 300px;
  max-height: 300px;
  border-bottom-right-radius: 5px;
`;

export default {
  chatWindowWrapper,
  contentWrapper,
  listWrapper,
  windowWrapper,
  headerWrapper
};