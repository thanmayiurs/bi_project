import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! Ask me anything about AI/ML research, datasets, or tutorials.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setLoading(true);
    setInput('');
    try {
      const res = await fetch('https://bi-project-a6pc.onrender.com/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setMessages(msgs => [...msgs, { from: 'bot', text: data.reply }]);
    } catch {
      setMessages(msgs => [...msgs, { from: 'bot', text: 'Sorry, something went wrong.' }]);
    }
    setLoading(false);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: 24,
      right: 24,
      width: 320,
      maxWidth: '90vw',
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      <div style={{ background: '#673ab7', color: '#fff', padding: '12px 16px', fontWeight: 700 }}>
        AI Chatbot
      </div>
      <div style={{ flex: 1, padding: 12, maxHeight: 300, overflowY: 'auto' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            textAlign: msg.from === 'user' ? 'right' : 'left',
            margin: '8px 0'
          }}>
            <span style={{
              display: 'inline-block',
              background: msg.from === 'user' ? '#e1bee7' : '#ede7f6',
              color: '#333',
              borderRadius: 12,
              padding: '8px 12px',
              maxWidth: '80%',
              wordBreak: 'break-word'
            }}>{msg.text}</span>
          </div>
        ))}
        {loading && <div style={{ color: '#888', fontStyle: 'italic' }}>Thinking…</div>}
      </div>
      <div style={{ display: 'flex', borderTop: '1px solid #eee' }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Type your question…"
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            padding: 12,
            fontSize: 16,
            borderRadius: 0
          }}
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          style={{
            background: '#673ab7',
            color: '#fff',
            border: 'none',
            padding: '0 20px',
            fontWeight: 700,
            fontSize: 16,
            cursor: 'pointer'
          }}
        >Send</button>
      </div>
    </div>
  );
};

export default Chatbot;