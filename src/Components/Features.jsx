import React from "react";
import { 
  FaKaaba, 
  FaPrayingHands, 
  FaMapMarkerAlt, 
  FaUserFriends,
  FaQuran,
  FaVideo 
} from "react-icons/fa";

const Features = () => {
  const featureCards = [
    {
      icon: <FaKaaba className="w-8 h-8" />,
      title: "স্মার্ট তাওয়াফ গাইড",
      description: "3D ভিজুয়াল গাইডলাইন এবং স্টেপ বাই স্টেপ নির্দেশনা"
    },
    {
      icon: <FaPrayingHands className="w-8 h-8" />,
      title: "নামাজ টাইমিং",
      description: "নামাজের সময়সূচি"
    },
    {
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      title: "লোকেশন ট্র্যাকিং",
      description: "রিয়েল-টাইম লোকেশন শেয়ারিং এবং দিকনির্দেশনা"
    },
    {
      icon: <FaUserFriends className="w-8 h-8" />,
      title: "গ্রুপ ম্যানেজমেন্ট",
      description: "দলের সদস্যদের সাথে সহজ যোগাযোগ ব্যবস্থা"
    },
    {
      icon: <FaQuran className="w-8 h-8" />,
      title: "ডিজিটাল দোয়া গাইড",
      description: "সকল প্রয়োজনীয় দোয়া এবং জিকির সংকলন"
    },
    {
      icon: <FaVideo className="w-8 h-8" />,
      title: "ভিডিও টিউটোরিয়াল",
      description: "হজ্ব ও উমরাহ সম্পর্কিত ভিডিও গাইডলাইন"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
            <span className="text-emerald-600">স্মার্ট ডিজিটাল</span> ফিচার
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            আপনার পবিত্র যাত্রার অভিজ্ঞতা বাড়ানোর জন্য আমাদের উদ্ভাবনী
            ডিজিটাল টুলগুলি ডিজাইন করা হয়েছে যা নির্দেশনা, তথ্য এবং সুবিধা
            প্রদান করে।
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCards.map((feature, index) => (
            <div 
              key={index}
              className="relative group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center text-emerald-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 transform scale-y-0 group-hover:scale-y-100 transition-transform rounded-tl-xl rounded-bl-xl">
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;