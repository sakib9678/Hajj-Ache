import React, { useState } from "react";
import hotel from "../assets/images/hotel.jpg";
import visa from "../assets/images/visa.png";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import hajjHero from "../assets/images/hajj-packages-hero.avif";
import {
  FaStar,
  FaUsers,
  FaPlaneDeparture,
  FaCertificate,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HajjPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      name: "ইকোনমি প্যাকেজ",
      price: "৮,৫০,০০০",
      duration: "৩০-৩৫ দিন",
      image: hotel,
      features: [
        "মক্কায় ৩ স্টার হোটেল (হারাম থেকে ১.৫ কিমি)",
        "মদিনায় ৩ স্টার হোটেল (মসজিদে নববী থেকে ৮০০ মিটার)",
        "মিনা-আরাফাতে তাঁবুতে থাকার ব্যবস্থা",
        "ঢাকা-জেদ্দা-ঢাকা বিমান টিকেট",
        "সকল ট্রান্সপোর্টেশন",
        "সকল ভিসা প্রসেসিং",
        "হজ্জ গাইড এবং দৈনিক প্রশিক্ষণ",
      ],
    },
    {
      id: 2,
      name: "প্রিমিয়াম প্যাকেজ",
      price: "১২,৫০,০০০",
      duration: "৩০-৩৫ দিন",
      image: hotel,
      features: [
        "মক্কায় ৪ স্টার হোটেল (হারাম থেকে ৮০০ মিটার)",
        "মদিনায় ৪ স্টার হোটেল (মসজিদে নববী থেকে ৪০০ মিটার)",
        "ভিআইপি তাঁবুতে থাকার ব্যবস্থা",
        "বিজনেস ক্লাস টিকেট",
        "এসি বাস পরিবহন",
        "প্রিমিয়াম ক্যাটারিং",
        "২৪/৭ মেডিকেল সাপোর্ট",
      ],
    },
    {
      id: 3,
      name: "ভিআইপি প্যাকেজ",
      price: "১৬,৫০,০০০",
      duration: "৩০-৩৫ দিন",
      image: hotel,
      features: [
        "মক্কায় ৫ স্টার হোটেল (হারাম থেকে ৩০০ মিটার)",
        "মদিনায় ৫ স্টার হোটেল (মসজিদে নববী থেকে ২০০ মিটার)",
        "VIP তাঁবুতে থাকার ব্যবস্থা",
        "বিজনেস ক্লাস টিকেট",
        "লাক্সারি বাস পরিবহন",
        "স্পেশাল ক্যাটারিং",
        "পারসোনাল হজ্জ গাইড",
      ],
    },
  ];

  const requirements = [
    {
      title: "বৈধ পাসপোর্ট (মেয়াদ কমপক্ষে ৮ মাস)",
      icon: (
        <svg
          className="w-6 h-6 text-emerald-600 dark:text-emerald-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
          />
        </svg>
      ),
    },
    {
      title: "জাতীয় পরিচয়পত্রের কপি",
      icon: (
        <svg
          className="w-6 h-6 text-emerald-600 dark:text-emerald-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "হজ্জ রেজিস্ট্রেশন কার্ড",
      icon: (
        <svg
          className="w-6 h-6 text-emerald-600 dark:text-emerald-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "ভ্যাকসিন সার্টিফিকেট",
      icon: (
        <svg
          className="w-6 h-6 text-emerald-600 dark:text-emerald-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "মেনিনজাইটিস টিকা সনদ",
      icon: (
        <svg
          className="w-6 h-6 text-emerald-600 dark:text-emerald-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "পাসপোর্ট সাইজ ছবি (সাদা ব্যাকগ্রাউন্ড)",
      icon: (
        <svg
          className="w-6 h-6 text-emerald-600 dark:text-emerald-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      question: "হজ্জের খরচ কত?",
      answer:
        "২০২৫ সালের হজ্জ প্যাকেজের মূল্য সর্বনিম্ন ৮,৫০,০০০ টাকা থেকে শুরু। এর মধ্যে রয়েছে ফ্লাইট, হোটেল, ভিসা, পরিবহন এবং অন্যান্য সেবা।",
    },
    {
      question: "হজ্জ রেজিস্ট্রেশন কিভাবে করব?",
      answer:
        "হজ্জ রেজিস্ট্রেশনের জন্য প্রথমে ধর্ম মন্ত্রণালয়ের ওয়েবসাইটে গিয়ে প্রি-রেজিস্ট্রেশন করতে হবে। এরপর নির্ধারিত ব্যাংকে টাকা জমা দিয়ে রেজিস্ট্রেশন সম্পন্ন করতে হবে।",
    },
    {
      question: "হজ্জের জন্য শারীরিক যোগ্যতা কি?",
      answer:
        "হজ্জ পালনের জন্য শারীরিকভাবে সুস্থ থাকতে হবে। দীর্ঘ হাঁটা, গরম আবহাওয়া সহ্য করার ক্ষমতা থাকতে হবে। কোনো জটিল রোগ থাকলে ডাক্তারের পরামর্শ নিতে হবে।",
    },
    {
      question: "মহিলাদের জন্য বিশেষ শর্ত কি?",
      answer:
        "৪৫ বছরের কম বয়সী মহিলাদের জন্য মাহরাম (স্বামী/পিতা/ভাই/পুত্র) আবশ্যক। ৪৫+ বয়সী মহিলারা মাহরাম ছাড়া গ্রুপের সাথে যেতে পারেন।",
    },
    {
      question: "হজ্জ প্রশিক্ষণ কখন শুরু হয়?",
      answer:
        "হজ্জ যাত্রার ২-৩ মাস আগে থেকে প্রশিক্ষণ শুরু হয়। সপ্তাহে দুইদিন করে মোট ১২-১৫টি ক্লাস নেওয়া হয়। প্রশিক্ষণে হজ্জের সকল নিয়ম-কানুন শেখানো হয়।",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <img
          src={hajjHero}
          alt="মসজিদুল হারাম"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                হজ্জ প্যাকেজ ২০২৫
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                সরকার অনুমোদিত লাইসেন্সপ্রাপ্ত হজ্জ এজেন্সি | নিবন্ধন নং:
                HA-XXXX
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                হজ্জ রেজিস্ট্রেশন করুন
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats/Social Proof Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FaUsers className="text-4xl text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                ৫০০০+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                সন্তুষ্ট যাত্রী
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FaPlaneDeparture className="text-4xl text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                ১০+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">বছরের অভিজ্ঞতা</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FaStar className="text-4xl text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                ৪.৯/৫
              </h3>
              <p className="text-gray-600 dark:text-gray-400">গ্রাহক রিভিউ</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FaCertificate className="text-4xl text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                ১০০%
              </h3>
              <p className="text-gray-600 dark:text-gray-400">সরকার অনুমোদিত</p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section className="py-10 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#059669] dark:text-emerald-400">
              হজ্জ প্যাকেজ ২০২৫
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              সরকার নির্ধারিত মূল্যে সর্বোচ্চ সেবা নিশ্চিত করা হয়
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    {pkg.name}
                  </h3>
                  <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                    ৳ {pkg.price}
                  </p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 text-emerald-500 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate("/contact");
                    }}
                    className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-all"
                  >
                    প্যাকেজ বুক করুন
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-10 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                হজ্জ ভিসার প্রয়োজনীয় ডকুমেন্টস
              </h2>
              <div className="mt-8 space-y-6">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="w-6 h-6 text-emerald-600 dark:text-emerald-300">
                        {req.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        {req.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={visa}
                alt="হজ্জ ভিসা ডকুমেন্টস"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Guide Section */}
      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#059669] dark:text-gray-100">
              হজ্জ গাইড ভিডিও
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              হজ্জের সম্পূর্ণ প্রক্রিয়া সম্পর্কে বিস্তারিত জানুন
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/"
                title="হজ্জ গাইড ভিডিও"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                হজ্জের সম্পূর্ণ গাইডলাইন
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    হজ্জের সকল রুকন সম্পর্কে বিস্তারিত আলোচনা
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    প্রয়োজনীয় দোয়া ও যিকির শিক্ষা
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    হজ্জ যাত্রার প্রস্তুতি সম্পর্কে গুরুত্বপূর্ণ টিপস
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#059669] dark:text-gray-100">
              সচরাচর জিজ্ঞাসা
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              হজ্জ সংক্রান্ত আপনার সকল প্রশ্নের উত্তর
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">
                    {faq.question}
                  </h3>

                  <svg
                    className={`w-6 h-6 text-emerald-600 transform transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ${
                    openFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-emerald-600 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">যোগাযোগ করুন</h2>
          <p className="text-lg text-white/80 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            বিস্তারিত তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-colors cursor-pointer flex items-center justify-center">
              <FiPhone className="text-xl mr-2" />
              <span>কল করুন: ০১৭১১-১২৩৪৫৬</span>
            </button>
            <button className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold transition-colors cursor-pointer flex items-center justify-center">
              <MdOutlineEmail className="text-xl mr-2" />
              <span>ইমেইল করুন</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HajjPackage;
