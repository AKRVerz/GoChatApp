import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";
import { connect, sendMsg } from "./api";
import "./App.css";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log("New Message");
      setChatHistory((prevChatHistory) => [...prevChatHistory, msg]);
      console.log(chatHistory);
    });
  }, [chatHistory]);

  const send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  };

  return (
    <div className="App min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <Header />
      <div className="w-full max-w-2xl mt-8">
        <ChatHistory chatHistory={chatHistory} />
        <ChatInput send={send} />
      </div>
    </div>
  );
};

export default App;

