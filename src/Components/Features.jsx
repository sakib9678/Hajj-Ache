import React, { useState } from "react";
import { FaPlay, FaVrCardboard } from "react-icons/fa";

const Features = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-emerald-600">স্মার্ট ডিজিটাল ফিচার</h2>
            <p className="max-w-2xl mx-auto text-lg">
              আপনার পবিত্র যাত্রার অভিজ্ঞতা বাড়ানোর জন্য আমাদের উদ্ভাবনী
              ডিজিটাল টুলগুলি ডিজাইন করা হয়েছে যা নির্দেশনা, তথ্য এবং সুবিধা
              প্রদান করে।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Prayer Time Tracker */}
            <div
              className={`rounded-xl overflow-hidden ${
                darkMode ? "bg-gray-800" : "bg-white shadow-lg"
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=muslim%20prayer%20time%20concept%2C%20digital%20clock%20with%20mosque%20silhouette%2C%20modern%20minimalist%20design%2C%20clean%20background%2C%20professional%20photography%2C%20high%20resolution%20image%20showing%20prayer%20schedule%20interface&width=600&height=300&seq=2&orientation=landscape"
                  alt="Prayer Time Tracker"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      নামাজের সময় ট্র্যাকার
                    </h3>
                    <p className="text-white/80">
                      অবস্থানভিত্তিক নামাজের সময়সূচী, কিবলা দিকনির্দেশনা এবং
                      বিজ্ঞপ্তি।
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <div>
                    <span className="block text-sm font-medium">
                      পরবর্তী নামাজ
                    </span>
                    <span className="block text-xl font-bold text-emerald-600">
                      আসর
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm font-medium">সময় বাকি</span>
                    <span className="block text-xl font-bold">02:45:18</span>
                  </div>
                </div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                  নামাজের বিজ্ঞপ্তি সেট করুন
                </button>
              </div>
            </div>

            {/* Interactive Tawaf Guide */}
            <div
              className={`rounded-xl overflow-hidden ${
                darkMode ? "bg-gray-800" : "bg-white shadow-lg"
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=3D%20visualization%20of%20Kaaba%20tawaf%20ritual%2C%20digital%20interface%20showing%20pilgrims%20circling%20the%20Kaaba%2C%20modern%20UI%20design%2C%20clean%20background%2C%20high%20resolution%20professional%20photography&width=600&height=300&seq=3&orientation=landscape"
                  alt="Interactive Tawaf Guide"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      ইন্টারেক্টিভ তাওয়াফ এবং সা'ই গাইড
                    </h3>
                    <p className="text-white/80">
                      আচার-অনুষ্ঠানের জন্য 3D ভিজ্যুয়ালাইজেশন এবং ধাপে ধাপে
                      নির্দেশিকা।
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <FaPlay className="text-emerald-600" />
                    </div>
                    <span className="ml-3 font-medium">
                      ইন্টারেক্টিভ টিউটোরিয়াল
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <i className="fas fa-vr-cardboard text-emerald-600"></i>
                      <FaVrCardboard className="text-emerald-600" />
                    </div>
                    <span className="ml-3 font-medium">VR অভিজ্ঞতা</span>
                  </div>
                </div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                  3D গাইড অন্বেষণ করুন
                </button>
              </div>
            </div>

            {/* Group Tracking System */}
            <div
              className={`rounded-xl overflow-hidden ${
                darkMode ? "bg-gray-800" : "bg-white shadow-lg"
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=group%20tracking%20system%20for%20pilgrims%2C%20mobile%20app%20interface%20showing%20map%20with%20location%20markers%2C%20QR%20code%20scanning%20feature%2C%20modern%20UI%20design%2C%20clean%20background%2C%20high%20resolution%20professional%20photography&width=600&height=300&seq=4&orientation=landscape"
                  alt="Group Tracking System"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      গ্রুপ ট্র্যাকিং সিস্টেম
                    </h3>
                    <p className="text-white/80">
                      QR কোড ভিত্তিক ট্র্যাকিং আপনার গ্রুপের সাথে সংযুক্ত থাকতে।
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="block text-sm font-medium">
                      গ্রুপ সদস্যরা
                    </span>
                    <span className="block text-xl font-bold">12 সংযুক্ত</span>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
                      ></div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center border-2 border-white">
                      +8
                    </div>
                  </div>
                </div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                  গ্রুপ QR কোড তৈরি করুন
                </button>
              </div>
            </div>

            {/* Crowd Density Indicator */}
            <div
              className={`rounded-xl overflow-hidden ${
                darkMode ? "bg-gray-800" : "bg-white shadow-lg"
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=crowd%20density%20heat%20map%20of%20Masjid%20Al-Haram%2C%20aerial%20view%20with%20color-coded%20areas%20showing%20different%20crowd%20levels%2C%20digital%20interface%20with%20statistics%2C%20modern%20UI%20design%2C%20clean%20background%2C%20high%20resolution%20professional%20photography&width=600&height=300&seq=5&orientation=landscape"
                  alt="Crowd Density Indicator"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      ভিড়ের ঘনত্ব নির্দেশক
                    </h3>
                    <p className="text-white/80">
                      বিভিন্ন পবিত্র স্থানে ভিড়ের স্তরের রিয়েল-টাইম আপডেট।
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">আল-হারাম মসজিদ</span>
                    <span className="text-sm font-medium text-yellow-500">
                      মাঝারি
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-yellow-500 h-2.5 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">আল-নবাবী মসজিদ</span>
                    <span className="text-sm font-medium text-green-500">
                      কম
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                  লাইভ আপডেট দেখুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
