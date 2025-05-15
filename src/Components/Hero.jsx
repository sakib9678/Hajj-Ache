import React, { useEffect, useState } from "react";
import { FaChevronDown, FaMinus, FaPlus } from "react-icons/fa";
// import { useDarkMode } from "../DakModeContext";

const Hero = () => {
  // const { darkMode } = useDarkMode();
  const [hajjCountdown, setHajjCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const hajjDate = new Date("June 15, 2025").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = hajjDate - now;

      setHajjCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(count + 1); 
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1); 
    }
  };

  return (
    <section className="relative pt-20 py-5" style={{ minHeight: "100vh" }}>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=beautiful%20aerial%20view%20of%20Kaaba%20in%20Mecca%20during%20Hajj%20with%20thousands%20of%20pilgrims%2C%20golden%20hour%20lighting%2C%20soft%20clouds%20in%20sky%2C%20high%20resolution%20professional%20photography%2C%20dramatic%20perspective%2C%20spiritual%20atmosphere&width=1440&height=800&seq=1&orientation=landscape"
          alt="Kaaba during Hajj"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/30 dark:bg-gray-900/70"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-gray-900 ">
              <span className="text-emerald-600">হজ ও ওমরার</span> পবিত্র যাত্রা
              শুরু করুন
            </h1>
            <p className="text-xl mb-8 max-w-lg text-gray-700 dark:text-gray-500">
              আরাম এবং ভক্তির জন্য তৈরি আমাদের বিস্তৃত এবং ব্যক্তিগতকৃত হজ এবং
              ওমরাহ প্যাকেজগুলির মাধ্যমে জীবনের এক আধ্যাত্মিক যাত্রার অভিজ্ঞতা
              অর্জন করুন।
            </p>

            {/* Countdown Timer */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                পরবর্তী হজ মৌসুম শুরু হবে:
              </h3>
              <div className="flex space-x-4">
                <div className="bg-emerald-600 text-white rounded-lg p-3 text-center w-20">
                  <div className="text-2xl font-bold">{hajjCountdown.days}</div>
                  <div className="text-xs uppercase">দিন</div>
                </div>
                <div className="bg-emerald-600 text-white rounded-lg p-3 text-center w-20">
                  <div className="text-2xl font-bold">
                    {hajjCountdown.hours}
                  </div>
                  <div className="text-xs uppercase">ঘণ্টা</div>
                </div>
                <div className="bg-emerald-600 text-white rounded-lg p-3 text-center w-20">
                  <div className="text-2xl font-bold">
                    {hajjCountdown.minutes}
                  </div>
                  <div className="text-xs uppercase">মিনিট</div>
                </div>
                <div className="bg-emerald-600 text-white rounded-lg p-3 text-center w-20">
                  <div className="text-2xl font-bold">
                    {hajjCountdown.seconds}
                  </div>
                  <div className="text-xs uppercase">সেকেন্ড</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                প্যাকেজ দেখুন
              </button>
              <button className="px-6 py-3 rounded-lg font-medium border-2 border-emerald-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer text-emerald-600 hover:bg-emerald-50 dark:text-white dark:hover:bg-emerald-700">
                আরও জানুন
              </button>
            </div>
          </div>

          {/* Quick Booking Widget */}
          <div className="md:w-1/2 md:pl-10">
            <div className="rounded-xl shadow-xl p-6 bg-white dark:bg-gray-800 ">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                কুইক প্যাকেজ ফাইন্ডার
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-lg font-medium mb-1 text-gray-700 dark:text-gray-300">
                    যাত্রার ধরন
                  </label>
                  <div className="flex space-x-2">
                    <button className=" flex-1 py-2 px-4 rounded-lg border !rounded-button whitespace-nowrap cursor-pointer bg-emerald-600 text-white border-emerald-600 dark:bg-emerald-600 dark:text-white">
                      হজ
                    </button>
                    <button className="flex-1 py-2 px-4 rounded-lg border !rounded-button whitespace-nowrap cursor-pointer bg-white border-gray-300 dark:bg-transparent dark:border-gray-600">
                      ওমরা
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-medium mb-1 text-gray-700 dark:text-gray-300">
                    প্রস্থান শহর
                  </label>
                  <div className="relative rounded-lg border border-gray-300 dark:border-gray-600">
                    <select className="w-full p-3 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500 border-none bg-white dark:bg-gray-700">
                      <option>আপনার শহর নির্বাচন করুন</option>
                      <option>নিউ ইয়র্ক</option>
                      <option>লন্ডন</option>
                      <option>দুবাই</option>
                      <option>ইস্তাম্বুল</option>
                      <option>কুয়ালালামপুর</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                      <FaChevronDown className="text-gray-500" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-lg font-medium mb-1 text-gray-700 dark:text-gray-300">
                      প্রস্থানের তারিখ
                    </label>
                    <div className="relative rounded-lg border border-gray-300 dark:border-gray-600 ">
                      <input
                        type="date"
                        className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 border-none bg-white dark:bg-gray-700"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-lg font-medium mb-1 text-gray-700 dark:text-gray-300">
                      সময়কাল
                    </label>
                    <div className="relative rounded-lg border border-gray-300 dark:border-gray-600 ">
                      <select className="w-full p-3 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500 border-none bg-white dark:bg-gray-700">
                        <option>সময়কাল নির্বাচন করুন</option>
                        <option>7 দিন</option>
                        <option>14 দিন</option>
                        <option>21 দিন</option>
                        <option>30 দিন</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                        <FaChevronDown className="text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-medium mb-1 text-gray-700 dark:text-gray-300">
                    ভ্রমণকারীদের সংখ্যা
                  </label>
                  <div  className="flex items-center">
                    <button onClick={handleDecrease} className="p-2 rounded-l-lg border !rounded-button whitespace-nowrap cursor-pointer dark:text-white">
                      <FaMinus />
                    </button>
                    <input
                      type="text"
                      value={count}
                      className="w-full p-3 text-center border-t border-b focus:outline-none focus:ring-0 border-none bg-white dark:bg-gray-700"
                      readOnly
                    />
                    <button onClick={handleIncrease} className="p-2 rounded-r-lg border !rounded-button whitespace-nowrap cursor-pointer dark:text-white">
                      <FaPlus />
                    </button>
                  </div>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                  Check Availability
                </button>

                <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="text-emerald-500 font-medium">
                    35 packages
                  </span>{" "}
                  available for your criteria
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
