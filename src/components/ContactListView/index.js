import React, { Component } from 'react';
import { css } from 'emotion';
import { ARROW_DOWN, ESC, ARROW_UP } from '../../constants/KeyActions';
import ContactNameButton from '../../containers/ContactNameButton';

const listWrapper = css`
  margin-top: 40px;
`;

class ContactListView extends Component {
  findPrevId = () => {
    const { userList, activeReceiverId } = this.props;
    const index = userList.findIndex(user => user.id === activeReceiverId);
    if (index <= 0) {
      return null;
    }
    return userList[index - 1].id;
  }

  findNextId = () => {
    const { userList, activeReceiverId } = this.props;
    const index = userList.findIndex(user => user.id === activeReceiverId);
    if (index >= userList.length - 1) {
      return null;
    }
    return userList[index + 1].id;
  }

  listenToKeyPress = (e) => {
    const key = e.key;
    switch (key) {
      case ARROW_UP: {
        const id = this.findPrevId();
        id && this.props.updateReceiverId(id);
        break;
      }
      case ARROW_DOWN: {
        const id = this.findNextId();
        id && this.props.updateReceiverId(id);
        break;
      }
      case ESC: {
        this.onBlur();
        break;
      }
      default:
        break;
    }
  }

  onFocus = () => {
    document.addEventListener('keydown', this.listenToKeyPress);
  }

  onBlur = () => {
    document.removeEventListener('keydown', this.listenToKeyPress);
  }

  render() {
    const { userList } = this.props;
    return (
      <div
        className={listWrapper}
        tabIndex={-1}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      >
        {userList.map(user => <ContactNameButton key={user.name} user={user} />)}
      </div>
    );
  }
}

export default ContactListView;