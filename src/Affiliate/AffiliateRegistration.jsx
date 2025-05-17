import React, { useState } from "react";

export default function AffiliateRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    affiliateId: "",
    nidCopy: null,
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "নাম প্রয়োজন";
    }

    if (!formData.email.trim()) {
      newErrors.email = "ইমেইল প্রয়োজন";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "সঠিক ইমেইল দিন";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "ফোন নাম্বার প্রয়োজন";
    } else if (!/^01\d{9}$/.test(formData.phone)) {
      newErrors.phone = "সঠিক মোবাইল নাম্বার দিন";
    }

    if (!formData.affiliateId.trim()) {
      newErrors.affiliateId = "এফিলিয়েট আইডি প্রয়োজন";
    }

    if (!formData.nidCopy) {
      newErrors.nidCopy = "এনআইডি কপি প্রয়োজন";
    }

    if (!formData.password) {
      newErrors.password = "পাসওয়ার্ড প্রয়োজন";
    } else if (formData.password.length < 6) {
      newErrors.password = "পাসওয়ার্ড ৬ ডিজিটের বেশি হতে হবে";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "পাসওয়ার্ড মিলছে না";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Here you would typically send the data to your backend
        console.log("Form submitted:", formData);
        // Add your API call here
      } catch (error) {
        console.error("Registration error:", error);
      }
    }
  };

  return (
    <div className="min-h-screen py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Form Section */}
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#059669] dark:text-emerald-400 mb-2">
                  এফিলিয়েট রেজিস্ট্রেশন
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  আমাদের পরিবারের সদস্য হয়ে যান এখনই
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-[#059669] dark:text-emerald-400 mb-2">
                    আপনার পূর্ণ নাম
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-[#059669] dark:focus:border-emerald-400 focus:ring-2 focus:ring-[#059669] dark:focus:ring-emerald-400 transition-all dark:text-white"
                    placeholder="পূর্ণ নাম লিখুন"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email and Phone in Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#059669] dark:text-emerald-400 mb-2">
                      ইমেইল
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-[#059669] dark:focus:border-emerald-400 focus:ring-2 focus:ring-[#059669] dark:focus:ring-emerald-400 transition-all dark:text-white"
                      placeholder="আপনার ইমেইল"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#059669] dark:text-emerald-400 mb-2">
                      মোবাইল নাম্বার
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-[#059669] dark:focus:border-emerald-400 focus:ring-2 focus:ring-[#059669] dark:focus:ring-emerald-400 transition-all dark:text-white"
                      placeholder="০১XXXXXXXXX"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Affiliate ID */}
                <div>
                  <label className="block text-sm font-medium text-[#059669] dark:text-emerald-400 mb-2">
                    ঘর কন্যা এফিলিয়েট আইডি
                  </label>
                  <input
                    type="text"
                    name="affiliateId"
                    value={formData.affiliateId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-[#059669] dark:focus:border-emerald-400 focus:ring-2 focus:ring-[#059669] dark:focus:ring-emerald-400 transition-all dark:text-white"
                    placeholder="এফিলিয়েট আইডি"
                  />
                  {errors.affiliateId && (
                    <p className="text-red-500 text-sm mt-1">{errors.affiliateId}</p>
                  )}
                </div>

                {/* NID Upload */}
                <div>
                  <label className="block text-sm font-medium text-[#059669] dark:text-emerald-400 mb-2">
                    এনআইডি কপি
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-32 border-2 border-gray-200 dark:border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <svg
                          className="w-8 h-8 text-gray-500 dark:text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-500 dark:text-gray-400">
                          এনআইডি স্ক্যান কপি আপলোড করুন
                        </p>
                      </div>
                      <input
                        type="file"
                        name="nidCopy"
                        onChange={handleInputChange}
                        className="opacity-0"
                        accept="image/*,.pdf"
                      />
                    </label>
                  </div>
                  {errors.nidCopy && (
                    <p className="text-red-500 text-sm mt-1">{errors.nidCopy}</p>
                  )}
                </div>

                {/* Password Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#059669] dark:text-emerald-400 mb-2">
                      পাসওয়ার্ড
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-[#059669] dark:focus:border-emerald-400 focus:ring-2 focus:ring-[#059669] dark:focus:ring-emerald-400 transition-all dark:text-white"
                      placeholder="পাসওয়ার্ড দিন"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#059669] dark:text-emerald-400 mb-2">
                      কনফার্ম পাসওয়ার্ড
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-[#059669] dark:focus:border-emerald-400 focus:ring-2 focus:ring-[#059669] dark:focus:ring-emerald-400 transition-all dark:text-white"
                      placeholder="পাসওয়ার্ড পুনরায় দিন"
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#059669] dark:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition duration-300 transform hover:scale-[1.02] dark:hover:bg-emerald-500"
                >
                  রেজিস্ট্রেশন সম্পন্ন করুন
                </button>
              </form>

              <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
                ইতিমধ্যে অ্যাকাউন্ট আছে?
                <a href="/affiliate-login" className="text-[#059669] dark:text-emerald-400 font-medium ml-2">
                  লগইন করুন
                </a>
              </p>
            </div>

            {/* Right Side - Info Section */}
            <div className="relative bg-[#059669]/40 dark:bg-emerald-800/40">
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVjY2ElMjBrYWFiYXxlbnwwfHwwfHx8MA%3D%3D')`,
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
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <span>সহজ রেজিস্ট্রেশন প্রক্রিয়া</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path
                          fillRule="evenodd"
                          d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>আকর্ষণীয় কমিশন</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <span>বিশ্বস্ত প্রতিষ্ঠান</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}