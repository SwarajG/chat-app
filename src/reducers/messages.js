import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  START_RECORDING,
  STOP_RECORDING,
  PLAY_RECORDING
} from '../constants/ActionTypes';
import { IS_RECORDING_STARTED, IS_RECORDING_FINISHED, IS_RECORDING_PLAYING, AUDIO_PAUSE } from '../constants/MessageStatus';
import { createMessage } from '../utils/helper';

function updateState(message, status, actionId) {
  if (actionId === message.id) {
    return {
      ...message,
      status
    };
  }
  return message;
}

const messages = (state = [], action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, responseType, receiverId } = action;
      const latestMessage = createMessage(message, responseType, receiverId);
      return [
        ...state,
        latestMessage
      ];
    case DELETE_MESSAGE:
      return state.filter(message => message.id === action.id);
    case START_RECORDING:
      return state.map(message => updateState(
        message,
        IS_RECORDING_STARTED,
        action.id
      ));
    case STOP_RECORDING:
      return state.map(message => updateState(
        message,
        IS_RECORDING_FINISHED,
        action.id
      ));
    case PLAY_RECORDING:
      return state.map(message => updateState(
        message,
        IS_RECORDING_PLAYING,
        action.id
      ));
    case AUDIO_PAUSE:
      return state.map(message => updateState(
        message,
        AUDIO_PAUSE,
        action.id
      ));
    default:
      return state;
  }
};

export default messages;