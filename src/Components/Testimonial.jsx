import React, { useState } from "react";
import { FaCalendarAlt, FaStar } from "react-icons/fa";

const Testimonial = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-emerald-600">
              আমাদের তীর্থযাত্রীরা যা বলেন
            </h2>
            <p className="max-w-2xl mx-auto text-lg">
              যারা আমাদের পরিষেবার অভিজ্ঞতা অর্জন করেছেন এবং আমাদের সাথে তাদের
              পবিত্র যাত্রা সম্পন্ন করেছেন তাদের কথা শুনুন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div
              className={`rounded-xl p-8 ${
                darkMode ? "bg-gray-800" : "bg-white shadow-lg"
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://readdy.ai/api/search-image?query=portrait%20of%20middle%20eastern%20man%20in%20his%2050s%20wearing%20traditional%20thobe%20and%20ghutra%2C%20friendly%20smile%2C%20professional%20headshot%2C%20neutral%20background%2C%20high%20quality%20photograph&width=100&height=100&seq=6&orientation=squarish"
                    alt="Ahmed Testimonial"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="font-bold">আহমেদ আবদুল্লাহ</h4>
                  <div className="flex text-yellow-400 mt-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className="italic mb-4">
                "হজ আছে দ্বারা প্রদত্ত সেবা অসাধারণ ছিল। ভিসা প্রক্রিয়াকরণ থেকে
                শুরু করে আবাসন এবং পরিবহন, সবকিছুই নির্বিঘ্ন ছিল। গাইডরা জ্ঞানী
                এবং ধৈর্যশীল ছিলেন, আমাদের হজ যাত্রাকে সত্যিই স্মরণীয় করে
                তুলেছিলেন।"
              </p>
              <div className="text-sm text-gray-500">
                <FaCalendarAlt className="mr-2" /> Hajj 2024
              </div>
            </div>

            {/* Testimonial 2 */}
            <div
              className={`rounded-xl p-8 ${
                darkMode ? "bg-gray-800" : "bg-white shadow-lg"
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://readdy.ai/api/search-image?query=portrait%20of%20south%20asian%20woman%20in%20her%2040s%20wearing%20hijab%2C%20warm%20smile%2C%20professional%20headshot%2C%20neutral%20background%2C%20high%20quality%20photograph&width=100&height=100&seq=7&orientation=squarish"
                    alt="Fatima Testimonial"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="font-bold">ফাতিমা রহমান</h4>
                  <div className="flex text-yellow-400 mt-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <p className="italic mb-4">
                "আমার উমরাহ অভিজ্ঞতা অসাধারণ ছিল। হজ আছে দ্বারা প্রদত্ত
                পরিষেবাগুলি অত্যন্ত পেশাদার এবং সহায়ক ছিল। আমি তাদের ডিজিটাল
                অ্যাপটি বিশেষভাবে পছন্দ করেছি, যা আমাকে আমার সময়সূচী এবং
                স্থানগুলি ট্র্যাক করতে সাহায্য করেছে।"
              </p>
              <div className="text-sm text-gray-500">
                <FaCalendarAlt /> Umrah 2024
              </div>
            </div>

            {/* Testimonial 3 */}
            <div
              className={`rounded-xl p-8 ${
                darkMode ? "bg-gray-800" : "bg-white shadow-lg"
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://readdy.ai/api/search-image?query=portrait%20of%20african%20american%20man%20in%20his%2060s%2C%20dignified%20appearance%2C%20professional%20headshot%2C%20neutral%20background%2C%20high%20quality%20photograph&width=100&height=100&seq=8&orientation=squarish"
                    alt="Ibrahim Testimonial"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="font-bold">ইব্রাহিম</h4>
                  <div className="flex text-yellow-400 mt-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className="italic mb-4">
                "হজ আছে দ্বারা প্রদত্ত পরিষেবাগুলি আমার প্রত্যাশা ছাড়িয়ে গেছে।
                তারা আমাদের জন্য সবকিছু পরিকল্পনা করেছে, এবং আমি তাদের
                পেশাদারিত্ব এবং যত্নের জন্য কৃতজ্ঞ। আমি তাদের সুপারিশ করতে
                পারি।"
              </p>
              <div className="text-sm text-gray-500">
                <FaCalendarAlt /> Hajj 2023
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              আরও রিভিউ দেখুন
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className={`py-20 ${darkMode ? "bg-gray-900" : "bg-emerald-600"}`}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            আপনার পবিত্র যাত্রা শুরু করার জন্য প্রস্তুত?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            আমাদের বিস্তৃত প্যাকেজ এবং বিশেষজ্ঞ নির্দেশনার সাথে একটি
            আধ্যাত্মিকভাবে পূর্ণ হজ বা উমরাহ অভিজ্ঞতার দিকে প্রথম পদক্ষেপ নিন।
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              আপনার প্যাকেজ বুক করুন
            </button>
            <button className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              একজন পরামর্শকের সাথে কথা বলুন
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
