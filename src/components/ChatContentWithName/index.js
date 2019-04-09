import React, { Component } from 'react';
import { AUDIO, TEXT } from '../../constants/MessageType';
import TextResponse from '../TextResponse';
import AudioResponse from '../AudioResponse';
import s from './styles';

export default class ChatContentWithName extends Component {

  renderMessage = (type, message) => {
    switch (type) {
      case TEXT:
        return <TextResponse message={message} />;
      case AUDIO:
        return <AudioResponse message={message} />
      default:
        return null;
    }
  }

  render() {
    const { chat } = this.props;
    return (
      <div className={s.chatView()}>
        <div className={s.chatContent}>
          <p className={s.senderNameStyle}>
            {chat.senderName}
          </p>
          <div>
            {this.renderMessage(chat.type, chat.message)}
          </div>
        </div>
      </div>
    );
  }
}