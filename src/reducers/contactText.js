import {
  UPDATE_NEW_CONTACT_INPUT,
  CLEAR_NEW_CONTACT
} from '../constants/ActionTypes';

const chat = (state = '', action) => {
  switch (action.type) {
    case UPDATE_NEW_CONTACT_INPUT:
      return action.name;
    case CLEAR_NEW_CONTACT:
      return '';
    default:
      return state;
  }
};

export default chat;