import React from 'react';

const AudioResponse = ({ message }) => (
  <audio controls>
    <source src={message} />
    Your browser does not support the audio element.
  </audio>
)

export default AudioResponse;