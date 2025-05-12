import React, { useEffect, useState } from "react";
import {
  FaChevronDown,
  FaMoon,
  FaSun,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaSearch,
  FaKaaba,
  FaCaretDown,
} from "react-icons/fa";
import { useDarkMode } from "../DakModeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg dark:bg-gray-900" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto">
          <div className="p-5 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="/"
                className=" font-bold text-emerald-600 flex items-center"
              >
                <FaKaaba className="text-4xl mr-2" />
                <span className="text-2xl">হজ্ব আছে</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8  dark:text-white text-lg">
              <a href="/" className="nav-link hover:text-[#059669]">
                হোম
              </a>

              <div className="relative inline-block text-left">
                <div className="">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-center nav-link hover:text-[#059669]"
                  >
                    <span>প্যাকেজসমূহ</span>
                    <FaCaretDown className="ml-2" />
                  </button>
                </div>

                {isOpen && (
                  <div className="absolute z-10 mt-2 w-56 origin-top-right rounded-md  bg-white ring-black ">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="/umrah-packages"
                        className="block px-4 py-2  text-gray-700 hover:text-[#059669]"
                      >
                        ওমরাহ প্যাকেজসমূহ
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2  text-gray-700 hover:text-[#059669]"
                      >
                        হজ্ব প্যাকেজসমূহ
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <a href="/service" className="nav-link hover:text-[#059669]">
                সেবাসমূহ
              </a>
              <a href="" className="nav-link hover:text-[#059669]">
                গাইড
              </a>
              <a href="#" className="nav-link hover:text-[#059669]">
                আমাদের সম্পর্কে
              </a>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Search - Hidden on mobile */}
              <div className="hidden md:block relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="py-2 pl-10 pr-4 rounded-full text-sm border-none focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>

              {/* User Profile */}
              <div className="cursor-pointer text-gray-800 dark:text-gray-200">
                <FaUserCircle className="text-xl" />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="text-xl" />
                ) : (
                  <FaBars className="text-xl" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "max-h-screen opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            }`}
          >
            <div className="px-4 py-3 space-y-4 bg-white dark:bg-gray-900 shadow-lg">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 pl-10 pr-4 rounded-full text-sm border-none focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-3 dark:text-white">
                <a href="/" className="mobile-nav-link">
                  হোম
                </a>
                <div className="relative inline-block text-left">
                <div className="">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-center nav-link hover:text-[#059669]"
                  >
                    <span>প্যাকেজসমূহ</span>
                    <FaCaretDown className="ml-2" />
                  </button>
                </div>

                {isOpen && (
                  <div className="absolute z-10 mt-2 w-56 origin-top-right rounded-md  bg-white ring-black ">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="/umrah-packages"
                        className="block px-4 py-2  text-gray-700 hover:text-[#059669]"
                      >
                        ওমরাহ প্যাকেজসমূহ
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2  text-gray-700 hover:text-[#059669]"
                      >
                        হজ্ব প্যাকেজসমূহ
                      </a>
                    </div>
                  </div>
                )}
              </div>
                <a href="/service" className="mobile-nav-link">
                  সেবাসমূহ
                </a>
                <a href="" className="mobile-nav-link">
                  গাইড
                </a>
                <a href="#" className="mobile-nav-link">
                  আমাদের সম্পর্কে
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
