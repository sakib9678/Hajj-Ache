import React, { useState } from "react";
import { FaComments } from "react-icons/fa";

const ChatWidget = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Chat Widget Button */}
      <div
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform hover:scale-110 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } rounded-full shadow-lg cursor-pointer`}
      >
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center text-white transition-colors duration-300">
            <FaComments className="text-2xl" />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
            <span className="text-white text-xs"></span>
          </div>
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-24 right-6 z-50 w-80 ${
          darkMode ? "dark" : ""
        }`}>
          <div className="rounded-lg shadow-xl overflow-hidden">
            {/* Chat Header */}
            <div className={`p-4 ${
              darkMode ? "bg-gray-800 text-white" : "bg-emerald-600 text-white"
            }`}>
              <h3 className="font-semibold">Chat Support</h3>
            </div>

            {/* Chat Messages */}
            <div className={`h-96 overflow-y-auto p-4 ${
              darkMode ? "bg-gray-900 text-gray-100" : "bg-white"
            }`}>
              {/* Add your chat messages here */}
            </div>

            {/* Chat Input */}
            <div className={`p-4 border-t ${
              darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"
            }`}>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className={`flex-1 p-2 rounded-lg ${
                    darkMode 
                      ? "bg-gray-700 text-white border-gray-600" 
                      : "bg-white border-gray-300"
                  } border focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                />
                <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-300">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;