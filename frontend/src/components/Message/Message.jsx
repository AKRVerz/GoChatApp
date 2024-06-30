import React, { useState, useEffect } from "react";

const Message = ({ message }) => {
  const [parsedMessage, setParsedMessage] = useState({});

  useEffect(() => {
    const temp = JSON.parse(message);
    setParsedMessage(temp);
  }, [message]);

  return (
    <div className="p-2 md:p-4 bg-gray-200 rounded-lg shadow-md my-3">
      {parsedMessage.body}
    </div>
  );
};

export default Message;

