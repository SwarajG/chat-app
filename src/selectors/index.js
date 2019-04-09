import { createSelector } from 'reselect';

const getAllMessages = state => state.messages;
const getActiveReceiverId = state => state.activeReceiverId;

export const getUserChat = createSelector(
  [getAllMessages, getActiveReceiverId],
  (messages, reveiverId) => messages
    .filter(message => (
      message.receiverId === reveiverId
      || message.senderId === reveiverId
    ))
);