import React, { useEffect, useState, useRef } from "react";
import logo from "../assets/images/logo.png";
import {
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
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMobileNavClick = (path) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    window.location.href = path;
  };

  // Navigation data
  const navItems = {
    packages: {
      title: "প্যাকেজসমূহ",
      items: [
        { label: "ওমরাহ প্যাকেজসমূহ", path: "/umrah-packages" },
        { label: "হজ্ব প্যাকেজসমূহ", path: "/hajj-packages" },
      ],
    },
    services: {
      title: "সেবাসমূহ",
      items: [
        { label: "ভিসা ও ম্যানপাওয়ার", path: "/service/visa-processing" },
        { label: "এয়ার টিকেটিং", path: "/service/air-ticketing" },
      ],
    },
    guides: {
      title: "গাইড",
      items: [
        { label: "উমরাহ গাইড", path: "/guide/umrah-guideline" },
        { label: "হজ্ব গাইড", path: "/guide/hajj-guideline" },
      ],
    },
  };

  return (
    <nav
      ref={navRef}
      className={`fixed w-full py-2 top-0 z-50  dark:bg-gray-900 dark:text-[#059669] ${
        isScrolled ? "bg-white shadow-lg dark:bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Main Navbar Content */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/">
            <img src={logo} alt="Logo" className="h-14" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="hover:text-emerald-600">
              হোম
            </a>

            {/* Desktop Dropdowns */}
            {Object.entries(navItems).map(([key, { title, items }]) => (
              <div key={key} className="relative">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="flex items-center space-x-1 hover:text-emerald-600"
                >
                  <span>{title}</span>
                  <FaCaretDown
                    className={`transition-transform ${
                      activeDropdown === key ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === key && (
                  <div className="absolute z-10 mt-2 w-56 bg-white dark:bg-gray-900 rounded-md shadow-lg">
                    {items.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2 text-gray-700  hover:text-emerald-600"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a href="/about" className="hover:text-emerald-600">
              আমাদের সম্পর্কে
            </a>
            <a href="/contact" className="hover:text-emerald-600">
              যোগাযোগ
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {darkMode ? (
                <FaSun className="text-xl" />
              ) : (
                <FaMoon className="text-xl" />
              )}
            </button>
            <FaUserCircle className="text-xl cursor-pointer" />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
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
        {isMobileMenuOpen && (
          <div className="md:hidden p-4 bg-white dark:bg-gray-900">
            <a
              onClick={() => handleMobileNavClick("/")}
              className="block py-2 hover:text-emerald-600"
            >
              হোম
            </a>

            {/* Mobile Dropdowns */}
            {Object.entries(navItems).map(([key, { title, items }]) => (
              <div key={key} className="py-2">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="flex items-center justify-between w-full hover:text-emerald-600"
                >
                  <span>{title}</span>
                  <FaCaretDown
                    className={`transition-transform ${
                      activeDropdown === key ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === key && (
                  <div className="pl-4 mt-2 space-y-2">
                    {items.map((item) => (
                      <a
                        key={item.path}
                        onClick={() => handleMobileNavClick(item.path)}
                        className="block py-1 hover:text-emerald-600 cursor-pointer"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              onClick={() => handleMobileNavClick("/about")}
              className="block py-2 hover:text-emerald-600"
            >
              আমাদের সম্পর্কে
            </a>
            <a
              onClick={() => handleMobileNavClick("/contact")}
              className="block py-2 hover:text-emerald-600"
            >
              যোগাযোগ
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
