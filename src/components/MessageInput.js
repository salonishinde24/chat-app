import React, { useState, useContext } from 'react';
import { MessagesContext } from '../contexts/MessagesContext';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState(null);
  const { sendMessage } = useContext(MessagesContext);

  const handleSend = () => {
    if (message.trim() || attachment) {
      sendMessage({ text: message, attachment });
      setMessage('');
      setAttachment(null);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setAttachment(file);
    }
  };

  return (
    <div className="input-group p-2">
      <input
        type="text"
        className="form-control"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="file"
        className="form-control-file d-none"
        id="file-input"
        onChange={handleFileChange}
      />
      <label htmlFor="file-input" className="btn btn-secondary me-3">
        Attach File
      </label>
      <button className="btn btn-primary" onClick={handleSend}>
        Send
      </button>
    </div>
  );
};


export default MessageInput;