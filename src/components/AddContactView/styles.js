import { css } from 'emotion';

const buttonStyle = css`
  position: absolute;
  top: 0;
  width: 100%;
  border: 0;
  height: 40px;
  font-size: 20px;
  background: #696969;
  color: #FFF;
`;

const inputStyle = css`
  border: 0;
  padding: 5px 10px;
  margin-left: 20px;
  margin-right: 10px;
  width: 70%;
  color: #000;
`;

const addButton = css`
  cursor: pointer;
  padding: 5px;
`;

export default {
  buttonStyle,
  inputStyle,
  addButton
};