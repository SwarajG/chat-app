import React, { Component } from 'react';
import ChatContentWithName from '../ChatContentWithName';
import { TEXT, AUDIO } from '../../constants/MessageType';
import { recordAudio } from '../../utils/audioHelper';
import { Button } from 'antd';
import s from './styles';

class ChatWindowView extends Component {
  constructor(props) {
    super(props);
    this.mediaRecorder = null;
  }

  dataListener = event => {
    this.audioChunks.push(event.data);
  }

  startAudioRecording = async () => {
    this.recorder = await recordAudio();
    this.recorder.start();
  }

  stopAudioRecording = async () => {
    const { audioUrl } = await this.recorder.stop();
    const { receiverId } = this.props;
    const input = {
      message: audioUrl,
      responseType: AUDIO,
      receiverId
    };
    this.props.sendMessage(input);
  }

  sendMessage = () => {
    const { receiverId, value } = this.props;
    const input = {
      message: value,
      responseType: TEXT,
      receiverId
    };
    this.props.sendMessage(input);
    this.props.clearMessageInput();
  }

  render() {
    const { messages, value, updateMessageInput } = this.props;
    return (
      <div className={s.contentWrapper}>
        <div className={s.windowWrapper}>
          {messages.map(chat => <ChatContentWithName key={`${chat.createdAt}`} chat={chat} />)}
        </div>
        <div className={s.sendMessageWrapper}>
          <input
            type="text"
            value={value}
            onChange={(e) => updateMessageInput(e.target.value)}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                this.sendMessage();
              }
            }}
            className={s.inputStyle}
          />
          <Button
            shape="circle"
            icon="right"
            onClick={this.sendMessage}
            className={s.sendButton}
          />
          <Button
            shape="circle"
            icon="sound"
            onMouseDown={this.startAudioRecording}
            onMouseUp={this.stopAudioRecording}
            className={s.sendButton}
          />
        </div>
      </div>
    );
  }
}

export default ChatWindowView;