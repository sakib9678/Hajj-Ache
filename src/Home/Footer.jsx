import { useState } from "react";
import {
  FaApple,
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaEnvelope,
  FaFacebookF,
  FaGooglePlay,
  FaHeadset,
  FaInstagram,
  FaKaaba,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import footer from "../assets/images/footer1.jpg";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <footer
        style={{
          backgroundImage: `url(${footer})`,
          backgroundSize: "cover",
          backgroundPosition: "",
          position: "relative",
        }}
        className="pt-20 pb-10 text-gray-100"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/85 z-0"></div>

        {/* Main content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {/* Company Info */}
            <div>
              <div className=" font-bold text-emerald-400 mb-4 flex items-center">
                <FaKaaba className="text-4xl mr-2" />

                <span className="text-2xl">আল ইফাদা</span>
              </div>
              <p className="mb-4 text-gray-300">
                আপনার আধ্যাত্মিকভাবে পূর্ণ হজ এবং উমরাহ অভিজ্ঞতার জন্য আপনার
                বিশ্বস্ত অংশীদার বিস্তৃত পরিষেবাগুলি এবং বিশেষজ্ঞ নির্দেশনার
                সাথে।
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-white cursor-pointer transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-white cursor-pointer transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-white cursor-pointer transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-white cursor-pointer transition-colors"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-emerald-400">
                দ্রুত লিঙ্ক
              </h4>
              <ul className="space-y-2">
                {[
                  { name: "হোম", link: "/" }, 
                  { name: "হজ প্যাকেজ", link: "hajj-packages" },
                  { name: "উমরাহ প্যাকেজ", link: "umrah-packages" },
                  { name: "আমাদের সম্পর্কে", link: "#" },
                  { name: "যোগাযোগ", link: "contact" },
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={item.link}
                      className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-emerald-400">
                রিসোর্স
              </h4>
              <ul className="space-y-2">
                {[
                  { name: "হজ গাইড", link: "/guide/hajj-guideline" },
                  { name: "উমরাহ গাইড", link: "/guide/umrah-guideline" },
                  { name: "ভিসা প্রক্রিয়াকরণ", link: "/service/visa-processing" },
                  { name: "এয়ার টিকেটিং", link: "/service/air-ticketing" },
                  { name: "অ্যাফিলিয়েট যোগদান", link: "/affiliate" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-emerald-400">
                যোগাযোগ করুন
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3 text-emerald-400" />
                  <span>হোসেন মার্কেট, উত্তর বাড্ডা, ঢাকা, বাংলাদেশ</span>
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className=" mr-3 text-emerald-400" />
                  <span>+৮৮০ ১২৩৪৫৬৭৮৯১</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-3 text-emerald-400" />
                  <span>info@hajjease.com</span>
                </li>
                <li className="flex items-center">
                  <FaHeadset className="mr-3 text-emerald-400" />
                  <span>24/7 Support: +৮৮০ ১২৩৪৫৬৭৮৯১</span>
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="text-lg font-bold mb-2 text-emerald-400">
                  আমাদের অ্যাপ ডাউনলোড করুন
                </h4>
                <div className="flex space-x-2">
                  <button onClick={() => setShowPopup(true)} className="cursor-pointer">
                    <div className="flex items-center px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                      <FaApple className="text-xl mr-2" />
                      <div>
                        <div className="text-xs">ডাউনলোড করুন</div>
                        <div className="font-medium">App Store</div>
                      </div>
                    </div>
                  </button>
                  <button onClick={() => setShowPopup(true)} className="cursor-pointer">
                    <div className="flex items-center px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                      <FaGooglePlay className="text-xl mr-2" />
                      <div>
                        <div className="text-xs">ডাউনলোড করুন</div>
                        <div className="font-medium">Google Play</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-300">
                  &copy; 2025 আল ইফাদা ট্রাভেলস ইন্টারন্যাশনাল লিমিটেড | All rights reserved.
                </p>
              </div>
              <div className="flex flex-wrap justify-center space-x-4">
                {[
                  "পরিষেবার শর্তাবলী",
                  "গোপনীয়তা নীতি",
                  "রিফান্ড নীতি",
                  "লাইসেন্সিং",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-300 hover:text-emerald-400 transition-colors mb-2 cursor-pointer"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="flex space-x-2 mt-4 md:mt-0 text-gray-300">
                <FaCcVisa className="text-2xl" />
                <FaCcMastercard className="text-2xl" />
                <FaCcPaypal className="text-2xl" />
                <FaCcApplePay className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
        {showPopup && (
          <div
            className="fixed inset-0 bg-black/70  flex items-center justify-center z-50"
            onClick={handlePopupClose}
          >
            <div
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl relative max-w-md w-full mx-4 transform transition-all duration-300 scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-4 -right-4 bg-emerald-500 text-white rounded-full h-8 w-8 flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200 shadow-lg"
                onClick={handlePopupClose}
              >
                ✕
              </button>
              
              <div className="text-center">
                <div className="mb-6">
                  <FaKaaba className="text-6xl text-emerald-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    আল ইফাদা অ্যাপ
                  </h2>
                  <p className="text-emerald-500 text-lg font-semibold">
                    খুব শীঘ্রই আসছে
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    আপনার হজ্ব ও উমরাহ যাত্রা সহজ করতে আসছে দারুণ সব ফিচার:
                  </p>
                  <ul className="text-left space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <span className="bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded-full mr-2">✓</span>
                      লাইভ ট্র্যাকিং
                    </li>
                    <li className="flex items-center">
                      <span className="bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded-full mr-2">✓</span>
                      ডিজিটাল গাইড
                    </li>
                    <li className="flex items-center">
                      <span className="bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded-full mr-2">✓</span>
                      ২৪/৭ সাপোর্ট
                    </li>
                  </ul>
                </div>

                <button
                  className="w-full py-3 bg-emerald-500 text-white font-medium rounded-xl shadow-md hover:bg-emerald-600 transition-colors duration-200"
                  onClick={handlePopupClose}
                >
                  ঠিক আছে
                </button>
              </div>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
};

export default Footer;
