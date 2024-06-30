import React from "react";

const ChatInput = ({ send }) => {
  return (
    <div className="flex justify-center items-center p-4 bg-white shadow-md rounded-lg mt-4 w-full">
      <input
        onKeyDown={send}
        placeholder="Type a message... Hit Enter to Send"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default ChatInput;

