import React, { useEffect, useState } from "react";
import { FaChevronDown, FaMoon, FaSun, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? darkMode
              ? "bg-gray-900 shadow-lg"
              : "bg-white shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto ">
          <div className="p-5 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-emerald-600">
                <i className="fas fa-kaaba mr-2"></i>
                <span>হজ আছে</span>
              </div>
            </div>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="font-medium hover:text-emerald-500 transition-colors cursor-pointer whitespace-nowrap"
              >
                হোম
              </a>
              <a
                href="/package"
                className="font-medium hover:text-emerald-500 transition-colors cursor-pointer whitespace-nowrap"
              >
                প্যাকেজসমূহ
              </a>
              <a
                href="/service"
                className="font-medium hover:text-emerald-500 transition-colors cursor-pointer whitespace-nowrap"
              >
                সেবাসমূহ
              </a>
              <a
                href=""
                className="font-medium hover:text-emerald-500 transition-colors cursor-pointer whitespace-nowrap"
              >
                গাইড
              </a>
              <a
                href="#"
                className="font-medium hover:text-emerald-500 transition-colors cursor-pointer whitespace-nowrap"
              >
                আমাদের সম্পর্কে
              </a>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`py-2 pl-10 pr-4 rounded-full text-sm border-none focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    darkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              </div>

              {/* Language Switcher */}
              <div className="cursor-pointer">
                <span className="px-2 py-1 rounded-full border border-gray-300 text-sm flex items-center">
                  <span>EN</span>
                  <FaChevronDown className="ml-1 text-xs" />
                </span>
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full !rounded-button cursor-pointer ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                {/* <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i> */}
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>

              {/* User Profile */}
              <div className="cursor-pointer">
                <FaUserCircle className="text-xl" />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden cursor-pointer">
                <i className="fas fa-bars text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
