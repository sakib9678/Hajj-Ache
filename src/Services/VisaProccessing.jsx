import React from "react";
import {
  FaPassport,
  FaFileAlt,
  FaClock,
  FaSearchLocation,
  FaClipboardCheck,
  FaFolderOpen,
  FaPaperPlane,
  FaSearchPlus,
} from "react-icons/fa";

const VisaProccessing = () => {
  const visaProcessSteps = [
    {
      icon: <FaClipboardCheck />,
      title: "ভিসা প্রয়োজনীয়তা বোঝা",
      description:
        "প্রাথমিক পর্যায়ে আমরা আপনাকে সমস্ত প্রয়োজনীয় তথ্য ও শর্তাবলী বুঝতে সাহায্য করি",
    },
    {
      icon: <FaFolderOpen />,
      title: "ডকুমেন্ট সংগ্রহ",
      description: "সকল প্রয়োজনীয় কাগজপত্র সংগ্রহ ও যাচাইকরণে সহায়তা প্রদান",
    },
    {
      icon: <FaPaperPlane />,
      title: "আবেদন জমাদান",
      description: "আপনার পক্ষে সম্পূর্ণ আবেদন প্রক্রিয়া সম্পন্ন করা",
    },
    {
      icon: <FaSearchPlus />,
      title: "আবেদন ট্র্যাকিং",
      description: "আপনার আবেদনের বর্তমান অবস্থা সম্পর্কে নিয়মিত আপডেট প্রদান",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative py-20 sm:py-24 md:py-32 h-[60vh] sm:h-[70vh] md:h-[80vh]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30 to-emerald-800/90 mix-blend-multiply"></div>
          <img
            src="https://images.pexels.com/photos/2830460/pexels-photo-2830460.jpeg"
            alt="Makkah"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-emerald-600 mb-4 sm:mb-6 md:mb-8 leading-tight">
            ভিসা ও ম্যানপাওয়ার
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
            হজ্জ ও উমরাহ ভিসার জন্য পেশাদার সহায়তা
          </p>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 py-12 md:py-16">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://cdn.bdstall.com/product-image/giant_245023.jpg"
              alt="Visa Processing"
              className="w-full h-auto rounded-xl shadow-xl"
            />
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-emerald-600 text-white p-4 sm:p-6 rounded-xl">
              <p className="text-xl sm:text-2xl font-bold">২৪/৭</p>
              <p className="text-sm sm:text-base">সহায়তা</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-[1.2]">
              সহজ হজ ও উমরাহ ভিসা প্রক্রিয়াকরণ
              <span className="text-emerald-600"> বাংলাদেশ থেকে</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
              হজ আছে এবং উমরাহ কাফেলায়, আমরা ভিসা আবেদন প্রক্রিয়ার গুরুত্ব
              বুঝি, যার জন্য আমরা বাংলাদেশ থেকে তীর্থযাত্রীদের জন্য সম্পূর্ণ
              প্রক্রিয়াটি সহজ করেছি। আমাদের জ্ঞানী কর্মীরা আপনাকে প্রতিটি
              পর্যায়ে পথ দেখাবে, নিশ্চিত করবে যে সমস্ত প্রয়োজনীয় নথি
              সঠিকভাবে প্রস্তুত এবং জমা দেওয়া হয়েছে।
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
              আবেদন ফর্ম পূরণ থেকে শুরু করে অ্যাপয়েন্টমেন্ট আয়োজন এবং
              প্রয়োজনীয় কাগজপত্র জমা দেওয়া পর্যন্ত, আমরা সবকিছু চরম
              পেশাদারিত্বের সাথে পরিচালনা করি।
            </p>
            <div className="pt-4 sm:pt-6">
              <button className="inline-block bg-emerald-600 text-white text-lg font-bold py-3 px-6 sm:px-8 rounded-lg hover:bg-emerald-700 transition-colors">
                যোগাযোগ করুন
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Umrah Visa Application Support Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-[50px]">
                ভিসা আবেদন
                <span className="text-emerald-600"> সহায়তা</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-xl">
                সৌদি ভিসা আবেদন প্রক্রিয়াটি আপনার হজ্জ বা উমরাহ তীর্থযাত্রা
                পরিকল্পনার একটি গুরুত্বপূর্ণ ধাপ। আপনার যাত্রার জন্য প্রস্তুত
                হতে সহায়তা করার জন্য, আমরা একটি সফল সৌদি ভিসা আবেদনের জন্য
                প্রয়োজনীয় নথিগুলির তালিকা সংকলন করেছি।
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "বৈধ পাসপোর্ট (কমপক্ষে ৬ মাস মেয়াদ)",
                  "সাম্প্রতিক ছবি (সাদা ব্যাকগ্রাউন্ড)",
                  "সম্পূর্ণ ভিসা আবেদন ফরম",
                  "টিকাদান সনদপত্র",
                  "পারিবারিক সম্পর্কের প্রমাণ (পারিবারিক ভ্রমণের জন্য)",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-emerald-600 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-lg">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 dark:bg-gray-700 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                  সহায়তার জন্য কল করুন
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-600 p-3 rounded-full">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      +880 1234567890
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      সরাসরি যোগাযোগ করুন
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://cdn.risingbd.com/media/imgAll/2025February/Untitled-1-2502021034.jpg"
                alt="Umrah Visa Support"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-xl">
                <p className="text-2xl font-bold">১০০%</p>
                <p>বিশ্বস্ত সেবা</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visa Processing Steps Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://asset.kalerkantho.com/public/news_images/2025/05/04/1746351134-87d1fe2dc41a6d174440b8487b402133.jpg"
                alt="Visa Processing Steps"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl">
                <p className="text-2xl font-bold">সহজ</p>
                <p>প্রক্রিয়া</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-[50px]">
                ভিসা প্রক্রিয়ার
                <span className="text-emerald-600"> ধাপসমূহ</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-xl">
                হজ আছে আপনার তীর্থযাত্রার পথকে সহজ করতে
                প্রতিশ্রুতিবদ্ধ। নিচে উমরাহ ভিসা প্রক্রিয়ার প্রধান ধাপগুলি
                দেওয়া হলো:
              </p>

              <div className="space-y-6">
                {visaProcessSteps.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-lg">
                      <div className="text-emerald-600 dark:text-emerald-400 text-2xl">
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold transition duration-300">
                  আবেদন করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaProccessing;
