import React, { useState } from "react";
import { FaComments } from "react-icons/fa";

const ChatWidget = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <div
        className={`fixed bottom-6 right-6 z-50 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } rounded-full shadow-lg cursor-pointer`}
      >
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center text-white">
            <i className="fas fa-comments text-xl"></i>
            <FaComments className="text-xl" />
          </div>
          <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
