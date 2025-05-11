import { useState } from "react";
import {
  FaApple,
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <footer
        className={`pt-20 pb-10 ${
          darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {/* Company Info */}
            <div>
              <div className="text-2xl font-bold text-emerald-600 mb-4">
                <i className="fas fa-kaaba mr-2"></i>
                <span>হজ আছে</span>
              </div>
              <p className="mb-4">
                আপনার আধ্যাত্মিকভাবে পূর্ণ হজ এবং উমরাহ অভিজ্ঞতার জন্য আপনার
                বিশ্বস্ত অংশীদার বিস্তৃত পরিষেবাগুলি এবং বিশেষজ্ঞ নির্দেশনার
                সাথে।
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white cursor-pointer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white cursor-pointer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white cursor-pointer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white cursor-pointer"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">দ্রুত লিঙ্ক</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    হোম
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    হজ প্যাকেজ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    উমরাহ প্যাকেজ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    পরিষেবাসমূহ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    রিসোর্স
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    আমাদের সম্পর্কে
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    যোগাযোগ
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold mb-4">রিসোর্স</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    হজ গাইড
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    উমরাহ গাইড
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    নামাজের সময়সূচী
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    ভিসা প্রয়োজনীয়তা
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    স্বাস্থ্য ও নিরাপত্তা
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    প্রশ্নোত্তর
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    ব্লগ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">যোগাযোগ করুন</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3 text-emerald-600"></i>
                  <span>হোসেন মার্কেট, উত্তর বাড্ডা, ঢাকা, বাংলাদেশ</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone-alt mr-3 text-emerald-600"></i>
                  <span>+৮৮০ ১২৩৪৫৬৭৮৯১</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-emerald-600"></i>
                  <span>info@hajjease.com</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-headset mr-3 text-emerald-600"></i>
                  <span>24/7 Support: +৮৮০ ১২৩৪৫৬৭৮৯১</span>
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="text-lg font-bold mb-2">
                  আমাদের অ্যাপ ডাউনলোড করুন
                </h4>
                <div className="flex space-x-2">
                  <a href="#" className="cursor-pointer">
                    <div
                      className={`flex items-center px-3 py-2 rounded-lg ${
                        darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      <FaApple className="text-xl mr-2" />
                      <div>
                        <div className="text-xs">ডাউনলোড করুন</div>
                        <div className="font-medium">App Store</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="cursor-pointer">
                    <div
                      className={`flex items-center px-3 py-2 rounded-lg ${
                        darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      <FaGooglePlay className="text-xl mr-2" />
                      <div>
                        <div className="text-xs">ডাউনলোড করুন</div>
                        <div className="font-medium">Google Play</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-600">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>&copy; 2025 হজ আছে. All rights reserved.</p>
              </div>
              <div className="flex flex-wrap justify-center space-x-4">
                <a
                  href="#"
                  className="hover:text-emerald-600 transition-colors mb-2 cursor-pointer"
                >
                  পরিষেবার শর্তাবলী
                </a>
                <a
                  href="#"
                  className="hover:text-emerald-600 transition-colors mb-2 cursor-pointer"
                >
                  গোপনীয়তা নীতি
                </a>
                <a
                  href="#"
                  className="hover:text-emerald-600 transition-colors mb-2 cursor-pointer"
                >
                  রিফান্ড নীতি
                </a>
                <a
                  href="#"
                  className="hover:text-emerald-600 transition-colors mb-2 cursor-pointer"
                >
                  লাইসেন্সিং
                </a>
              </div>
              <div className="flex space-x-2 mt-4 md:mt-0">
                <FaCcVisa className="text-2xl" />
                <FaCcMastercard className="text-2xl" />
                <FaCcPaypal className="text-2xl" />
                <FaCcApplePay className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
