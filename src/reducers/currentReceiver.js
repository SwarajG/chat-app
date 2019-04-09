import {
  UPDATE_RECEIVER_ID
} from '../constants/ActionTypes';

const currentReceiver = (state = 1, action) => {
  switch (action.type) {
    case UPDATE_RECEIVER_ID:
      return action.receiverId;
    default:
      return state;
  }
};

export default currentReceiver;