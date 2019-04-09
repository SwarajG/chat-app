import {
  UPDATE_MESSAGE_INPUT,
  CLEAR_MESSAGE
} from '../constants/ActionTypes';

const currentReceiver = (state = '', action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_INPUT:
      return action.text;
    case CLEAR_MESSAGE:
      return '';
    default:
      return state;
  }
};

export default currentReceiver;