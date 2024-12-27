import React from 'react';

function Message({ message }) {
  return (
    <div className={`message ${message.isSender ? 'sent' : 'received'}`}>
      {message.text}
    </div>
  );
}

export default Message;