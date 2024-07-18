// components/Chatbot.js
import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

const config = {
  botName: 'PortfolioBot',
  initialMessages: [
    { type: 'text', text: 'Hi! How can I assist you today?', id: 1 },
  ],
};

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.toLowerCase().includes('hello')) {
      actions.handleHello();
    }
  };

  return <div>{React.cloneElement(children, { parse })}</div>;
};

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.cloneElement(children, {
        actions: {
          handleHello,
        },
      })}
    </div>
  );
};

const ChatbotComponent = () => {
  return (
    <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
    />
  );
};

export default ChatbotComponent;
