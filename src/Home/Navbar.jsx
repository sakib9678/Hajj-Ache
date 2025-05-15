import React, { useEffect, useState, useRef } from "react";
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
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const packagesRef = useRef(null);
  const servicesRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (packagesRef.current && !packagesRef.current.contains(event.target)) {
        setIsPackagesOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 dark:text-[#059669] ${
        isScrolled ? "bg-white shadow-lg dark:bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <FaKaaba className="text-2xl sm:text-3xl lg:text-4xl text-emerald-600" />
              <span className="text-xl sm:text-2xl font-bold text-emerald-600">হজ্ব আছে</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a href="/" className="nav-link hover:text-[#059669]">
              হোম
            </a>

            <div className="relative inline-block text-left" ref={packagesRef}>
              <div className="">
                <button
                  onClick={() => setIsPackagesOpen(!isPackagesOpen)}
                  className="flex items-center justify-center nav-link hover:text-[#059669]"
                >
                  <span>প্যাকেজসমূহ</span>
                  <FaCaretDown className="ml-2" />
                </button>
              </div>

              {isPackagesOpen && (
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
                      href="/hajj-packages"
                      className="block px-4 py-2  text-gray-700 hover:text-[#059669]"
                    >
                      হজ্ব প্যাকেজসমূহ
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="relative inline-block text-left" ref={servicesRef}>
              <div className="">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-center nav-link hover:text-[#059669]"
                >
                  <span>সেবাসমূহ</span>
                  <FaCaretDown className="ml-2" />
                </button>
              </div>

              {isServicesOpen && (
                <div className="absolute z-10 mt-2 w-56 origin-top-right rounded-md  bg-white ring-black ">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="service/visa-processing"
                      className="block px-4 py-2  text-gray-700 hover:text-[#059669]"
                    >
                      ভিসা ও ম্যানপাওয়ার
                    </a>
                    <a
                      href="/service/air-ticketing"
                      className="block px-4 py-2  text-gray-700 hover:text-[#059669]"
                    >
                      এয়ার টিকেটিং
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a href="/umrah-guideline" className="nav-link hover:text-[#059669]">
              গাইড
            </a>
            <a href="/about" className="nav-link hover:text-[#059669]">
              আমাদের সম্পর্কে
            </a>
            <a href="/contact" className="nav-link hover:text-[#059669]">
              যোগাযোগ
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
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </button>

            {/* User Profile */}
            <div className="cursor-pointer text-gray-800 dark:text-gray-200">
              <FaUserCircle className="text-xl" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
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
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-3 space-y-2">
            <a href="/" className="block py-2 hover:text-emerald-600">হোম</a>
            <a href="/services" className="block py-2 hover:text-emerald-600">সেবাসমূহ</a>
            <a href="/umrah-guideline" className="block py-2 hover:text-emerald-600">গাইড</a>
            <a href="/about" className="block py-2 hover:text-emerald-600">আমাদের সম্পর্কে</a>
            <a href="/contact" className="block py-2 hover:text-emerald-600">যোগাযোগ</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
