import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-24 right-8 p-3 bg-[#059669] h-12 w-12 text-white shadow-lg hover:bg-gray-900 transition"
    >
      <FaArrowUp className="text-xl"/>
    </button>
  );
};

export default ScrollToTopButton;
