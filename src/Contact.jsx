import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import contactHero from "./assets/images/contact-hero.jpg";

const ContactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: "ঠিকানা",
    info: "হুসাইন মার্কেট, উত্তর বাড্ডা, ঢাকা, বাংলাদেশ",
  },
  {
    icon: <FaPhoneAlt />,
    title: "ফোন",
    info: "+966 12 345 6789",
    subInfo: "+966 12 345 6780",
  },
  {
    icon: <FaEnvelope />,
    title: "ইমেইল",
    info: "info@hajjumrah.com",
    subInfo: "support@hajjumrah.com",
  },
  {
    icon: <FaWhatsapp />,
    title: "হোয়াটসঅ্যাপ",
    info: "+880 1712-345678",
  },
];

const services = [
  "ভিসা প্রক্রিয়াকরণ",
  "পরিবহন",
  "আবাসন",
  "গাইডেড ট্যুর",
  "ভ্রমণ বীমা",
  "মেডিকেল সহায়তা",
  "কাস্টম প্যাকেজ",
  "অন্যান্য",
];

const Contact = () => {
  return (
    <div className="min-h-screen  bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div
          className="h-[80vh] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${contactHero})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-emerald-900/70">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  আপনার <span className="text-emerald-400">পবিত্র যাত্রা</span> শুরু করুন
                </h1>
                <p className="text-xl text-gray-200">
                  আমাদের বিশেষজ্ঞ টিম আপনার হজ্জ ও উমরাহ যাত্রা সহজ করতে সর্বদা প্রস্তুত
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto py-5 -mt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ContactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.info}</p>
                  {item.subInfo && (
                    <p className="text-gray-600 text-sm">{item.subInfo}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form & Map */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left - Form */}
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">যোগাযোগ ফরম</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">নাম</label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="আপনার নাম"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ইমেইল</label>
                    <input
                      type="email"
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="আপনার ইমেইল"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">পরিষেবা</label>
                  <div className="relative">
                    <select className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none">
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">বার্তা</label>
                  <textarea
                    rows="4"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="আপনার বার্তা লিখুন..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-300"
                >
                  বার্তা পাঠান
                </button>
              </form>
            </div>

            {/* Right - Map and Social */}
            <div className="bg-gray-50 p-8 lg:p-12">
              <div className="h-[300px] mb-8 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0233124977713!2d90.42336531498136!3d23.781530784574367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7715a40c603%3A0xe241c9e39d19f047!2sNorth%20Badda%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1651913914975!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">অফিস চলাকালীন সময়</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between">
                    <span>শনিবার - বৃহস্পতিবার</span>
                    <span>সকাল ৯টা - সন্ধ্য ৬টা</span>
                  </p>
                  <p className="flex justify-between">
                    <span>শুক্রবার</span>
                    <span>বন্ধ</span>
                  </p>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">সামাজিক মাধ্যমে আমরা</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition">
                      <FaFacebook />
                    </a>
                    <a href="#" className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition">
                      <FaInstagram />
                    </a>
                    <a href="#" className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition">
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
