import React, { useState, useEffect, useRef } from "react";
import { SendHorizontal } from "lucide-react";

const ChatSection = ({ messages, onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = { text: inputValue, user: true };
      onSendMessage(userMessage);
      setInputValue("");

      // Simulate bot response
      const botResponse = { text: "Ini adalah respons bot 😋", user: false };
      onSendMessage(botResponse);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-36 w-80 h-96 bg-white rounded-lg flex flex-col shadow-lg z-10">
      <div className="bg-violet-500 text-white p-3 text-center font-bold rounded-t-lg">
        Chat
      </div>
      <div className="flex-1 p-3 bg-gray-100 overflow-y-auto">
        {messages.map((message, index) =>
          message.user ? (
            // Render user's message
            <div key={index} className="flex justify-end mb-4">
              <div className="flex items-start">
                <div className="ml-3">
                  <div className="bg-indigo-400 text-white p-2 rounded-lg">
                    {message.text}
                  </div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center ml-2">
                  <span className="text-white">😎</span>
                </div>
              </div>
            </div>
          ) : (
            // Render bot's message
            <div key={index} className="flex items-start mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center">
                <span className="text-white">🤖</span>
              </div>
              <div className="ml-3">
                <div className="bg-purple-500 text-white p-2 rounded-lg">
                  {message.text}
                </div>
              </div>
            </div>
          )
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex border-t border-gray-300 rounded-b-lg">
        <input
          type="text"
          className="flex-1 p-2 border-none outline-none rounded-bl-lg"
          placeholder="Masukkan pesan..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button
          className="bg-violet-500 text-white p-2 rounded-br-lg"
          onClick={handleSendMessage}
        >
          <SendHorizontal />
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
