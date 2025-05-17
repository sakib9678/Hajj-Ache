import React from "react";
import {
  FaUserTie,
  FaPhone,
  FaEnvelope,
  FaUniversity,
  FaArrowRight,
} from "react-icons/fa";
import islamicScholar1 from "../assets/images/islamic-scholar1.png";
import islamicScholar2 from "../assets/images/islamic-scholar2.png";
import islamicScholar3 from "../assets/images/islamic-scholar3.jpg";

const consultants = [
  {
    id: 1,
    name: "মুফতি আব্দুল্লাহ আল-আমীন",
    designation: "প্রধান শরীআহ উপদেষ্টা",
    qualification: "দাওরায়ে হাদীস, জামিয়া ইসলামিয়া",
    expertise: ["হজ্ব ও ওমরাহ বিশেষজ্ঞ", "ইসলামিক স্কলার"],
    contact: {
      phone: "+880 1XXX-XXXXXX",
      email: "abdullah@example.com",
    },
    image: islamicScholar1,
  },
  {
    id: 2,
    name: "মুফতি আহমাদ হাসান",
    designation: "শরীআহ উপদেষ্টা",
    qualification: "তাখাসসুস ফিল ফিকহ, মাদিনা ইসলামিক ইউনিভার্সিটি",
    expertise: ["ইসলামিক ফিকহ বিশেষজ্ঞ", "হজ্ব প্রশিক্ষক"],
    contact: {
      phone: "+880 1XXX-XXXXXX",
      email: "ahmad@example.com",
    },
    image: islamicScholar2,
  },
  {
    id: 3,
    name: "মিজানুর রহমান আজহারী",
    designation: "সহকারী শরীআহ উপদেষ্টা",
    qualification: "আলিম, দারুল উলূম দেওবন্দ",
    expertise: ["মানাসিকে হজ্ব বিশেষজ্ঞ", "ইসলামিক গাইড"],
    contact: {
      phone: "+880 1XXX-XXXXXX",
      email: "nur@example.com",
    },
    image: islamicScholar3,
  },
];

const Consultance = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-emerald-600">
            আমাদের সম্মানিত শরী'আহ উপদেষ্টাগণ
          </h2>
          <div className="w-16 md:w-24 h-1 bg-emerald-500 mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            অভিজ্ঞ ও যোগ্য শরী'আহ উপদেষ্টাগণ আপনার হজ্ব ও ওমরাহ সংক্রান্ত সকল
            প্রশ্নের উত্তর দিতে প্রস্তুত
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-4">
          {consultants.map((consultant) => (
            <div
              key={consultant.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img
                  src={consultant.image}
                  alt={consultant.name}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 z-20">
                  <p className="text-white text-xs md:text-sm font-semibold px-2 md:px-3 py-1 bg-emerald-600 rounded-full inline-block">
                    {consultant.designation}
                  </p>
                </div>
              </div>

              <div className="px-4 md:px-8 py-4 md:py-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 group-hover:text-emerald-600 transition-colors">
                  {consultant.name}
                </h3>

                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 mb-2">
                  <FaUniversity className="text-emerald-500 text-xl" />
                  <p className="text-sm">{consultant.qualification}</p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    বিশেষজ্ঞতা:
                  </h4>
                  <ul className="space-y-1">
                    {consultant.expertise.map((exp, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 rotate-45 bg-emerald-500"></div>
                        <span className="text-sm">{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col space-y-1">
                    <a
                      href={`tel:${consultant.contact.phone}`}
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-emerald-600 transition-colors"
                    >
                      <FaPhone className="text-emerald-500" />
                      <span className="text-sm">
                        {consultant.contact.phone}
                      </span>
                    </a>
                    <a
                      href={`mailto:${consultant.contact.email}`}
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-emerald-600 transition-colors"
                    >
                      <FaEnvelope className="text-emerald-500" />
                      <span className="text-sm">
                        {consultant.contact.email}
                      </span>
                    </a>
                  </div>
                </div>

                <button className="w-full mt-6 md:mt-8 text-sm md:text-base bg-emerald-50 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 py-3 md:py-4 rounded-xl font-medium group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  যোগাযোগ করুন
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultance;
