// src/components/ChatWidget.js
import React, { useState } from 'react';
import axios from 'axios';

function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { user: 'You', text: input }]);

    axios.post('/api/chat', { message: input })
      .then(response => {
        setMessages((prev) => [...prev, response.data]);
      })
      .catch(error => console.error('Error sending message:', error));

    setInput('');
  };

  return (
    <div id="chat-widget">
      <h3>Fitness Assistant</h3>
      <div id="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.user === 'You' ? 'user-message' : 'bot-message'}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatWidget;
