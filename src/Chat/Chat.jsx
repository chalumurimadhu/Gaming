import React, { useState } from 'react';
import "./Chat.css"

function ChatApp() {
  const [currentChatUser, setCurrentChatUser] = useState(null);

  const users = ['Alice', 'Bob', 'Charlie', 'David'];

  const handleUserClick = (user) => {
    setCurrentChatUser(user);
  };

  const sendMessage = (user) => {
    const messageInput = document.getElementById(`${user}-message-input`);
    const message = messageInput.value.trim();
    if (message !== '') {
      const messagesContainer = document.getElementById(`${user}-messages-container`);
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.innerHTML = `
        <strong>You:</strong> ${message}
      `;
      messagesContainer.appendChild(messageElement);
      messageInput.value = '';
    }
  };

  return (
    <div className="chat-container">
      <div className="sidebar">
        <h2>Private Messages</h2>
        <ul className="private-messages">
          {users.map((user, index) => (
            <li key={index} onClick={() => handleUserClick(user)}>{user}</li>
          ))}
        </ul>
      </div>
      <div className="chat-area">
        {currentChatUser ? (
          <div id={`${currentChatUser}-chat-area`} className="chat-area user-chat-area">
            <h2>Chat with {currentChatUser}</h2>
            <div id={`${currentChatUser}-messages-container`} className="messages-container">
              <div className="message">
                <strong>{currentChatUser}:</strong> Hey there! How are you?
              </div>
              <div className="message">
                <strong>{currentChatUser}:</strong> Did you see the latest news?
              </div>
              <div className="message">
                <strong>{currentChatUser}:</strong> Let's catch up later!
              </div>
              {/* You can add more default messages here */}
              <div className="message">
                <strong>You:</strong> Hi {currentChatUser}! How's your day going?
              </div>
              <div className="message">
                <strong>You:</strong> Have you finished the project yet?
              </div>
            </div>
            <div className="message-input-container">
              <input type="text" id={`${currentChatUser}-message-input`} className="message-input" placeholder="Type your message..." />
              <button className="send-btn" onClick={() => sendMessage(currentChatUser)}>Send</button>
            </div>
          </div>
        ) : (
          <div id="default-chat-area" className="default-chat-area">
            <p>Welcome! Select a user to chat.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatApp;
