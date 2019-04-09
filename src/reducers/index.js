import { combineReducers } from 'redux';

import currentReceiver from './currentReceiver';
import messageText from './messageText';
import messages from './messages';
import userList from './userList';
import contactText from './contactText';

export default combineReducers({
  activeReceiverId: currentReceiver,
  contactText,
  messages,
  messageText,
  userList,
});