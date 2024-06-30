import React from "react";
import Message from "../Message/Message";

const ChatHistory = ({ chatHistory }) => {
  const messages = chatHistory.map((msg, index) => (
    <Message key={index} message={msg.data} />
  ));

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 overflow-y-auto max-h-96 w-full">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Chat History</h2>
      <div className="space-y-4">{messages}</div>
    </div>
  );
};

export default ChatHistory;

