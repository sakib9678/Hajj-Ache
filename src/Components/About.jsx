import React from "react";
import { FaUserCheck, FaGlobe, FaHandshake, FaMedal } from "react-icons/fa";
import Team from "../assets/images/team.jpg";

const About = () => {
  const stats = [
    {
      number: "১৫+",
      text: "বছরের অভিজ্ঞতা",
      icon: <FaMedal />,
    },
    {
      number: "১০K+",
      text: "সুখী হাজী",
      icon: <FaUserCheck />,
    },
    {
      number: "৫০+",
      text: "গ্লোবাল পার্টনার",
      icon: <FaGlobe />,
    },
    {
      number: "২৪/৭",
      text: "গ্রাহক সেবা",
      icon: <FaHandshake />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Stats Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="py-5">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl leading-0 md:leading-[65px] font-bold mb-6 dark:text-white">
                  <span className="text-emerald-600">পবিত্র যাত্রার</span> জন্য
                  আপনার বিশ্বস্ত সঙ্গী
                </h1>
                <p className="text-2xl text-gray-800 dark:text-gray-200">
                  আপনার হজ এবং ওমরাহ যাত্রার জন্য অসাধারণ সেবা প্রদান করতে
                  প্রতিশ্রুতিবদ্ধ।
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-emerald-600 mb-2 text-5xl">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-[50px]">
                আমাদের উৎকর্ষতার প্রতি প্রতিশ্রুতি
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-xl">
                <span className="text-2xl font-bold text-emerald-600">
                  হজ আছে
                </span>{" "}
                বাংলাদেশ সরকার অনুমোদিত ট্রাভেল এজেন্ট । সরকারী নিয়মনীতি অনুযায়ী
                প্রতি বছর শত শত আগ্রহী ব্যক্তিবর্গ আমাদের এজেন্সীর মাধ্যমে হজ্জ
                পালনের উদ্দেশ্যে সৌদি আরব গমন করেন । হজ্জব্রত পালনকারীদের জন্য
                আমাদের রয়েছে সাশ্রয়ী প্যাকেজ । এই প্যাকেজ সমূহের আওতায় আমরা
                হজব্রত পালনকারীদের উন্নতমানের সেবা প্রদানে সবসময় অবিচল থাকি ।
                সেবার লক্ষ্যে অত্র এজেন্সী সবসময় হজ্জব্রত পালনকারীদের প্রয়োজনীয়
                সকল সুবিধা ও সুদক্ষ গাইড সহ আন্তরিক সেবা প্রদান করে আসছে। বিশেষ
                করে, সহীহ ইসলামিক জ্ঞান সম্পন্ন দায়ী ও মোয়াল্লেম, অতি নিকটবর্তী
                বাসস্থান, দেশীয় খাওয়া দাওয়া, চিকিৎসা ইত্যাদি বিষয়ে অত্যন্ত
                আন্তরিকতার সহিত সেবা প্রদান করা হয় ।
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-xl">
                আমরা এই পবিত্র যাত্রার গুরত্ব বুঝতে পারি এবং আপনার অভিজ্ঞতাকে
                যতটা সম্ভব আরামদায়ক এবং অর্থপূর্ণ করতে চেষ্টা করি। আমাদের
                ব্যাপক প্যাকেজগুলি আপনার সমস্ত প্রয়োজনীয়তা পূরণের জন্য ডিজাইন
                করা হয়েছে, আপনাকে আপনার আধ্যাত্মিক যাত্রায় সম্পূর্ণ মনোনিবেশ
                করতে দেয়।
              </p>
              <div className="space-y-4">
                {[
                  "প্রাসঙ্গিক কর্তৃপক্ষ দ্বারা লাইসেন্সপ্রাপ্ত এবং অনুমোদিত",
                  "অভিজ্ঞ বহুভাষী গাইড",
                  "পবিত্র স্থানগুলির নিকটে প্রিমিয়াম আবাসন",
                  "ব্যাপক ভ্রমণ সহায়তা",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-emerald-600 mr-3"
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
            </div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.jpg?s=612x612&w=0&k=20&c=lidJcFUSR3rkMt4B0yoNwH55lz3sth9o2280keqBXGE="
                alt="Our Team"
                className="rounded-2xl shadow-xl"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-xl">
                <p className="text-2xl font-bold">১৫+</p>
                <p>শ্রেষ্ঠত্ব বছর</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
