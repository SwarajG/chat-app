import {
  ADD_NEW_CONTACT
} from '../constants/ActionTypes';
import { createUsers, createNewUser } from '../utils/helper';

const defaultUsersList = createUsers();

const chat = (state = defaultUsersList, action) => {
  switch (action.type) {
    case ADD_NEW_CONTACT:
      const user = createNewUser(action.name);
      return [
        ...state,
        user
      ];
    default:
      return state;
  }
};

export default chat;