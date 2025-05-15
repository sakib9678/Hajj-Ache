import React from "react";
import { FaPlane, FaTicketAlt, FaMoneyBillWave, FaClock } from "react-icons/fa";

const Airticketing = () => {
  const features = [
    {
      icon: <FaPlane className="text-4xl text-emerald-600" />,
      title: "সরাসরি ফ্লাইট",
      description:
        "সৌদি এয়ারলাইন্স, বিমান বাংলাদেশ এয়ারলাইন্স সহ বিভিন্ন আন্তর্জাতিক এয়ারলাইন্সের টিকেট",
    },
    {
      icon: <FaTicketAlt className="text-4xl text-emerald-600" />,
      title: "অনলাইন বুকিং",
      description: "২৪/৭ অনলাইন টিকেট বুকিং সুবিধা",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-emerald-600" />,
      title: "সুলভ মূল্য",
      description: "বাজেট অনুযায়ী সর্বনিম্ন মূল্যে টিকেট বুকিং",
    },
    {
      icon: <FaClock className="text-4xl text-emerald-600" />,
      title: "দ্রুত সেবা",
      description: "তাৎক্ষণিক টিকেট কনফার্মেশন এবং ২৪ ঘণ্টা গ্রাহক সেবা",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80"
          alt="Air Ticketing"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              এয়ার টিকেটিং সেবা
            </h1>
            <p className="text-xl md:text-2xl">
              বিশ্বের যেকোনো প্রান্তে যাত্রার জন্য নির্ভরযোগ্য টিকেটিং সেবা
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
                আপনার এয়ার টিকেট বুকিং সহজ করে তুলুন
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                আমরা বিশ্বের সকল প্রধান এয়ারলাইন্সের টিকেট বুকিং সেবা প্রদান
                করি। আমাদের দক্ষ টিম আপনাকে সর্বোত্তম রুট এবং মূল্যে টিকেট বুক
                করতে সহায়তা করবে।
              </p>
              <ul className="space-y-4">
                {[
                  "সরাসরি ও কানেক্টিং ফ্লাইটের টিকেট",
                  "গ্রুপ বুকিং সুবিধা",
                  "ই-টিকেট ও বোর্ডিং পাস",
                  "ফ্লাইট রিশিডিউল সহায়তা",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-emerald-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://www.botomul.com/storage/files/bd/6/thumb-816x460-2d2294c943e212b69f0ff369cafa4810.png"
                alt="Booking Service"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">আমাদের টিকেটিং প্ল্যান</h2>
            <p className="text-gray-600 dark:text-gray-300">বাজেট অনুযায়ী বিভিন্ন ধরনের টিকেটিং সুবিধা</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "ইকোনমি প্যাকেজ",
                price: "৳৮৫,০০০",
                features: [
                  "ইকোনমি ক্লাস টিকেট",
                  "স্ট্যান্ডার্ড সিট সিলেকশন",
                  "২৩ কেজি চেক-ইন লাগেজ",
                  "বেসিক মিল"
                ]
              },
              {
                title: "বিজনেস প্যাকেজ",
                price: "৳১৪৫,০০০",
                features: [
                  "বিজনেস ক্লাস টিকেট",
                  "প্রিমিয়াম সিট সিলেকশন",
                  "৪০ কেজি চেক-ইন লাগেজ",
                  "প্রিমিয়াম মিল",
                  "লাউঞ্জ এক্সেস"
                ]
              },
              {
                title: "গ্রুপ প্যাকেজ",
                price: "যোগাযোগ করুন",
                features: [
                  "কাস্টম টিকেট অপশন",
                  "গ্রুপ ডিসকাউন্ট",
                  "স্পেশাল সিটিং অ্যারেঞ্জমেন্ট",
                  "কাস্টমাইজড মিল অপশন",
                  "ডেডিকেটেড সাপোর্ট"
                ]
              }
            ].map((plan, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{plan.title}</h3>
                <p className="text-4xl font-bold text-emerald-600 mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                  বুক করুন
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Airline Partners */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#047857] ">আমাদের এয়ারলাইন পার্টনার</h2>
            <p className="text-gray-600 dark:text-gray-300">বিশ্বের সেরা এয়ারলাইন্সের সাথে আমাদের পার্টনারশিপ</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <img src="https://d1kaer0po85hkk.cloudfront.net/assets/biman-bangladesh-airlines.png" alt="Biman" className="h-36 object-contain mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Emirates_Airbus_A380-861_A6-EER_MUC_2015_04.jpg" alt="Emirates" className="h-36 object-contain mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/A7-AEI_Airbus_A330-302_Qatar_Airways.jpg" alt="Qatar Airways" className="h-36 object-contain mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Saudi_Arabian_Airlines_HZ-AK26_Boeing_777-368ER.jpg/640px-Saudi_Arabian_Airlines_HZ-AK26_Boeing_777-368ER.jpg" alt="Saudia" className="h-36 object-contain mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airticketing;
