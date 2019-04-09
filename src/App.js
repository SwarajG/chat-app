import React, { Component } from 'react';
import Header from './containers/Header';
import ContactList from './containers/ContactList';
import AddContact from './containers/AddContact';
import ChatWindow from './containers/ChatWindow';
import s from './styles';

class App extends Component {
  render() {
    return (
      <div className={s.chatWindowWrapper}>
        <div className={s.headerWrapper}>
          <Header />
        </div>
        <div className={s.contentWrapper}>
          <div className={s.listWrapper}>
            <AddContact />
            <ContactList />
          </div>
          <div className={s.windowWrapper}>
            <ChatWindow />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
