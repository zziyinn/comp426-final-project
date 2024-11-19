// components/ChatWidget.js
import React, { useState } from 'react';
import axios from 'axios';

function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    axios.post('/api/chat', { message: input })
      .then(response => setMessages([...messages, { user: 'You', text: input }, response.data]))
      .catch(error => console.error(error));
    setInput('');
  };

  return (
    <div className="chat-widget">
      <h3>健身助手</h3>
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.user === 'You' ? 'user-message' : 'bot-message'}>
            {msg.text}
          </div>
        ))}
      </div>
      <input 
        type="text" 
        value={input} 
        onChange={e => setInput(e.target.value)} 
        placeholder="输入消息" 
      />
      <button onClick={sendMessage}>发送</button>
    </div>
  );
}

export default ChatWidget;
