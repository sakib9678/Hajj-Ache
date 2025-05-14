import React, { useState } from "react";
import { FiArrowRight, FiCheck, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import ihramImage from "../assets/images/ihram.jpg";
import tawafImage from "../assets/images/tawaf.jpg";
import saiImage from "../assets/images/tawaf.jpg";
import halqImage from "../assets/images/halq.png";

const UmrahGuideLine = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [activeFaq, setActiveFaq] = useState(null);

  const steps = [
    {
      id: 1,
      title: "ইহরাম (ফরজ)",
      description: "ইহরাম অবস্থায় প্রবেশ করা",
      details: [
        "মীকাত থেকে ইহরামের নিয়ত করুন",
        "পুরুষদের জন্য দুই টুকরা সাদা কাপড়",
        "তালবিয়াহ পাঠ করুন",
        "গোসল করে পবিত্র হোন",
      ],
    },
    {
      id: 2,
      title: "তাওয়াফ (ফরজ)",
      description: "কাবা শরীফের চারপাশে সাত চক্কর",
      details: [
        "হাজরে আসওয়াদ থেকে শুরু করুন",
        "সাত চক্কর সম্পন্ন করুন",
        "প্রতি চক্করে দোয়া পড়ুন",
        "যমযম পান করুন",
      ],
    },
    {
      id: 3,
      title: "সায়ি (ওয়াজিব)",
      description: "সাফা-মারওয়া পাহাড়ে সাত চক্কর",
      details: [
        "সাফা পাহাড় থেকে শুরু করুন",
        "সবুজ আলোর মধ্যে দ্রুত হাঁটুন",
        "প্রতি চক্করে দোয়া করুন",
        "মারওয়ায় শেষ করুন",
      ],
    },
    {
      id: 4,
      title: "চুল মুন্ডন করা (ওয়াজিব)",
      description: "মাথার চুল ছোট করা বা মুন্ডন",
      details: [
        "পুরো মাথার চুল ছোট করুন",
        "অথবা মাথা মুন্ডন করুন",
        "মহিলারা চুলের আগা ছাঁটবেন",
        "এরপর ইহরাম খুলে ফেলুন",
      ],
    },
  ];

  const dos = [
    "ইহরামের পূর্বে গোসল করুন",
    "সর্বদা পবিত্র অবস্থায় থাকুন",
    "নিয়মিত পাঁচ ওয়াক্ত নামাজ আদায় করুন",
    "বেশি বেশি দোয়া করুন",
    "ধৈর্য ধরুন এবং নম্রতা প্রদর্শন করুন",
    "অন্যদের সহযোগিতা করুন",
    "পরিবেশ পরিচ্ছন্ন রাখুন",
  ];

  const donts = [
    "কারও সাথে বিবাদ করবেন না",
    "অনর্থক কথা বলবেন না",
    "কাউকে কষ্ট দেবেন না",
    "ইহরাম অবস্থায় সুগন্ধি ব্যবহার করবেন না",
    "জীবজন্তু শিকার করবেন না",
    "নখ কাটবেন না",
    "চুল কাটবেন না",
  ];

  const faqs = [
    {
      question: "উমরাহ কি ফরজ ইবাদত?",
      answer:
        "না, উমরাহ সুন্নাতে মুয়াক্কাদা। জীবনে একবার উমরাহ করা অত্যন্ত গুরুত্বপূর্ণ সুন্নত।",
      category: "general",
    },
    {
      question: "ইহরাম ছাড়া উমরাহ হবে কি?",
      answer: "না, ইহরাম ছাড়া উমরাহ হবে না। ইহরাম উমরাহর একটি ফরজ রুকন।",
      category: "ihram",
    },
    {
      question: "উমরাহর সময় কোন দোয়া পড়তে হয়?",
      answer:
        "তালবিয়াহ, তাওয়াফের দোয়া, সাফা-মারওয়ার দোয়া সহ বিভিন্ন মাসনুন দোয়া পড়তে হয়।",
      category: "dua",
    },
    {
      question: "মহিলারা কিভাবে ইহরাম পরবেন?",
      answer:
        "মহিলারা তাদের নিয়মিত পোশাকই পরবেন, তবে মুখ ও হাত খোলা রাখতে হবে। সাধারণত যে কোন রঙের সাধারণ পোশাক পরা যাবে।",
      category: "ihram",
    },
  ];

  const getExplanation = (item) => {
    const explanations = {
      "ইহরামের পূর্বে গোসল করুন":
        "ইহরামের পূর্বে গোসল করা সুন্নত। এতে শরীর ও মন পবিত্র হয়।",
      "সর্বদা পবিত্র অবস্থায় থাকুন": "ওযু বজায় রাখুন। প্রয়োজনে গোসল করুন।",
      "নিয়মিত পাঁচ ওয়াক্ত নামাজ আদায় করুন":
        "সময়মত জামাআতে নামাজ আদায় করুন।",
      "বেশি বেশি দোয়া করুন": "বিশেষ করে তাওয়াফ ও সায়ীর সময় দোয়া করুন।",
      "ধৈর্য ধরুন এবং নম্রতা প্রদর্শন করুন": "ভীড় ও কষ্টের সময় ধৈর্য ধরুন।",
      "অন্যদের সহযোগিতা করুন": "প্রয়োজনে অন্য মুসলিমদের সাহায্য করুন।",
      "পরিবেশ পরিচ্ছন্ন রাখুন": "মসজিদুল হারাম ও আশপাশ পরিষ্কার রাখুন।",
    };
    return explanations[item] || "";
  };

  const getDontExplanation = (item) => {
    const explanations = {
      "কারও সাথে বিবাদ করবেন না": "বিবাদ-বিসংবাদ ইবাদতের পরিপন্থী।",
      "অনর্থক কথা বলবেন না": "বেশি কথা বলা থেকে বিরত থাকুন।",
      "কাউকে কষ্ট দেবেন না": "কথা বা কাজে কাউকে কষ্ট দেওয়া থেকে বিরত থাকুন।",
      "ইহরাম অবস্থায় সুগন্ধি ব্যবহার করবেন না": "এটি ইহরামের নিষিদ্ধ কাজ।",
      "জীবজন্তু শিকার করবেন না": "হারাম সীমানায় কোন জীব হত্যা নিষিদ্ধ।",
      "নখ কাটবেন না": "ইহরাম অবস্থায় নিষিদ্ধ।",
      "চুল কাটবেন না": "হালক/কসর না করা পর্যন্ত চুল কাটা নিষিদ্ধ।",
    };
    return explanations[item] || "";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 h-[80vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/18996760/pexels-photo-18996760/free-photo-of-worshippers-around-kaaba.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Kaaba Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative container mx-auto text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#059669]">
            ওমরাহ গাইডলাইন
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            ওমরাহ পালনে করণীয় ও বর্জনীয় বিষয়সমূহ
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all">
            বিস্তারিত জানুন
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className=" mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#059669] dark:text-white">
                ওমরাহ গাইডলাইন - ওমরাহ পালনে করণীয় ও বর্জনীয়
              </h2>
              <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
            </div>

            <div className="space-y-8">
              {/* Main Description */}
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  ওমরাহ একটি আধ্যাত্মিক যাত্রা। এটি এমন একটি সুযোগ যা বিশ্বের
                  ধর্মপ্রাণ মুসলমানদের একত্রিত করে একটি সুমহান ঐতিহ্য উদযাপনের
                  উপলক্ষ তৈরি করে দেয়। ওমরাহ আল্লাহর নৈকট্য অর্জন এবং গুনাহ
                  থেকে মুক্তি লাভের মাধ্যমে আত্নশুদ্ধির সুযোগ তৈরি করে। এটি শুধু
                  একটি আধ্যাত্মিক অভিজ্ঞতা নয়, বরং জীবনের প্রতিটি দিককে শুদ্ধ
                  করার একটি সুযোগ।
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  ওমরাহ পালনে আগ্রহীদের জন্য স্টেপ বাই স্টেপ ওমরাহ গাইডলাইন এবং
                  করণীয় ও বর্জনীয়গুলো এখানে বিস্তারিত আলোচনা করা হল।
                </p>
              </div>

              {/* Agency Info Card */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 mt-8">
                <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">
                  হজ আছে হজ ও ওমরাহ কাফেলা
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  বাংলাদেশের সেরা ওমরাহ ও হজ অ্যাজেন্সি। আমরা ভিসা প্রসেসিং,
                  বিমান টিকিট এবং ওমরাহ প্রশিক্ষণসহ সব ধরনের পরিষেবা প্রদান করি।
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors w-full sm:w-auto justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+880 1234567890</span>
                  </button>
                  <button className="bg-white text-emerald-600 border-2 border-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors w-full sm:w-auto justify-center flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>যোগাযোগ করুন</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb- text-[#059669]">
            স্টেপ বাই স্টেপ ওমরাহ গাইডলাইন
          </h2>
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                ওমরাহর মূল রুকনসমূহ
              </h2>

              {/* Ihram Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <img
                    src={ihramImage}
                    alt="ইহরাম"
                    className="w-full h-full object-fill"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    ০১. ইহরাম (ফরজ)
                  </span>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <h3 className="text-2xl font-bold text-emerald-600">
                    ইহরাম সম্পর্কিত বিস্তারিত
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      ইহরাম হলো উমরাহ'র প্রথম ও অন্যতম ফরজ রুকন। মীকাত সীমানায়
                      পৌঁছার পূর্বে ইহরামের নিয়ত করতে হয়।
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <FiCheck className="text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          ইহরামের পূর্বে গোসল করা সুন্নত
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FiCheck className="text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          পুরুষদের জন্য দুই টুকরা সাদা কাপড়
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FiCheck className="text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          মহিলাদের জন্য সাধারণ পোশাক
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FiCheck className="text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          তালবিয়াহ পাঠ করা
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tawaf Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="order-2 md:order-1 flex flex-col justify-center space-y-6">
                  <h3 className="text-2xl font-bold text-emerald-600">
                    তাওয়াফ সম্পর্কিত বিস্তারিত
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      তাওয়াফ হলো কাবা শরীফের চারপাশে সাত চক্কর প্রদান করা। এটি
                      উমরাহ'র দ্বিতীয় ফরজ রুকন।
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <FiCheck className="text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          হাজরে আসওয়াদ থেকে শুরু করতে হয়
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FiCheck className="text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          প্রতি চক্করে দোয়া পাঠ করা
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FiCheck className="text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          রুকনে ইয়ামানী স্পর্শ করা
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden">
                  <img
                    src={tawafImage}
                    alt="তাওয়াফ"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    ০২. তাওয়াফ (ফরজ)
                  </span>
                </div>
              </div>

              {/* Sai Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <img
                    src={saiImage}
                    alt="সায়ী"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    ০৩. সায়ি (ওয়াজিব)
                  </span>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <h3 className="text-2xl font-bold text-emerald-600">
                    সায়ী সম্পর্কিত বিস্তারিত
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      সাফা-মারওয়া পাহাড়ের মধ্যে সাতবার যাতায়াত করাকে সায়ী
                      বলে। এটি উমরাহ'র একটি ওয়াজিব।
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <FiCheck className="text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          সাফা পাহাড় থেকে শুরু করতে হয়
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FiCheck className="text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          সবুজ আলোর মধ্যে দ্রুত হাঁটা
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FiCheck className="text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          মারওয়ায় শেষ করতে হয়
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Halq Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="order-2 md:order-1 flex flex-col justify-center space-y-6">
                  <h3 className="text-2xl font-bold text-emerald-600">
                    হালক/কসর সম্পর্কিত বিস্তারিত
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      মাথার চুল মুন্ডন করা বা ছোট করাকে হালক/কসর বলে। এটি
                      উমরাহ'র শেষ ওয়াজিব।
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-2">
                        <FiCheck className="text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          পুরুষদের জন্য মাথা মুন্ডন করা উত্তম
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FiCheck className="text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          চুল ছোট করাও জায়েয
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FiCheck className="text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          মহিলারা চুলের আগা ছাঁটবেন
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden">
                  <img
                    src={halqImage}
                    alt="হালক/কসর"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    ০৪. চুল মুন্ডন করা (ওয়াজিব)
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Dos and Don'ts Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#059669] mb-4">
              করণীয় ও বর্জনীয় বিষয়সমূহ
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              ওমরাহ পালনকালে যে সকল বিষয় করণীয় এবং যে সকল বিষয় থেকে বিরত থাকতে হবে
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dos Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2">
              <div className="bg-emerald-500 p-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <FiCheck className="mr-2" /> করণীয় বিষয়সমূহ
                </h3>
              </div>
              <div className="p-6">
                {dos.map((item, index) => (
                  <div
                    key={index}
                    className="group mb-4 last:mb-0 cursor-pointer"
                    onClick={() => {}}
                  >
                    <div className="flex items-start space-x-3 p-3 rounded-lg transition-colors group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20">
                      <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FiCheck className="text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">
                          {item}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 group-hover:block hidden">
                          {getExplanation(item)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Don'ts Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2">
              <div className="bg-red-500 p-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <FiX className="mr-2" /> বর্জনীয় বিষয়সমূহ
                </h3>
              </div>
              <div className="p-6">
                {donts.map((item, index) => (
                  <div
                    key={index}
                    className="group mb-4 last:mb-0 cursor-pointer"
                    onClick={() => {}}
                  >
                    <div className="flex items-start space-x-3 p-3 rounded-lg transition-colors group-hover:bg-red-50 dark:group-hover:bg-red-900/20">
                      <div className="w-6 h-6 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FiX className="text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">
                          {item}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 group-hover:block hidden">
                          {getDontExplanation(item)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#059669] dark:text-white">
              সচরাচর জিজ্ঞাসিত প্রশ্নাবলী
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              উমরাহ সংক্রান্ত গুরুত্বপূর্ণ প্রশ্ন ও উত্তর
            </p>
          </div>

          <div className="mx-auto grid grid-cold-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-4 "
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 text-left transition-all hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <span className="ml-6">
                      <motion.div
                        animate={{ rotate: activeFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FiArrowRight className="w-5 h-5 text-emerald-600" />
                      </motion.div>
                    </span>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: activeFaq === index ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Help Box */}
          <div className="mt-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <span className="w-12 h-12 flex items-center justify-center bg-emerald-100 dark:bg-emerald-800 rounded-full">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
            <h4 className="text-center text-lg font-medium text-gray-900 dark:text-white mb-2">
              আরও প্রশ্ন আছে?
            </h4>
            <p className="text-center text-gray-600 dark:text-gray-300">
              আমাদের সাথে যোগাযোগ করুন। আমরা সর্বদা আপনাকে সহযোগিতা করতে প্রস্তুত।
            </p>
            <div className="mt-4 flex justify-center">
              <button className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                <span>যোগাযোগ করুন</span>
                <FiArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UmrahGuideLine;
