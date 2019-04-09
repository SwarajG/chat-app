import * as actionsTypes from '../constants/ActionTypes';
import * as messageTypes from '../constants/MessageType';

const types = {
  ...actionsTypes,
  ...messageTypes
};

export const sendMessage = message => ({ type: types.SEND_MESSAGE, ...message });
export const clearMessageInput = () => ({ type: types.CLEAR_MESSAGE });
export const addNewContact = name => ({ type: types.ADD_NEW_CONTACT, name });
export const clearName = () => ({ type: types.CLEAR_NEW_CONTACT });
export const updateContactText = name => ({ type: types.UPDATE_NEW_CONTACT_INPUT, name });
export const deleteMessage = id => ({ type: types.DELETE_MESSAGE, id });
export const updateReceiverId = receiverId => ({ type: types.UPDATE_RECEIVER_ID, receiverId });
export const updateMessageInput = text => ({ type: types.UPDATE_MESSAGE_INPUT, text });


// export const START_RECORDING = 'START_RECORDING';
// export const STOP_RECORDING = 'STOP_RECORDING';
// export const PLAY_RECORDING = 'PLAY_RECORDING';
// export const IS_RECORDING = 'IS_RECORDING';
// export const IS_RECORDING_STARTED = 'IS_RECORDING_STARTED';
// export const IS_RECORDING_FINISHED = 'IS_RECORDING_FINISHED';
// export const IS_RECORDING_PLAYING = 'IS_RECORDING_PLAYING';
// export const AUDIO_PAUSE = 'AUDIO_PAUSE';