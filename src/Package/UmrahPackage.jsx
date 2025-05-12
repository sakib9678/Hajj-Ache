import React, { useState } from "react";
import hotel from "../assets/images/hotel.jpg";
import visa from "../assets/images/visa.png";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const UmrahPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [openFaq, setOpenFaq] = useState(null); // Add this line

  const packages = [
    {
      id: 1,
      name: "ইকোনমি প্যাকেজ",
      price: "১,২৫,০০০",
      duration: "১৫ দিন",
      image: hotel,
      features: [
        "মক্কায় ৩ স্টার হোটেল (হারাম থেকে ১ কিমি)",
        "মদিনায় ৩ স্টার হোটেল (মসজিদে নববী থেকে ৫০০ মিটার)",
        "ঢাকা-জেদ্দা-ঢাকা বিমান টিকেট",
        "এয়ারপোর্ট-হোটেল ট্রান্সফার",
        "সকল ভিসা প্রসেসিং",
        "দৈনিক তিন বেলা বাংলাদেশী খাবার",
        "অভিজ্ঞ গাইডের সহায়তা",
      ],
    },
    {
      id: 2,
      name: "প্রিমিয়াম প্যাকেজ",
      price: "১,৭৫,০০০",
      duration: "১৫ দিন",
      image: hotel,
      features: [
        "মক্কায় ৪ স্টার হোটেল (হারাম থেকে ৫০০ মিটার)",
        "মদিনায় ৪ স্টার হোটেল (মসজিদে নববী থেকে ২০০ মিটার)",
        "ঢাকা-জেদ্দা-ঢাকা বিজনেস ক্লাস টিকেট",
        "VIP লাউঞ্জ সুবিধা",
        "প্রিমিয়াম ট্রান্সপোর্টেশন",
        "স্পেশাল মেনু খাবার",
        "২৪/৭ পারসোনাল গাইড",
      ],
    },
    {
      id: 3,
      name: "ভিআইপি প্যাকেজ",
      price: "২,২৫,০০০",
      duration: "১৫ দিন",
      image: hotel,
      features: [
        "মক্কায় ৫ স্টার হোটেল (হারাম থেকে ২০০ মিটার)",
        "মদিনায় ৫ স্টার হোটেল (মসজিদে নববী থেকে ১০০ মিটার)",
        "বিজনেস ক্লাস টিকেট",
        "লাক্সারি ট্রান্সপোর্টেশন",
        "প্রিমিয়াম স্যুট রুম",
        "VIP সার্ভিস",
        "পারসোনাল কেয়ার",
      ],
    },
  ];

  const requirements = [
    "বৈধ পাসপোর্ট (মেয়াদ কমপক্ষে ৬ মাস)",
    "জাতীয় পরিচয়পত্রের কপি",
    "ভ্যাকসিন সার্টিফিকেট",
    "পাসপোর্ট সাইজ ছবি (সাদা ব্যাকগ্রাউন্ড)",
    "আন্তর্জাতিক পাসপোর্ট",
  ];

  const faqs = [
    {
      question: "উমরাহ করার সর্বনিম্ন খরচ কত?",
      answer:
        "বর্তমানে ২০২৫ সালের জন্য সর্বনিম্ন উমরাহ প্যাকেজের মূল্য ১,২৫,০০০ টাকা। এতে ফ্লাইট, হোটেল, ভিসা এবং অন্যান্য মৌলিক সুবিধা অন্তর্ভুক্ত থাকে।",
    },
    {
      question: "উমরাহ ভিসার জন্য কি কি ডকুমেন্ট লাগে?",
      answer:
        "উমরাহ ভিসার জন্য প্রয়োজনীয় ডকুমেন্টস: ১) বৈধ পাসপোর্ট (মেয়াদ কমপক্ষে ৬ মাস) ২) জাতীয় পরিচয়পত্রের কপি ৩) ভ্যাকসিন সার্টিফিকেট ৪) পাসপোর্ট সাইজ ছবি (সাদা ব্যাকগ্রাউন্ড) ৫) বিবাহ সনদ (প্রযোজ্য ক্ষেত্রে)",
    },
    {
      question: "উমরাহ প্যাকেজে কি কি সুবিধা থাকে?",
      answer:
        "আমাদের প্যাকেজে থাকে: ১) ঢাকা-জেদ্দা-ঢাকা বিমান টিকেট ২) মক্কা ও মদিনায় হোটেল ৩) এয়ারপোর্ট-হোটেল ট্রান্সফার ৪) দৈনিক তিন বেলা খাবার ৫) অভিজ্ঞ গাইড সেবা ৬) ভিসা প্রসেসিং ৭) যিয়ারত ট্যুর",
    },
    {
      question: "উমরাহ করার সেরা সময় কখন?",
      answer:
        "উমরাহ যেকোনো সময় করা যায়, তবে রমজান মাসে উমরাহ করলে হজ্জের সমপরিমাণ সওয়াব পাওয়া যায়। তাছাড়া শীতকালে (নভেম্বর-ফেব্রুয়ারি) আবহাওয়া অনেক অনুকূল থাকে।",
    },
    {
      question: "কিস্তিতে টাকা পরিশোধের সুবিধা আছে কি?",
      answer:
        "হ্যাঁ, আমরা ৩-৬ মাসের কিস্তি সুবিধা প্রদান করি। বুকিংয়ের সময় ৫০% এবং বাকি টাকা কিস্তিতে পরিশোধ করা যায়। এজন্য কোনো অতিরিক্ত চার্জ নেই।",
    },
    {
      question: "একা মহিলারা কি উমরাহ করতে পারবেন?",
      answer:
        "৪৫ বছরের কম বয়সী মহিলাদের জন্য মাহরাম (স্বামী/পিতা/ভাই/পুত্র) আবশ্যক। ৪৫+ বয়সী মহিলারা গ্রুপের সাথে মাহরাম ছাড়াও যেতে পারেন।",
    },
    {
      question: "প্যাকেজ বুক করার পর কি করণীয়?",
      answer:
        "প্যাকেজ বুক করার পর: ১) পাসপোর্ট ও প্রয়োজনীয় ডকুমেন্টস জমা দিন ২) প্রাথমিক পেমেন্ট করুন ৩) উমরাহ প্রশিক্ষণ সেশনে অংশ নিন ৪) ভ্যাকসিন নিশ্চিত করুন ৫) ট্রাভেল ইন্সুরেন্স করুন",
    },
    {
      question: "গ্রুপের সাইজ কত জনের হয়?",
      answer:
        "আমাদের প্রতিটি গ্রুপে সর্বনিম্ন ১৫ জন এবং সর্বোচ্চ ৪৫ জন যাত্রী থাকেন। প্রতি ১৫ জনের জন্য একজন অভিজ্ঞ গাইড থাকেন।",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <img
          src="https://images.pexels.com/photos/161276/moscow-cathedral-mosque-prospekt-mira-ramadan-sky-161276.jpeg"
          alt="মসজিদুল হারাম"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/70 dark:from-black/30 dark:to-black/70 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#059669] dark:text-emerald-400">
                উমরাহ প্যাকেজ ২০২৫
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-800 dark:text-gray-200">
                বাংলাদেশ থেকে সরাসরি মক্কা-মদিনা | সম্পূর্ণ হালাল সার্ভিস
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                এখনই বুকিং করুন
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#059669] dark:text-emerald-400">
                বাংলাদেশ থেকে সম্পূর্ণ নির্দেশিত ওমরাহ প্যাকেজ ২০২৫
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="text-lg">
                  আমাদের বাংলাদেশী যাত্রীদের জন্য বিশেষভাবে প্রস্তুতকৃত সম্পূর্ণ
                  গাইডেড উমরাহ প্যাকেজের মাধ্যমে একটি আধ্যাত্মিক সমৃদ্ধ যাত্রা
                  অনুভব করুন।
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
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
                    <span>অভিজ্ঞ বাংলাভাষী ধর্মীয় গাইড</span>
                  </li>
                  <li className="flex items-center space-x-3">
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
                    <span>যাত্রার পূর্বে উমরাহ প্রশিক্ষণ সেশন</span>
                  </li>
                  <li className="flex items-center space-x-3">
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
                    <span>মক্কা এবং মদিনার জিয়ারত ভ্রমণ</span>
                  </li>
                  <li className="flex items-center space-x-3">
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
                    <span>২৪/৭ স্থানীয় সহায়তা দল</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="গাইডেড উমরাহ প্যাকেজ"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <p className="text-lg font-semibold text-gray-900">
                  পরবর্তী যাত্রা
                </p>
                <p className="text-emerald-600 font-bold">১৫ জানুয়ারি, ২০২৫</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section className="py-5 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#059669] dark:text-emerald-400">
            ঢাকা থেকে ২০২৫ সালের ওমরাহ প্যাকেজ এবং মূল্য উপলব্ধ
          </h2>
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
                    onClick={() => setSelectedPackage(pkg.id)}
                    className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-all"
                  >
                    বিস্তারিত দেখুন
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#059669] dark:text-emerald-400">
              কাস্টমাইজড উমরাহ প্যাকেজ
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              আপনার প্রয়োজন অনুযায়ী সাজানো বিশেষ উমরাহ প্যাকেজ। আপনার বাজেট
              এবং পছন্দ অনুযায়ী সব কিছু নির্বাচন করুন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-emerald-600 dark:text-emerald-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
                হোটেল নির্বাচন
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-emerald-500"
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
                  <span>৩ স্টার থেকে ৫ স্টার হোটেল</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-emerald-500"
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
                  <span>হারাম শরীফের দূরত্ব অনুযায়ী</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-emerald-600 dark:text-emerald-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
                খাবার প্যাকেজ
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-emerald-500"
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
                  <span>বাংলাদেশী মেনু</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-emerald-500"
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
                  <span>আরবি মেনু অপশন</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-emerald-600 dark:text-emerald-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
                বাজেট অপশন
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-emerald-500"
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
                  <span>ইকোনমি থেকে প্রিমিয়াম</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-emerald-500"
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
                  <span>কিস্তিতে পেমেন্ট সুবিধা</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center">
              কাস্টম প্যাকেজ তৈরি করুন
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://www.mytravelgroup.in/wp-content/uploads/2022/09/Group-67-1.png"
                alt="অনলাইন উমরাহ বুকিং"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                ২৪/৭ অনলাইন সার্ভিস
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                অনলাইনে উমরাহ বুকিং করুন
                <span className="block text-emerald-600 dark:text-emerald-400 mt-2">
                  বাংলাদেশ থেকে সম্পূর্ণ সমাধান
                </span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                আপনার উমরাহ যাত্রার সকল প্রস্তুতি এখন অনলাইনে। ঘরে বসেই সম্পন্ন
                করুন সকল প্রক্রিয়া।
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
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
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-gray-900 dark:text-gray-100">
                      সহজ রেজিস্ট্রেশন
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      মাত্র কয়েক মিনিটে সম্পন্ন করুন রেজিস্ট্রেশন প্রক্রিয়া
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-gray-900 dark:text-gray-100">
                      অনলাইন পেমেন্ট
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      নিরাপদ অনলাইন পেমেন্ট সিস্টেম
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
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
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-gray-900 dark:text-gray-100">
                      ট্র্যাক আপডেট
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      রিয়েল টাইম আপডেট পান আপনার আবেদন প্রক্রিয়ার
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center">
                  এখনই বুকিং করুন
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                  উমরাহ ভিসার প্রয়োজনীয় ডকুমেন্টস
                  <span className="block text-emerald-600 dark:text-emerald-400 mt-2 text-2xl">
                    সৌদি আরব ভ্রমণের জন্য আবশ্যকীয় কাগজপত্র
                  </span>
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
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
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1 text-gray-900 dark:text-gray-100">
                        পাসপোর্ট
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        ন্যূনতম ৬ মাস মেয়াদ সহ বৈধ পাসপোর্ট
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
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
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1 text-gray-900 dark:text-gray-100">
                        ছবি
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        সাদা ব্যাকগ্রাউন্ডে পাসপোর্ট সাইজ ছবি
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
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
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1 text-gray-900 dark:text-gray-100">
                        ভ্যাকসিন সার্টিফিকেট
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        কোভিড-১৯ ভ্যাকসিনের সার্টিফিকেট
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
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
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1 text-gray-900 dark:text-gray-100">
                        জাতীয় পরিচয়পত্র
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        এনআইডি কার্ডের স্ক্যান কপি
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
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
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1 text-gray-900 dark:text-gray-100">
                        বিবাহ সনদের কপি (দম্পতিদের জন্য)
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        বিবাহ সনদের স্ক্যান কপি
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center">
                    ভিসা প্রক্রিয়াকরণের জন্য আবেদন করুন
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="relative order-2 md:order-1">
                <img
                  src={visa}
                  alt="উমরাহ ভিসা ডকুমেন্টস"
                  className="rounded-lg shadow-xl w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-lg font-semibold text-emerald-600">
                    সকল ডকুমেন্টস আপলোড করুন
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-5 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2022/07/08/3324586-480641889.jpg?itok=j6DlIQMK"
                alt="উমরাহ'র ফজিলত"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <p className="text-lg font-semibold text-emerald-600">
                  একটি মাকবুল উমরাহ জান্নাত ছাড়া অন্য কোন পুরস্কার নয়
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                উমরাহ পালনের ফজিলত
                <span className="block text-emerald-600 dark:text-emerald-400 mt-2 text-2xl">
                  আল্লাহর ঘরে যাত্রার মহা পুরস্কার
                </span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
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
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-gray-900 dark:text-gray-100">
                      গুনাহ মাফ
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      উমরাহ পালনকারীর পূর্বের সকল গুনাহ মাফ করে দেওয়া হয়
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-gray-900 dark:text-gray-100">
                      রমজানের ফজিলত
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      রমজান মাসে উমরাহ পালন হজ্জের সমান সওয়াব বহন করে
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-gray-900 dark:text-gray-100">
                      দোয়া কবুল
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      উমরাহ পালনকারীর দোয়া আল্লাহ তাআলা কবুল করেন
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
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
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-gray-900 dark:text-gray-100">
                      সওয়াব বৃদ্ধি
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      মসজিদুল হারামে একটি নামাজের সওয়াব এক লাখ গুণ বৃদ্ধি করা
                      হয়
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center">
                  আরও জানুন
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              সচরাচর জিজ্ঞাসা
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              উমরাহ সংক্রান্ত আপনার সকল প্রশ্নের উত্তর
            </p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-3">
                    <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
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
            <button className="bg-white text-emerald-600 dark:bg-[#047756] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 px-8 py-4 rounded-lg font-bold transition-colors cursor-pointer flex items-center ">
              <FiPhone className="text-xl mr-2"/>
              <span>কল করুন: ০১৭১১-১২৩৪৫৬</span>
            </button>
            <button className="bg-transparent text-white dark:text-[#047756] dark:border-[#047756] border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold transition-colors cursor-pointer flex items-center">
              <MdOutlineEmail className="text-xl mr-2"/>
              <span>ইমেইল করুন</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UmrahPackage;
