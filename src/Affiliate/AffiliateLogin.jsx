import React, { useState } from "react";

const AffiliateLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="min-h-screen py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Form Section */}
            <div className="relative bg-[#059669]/40 dark:bg-emerald-800/40">
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{
                  backgroundImage: `url('https://plus.unsplash.com/premium_photo-1678316897464-3d2d537c1e48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                }}
              ></div>
              <div className="relative h-full flex flex-col justify-center px-8 lg:px-12 py-12 text-white z-10">
                <h3 className="text-4xl font-bold mb-6">
                  হজ ও ওমরাহ সেবায় <br />
                  আমাদের সাথী হোন
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <span>সরকার অনুমোদিত এজেন্সি</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path
                          fillRule="evenodd"
                          d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>নির্ভরযোগ্য সেবা</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <span>১০,০০০+ সন্তুষ্ট হাজী</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Info Section */}
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#059669] dark:text-emerald-400 mb-2">
                  এফিলিয়েট লগইন
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  আপনার একাউন্টে প্রবেশ করুন
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#059669] dark:text-emerald-400 mb-2">
                    ইমেইল অ্যাড্রেস
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-[#059669] dark:focus:border-emerald-400 focus:ring-2 focus:ring-[#059669] dark:focus:ring-emerald-400 transition-all dark:text-white"
                    placeholder="আপনার ইমেইল লিখুন"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#059669] dark:text-emerald-400 mb-2">
                    পাসওয়ার্ড
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-[#059669] dark:focus:border-emerald-400 focus:ring-2 focus:ring-[#059669] dark:focus:ring-emerald-400 transition-all dark:text-white"
                    placeholder="পাসওয়ার্ড লিখুন"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-[#059669] focus:ring-[#059669] mr-2 dark:bg-gray-700"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      আমাকে মনে রাখুন
                    </span>
                  </label>
                  <a
                    href="#"
                    className="text-sm text-[#059669] dark:text-emerald-400 font-medium"
                  >
                    পাসওয়ার্ড ভুলে গেছেন?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#059669] dark:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition duration-300 transform hover:scale-[1.02] dark:hover:bg-emerald-500"
                >
                  লগইন করুন
                </button>
              </form>

              <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
                একাউন্ট নেই?{" "}
                <a
                  href="/affiliate-registrater"
                  className="text-[#059669] dark:text-emerald-400 font-medium"
                >
                  রেজিস্টার করুন
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateLogin;
