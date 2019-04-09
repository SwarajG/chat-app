import shortid from 'shortid';
const defaultSenderName = 'Swaraj';
let id = 0;

export function createUsers() {
  const names = ['Mike', 'Molly', 'Peter', 'Kevin'];
  return names.map(name => ++id && ({
    id,
    name
  }));
}

export function createNewUser(name) {
  const newId = ++id;
  return {
    id: newId,
    name
  };
}

export function createMessage(message, type, receiverId) {
  return {
    id: shortid(),
    senderId: 0,
    senderName: defaultSenderName,
    message,
    type,
    receiverId,
    status: null,
    createdAt: new Date().toISOString()
  };
}