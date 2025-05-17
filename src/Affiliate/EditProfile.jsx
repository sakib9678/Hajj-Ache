import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

const EditProfile = () => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-20">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-[#059669] dark:text-white">
          প্রোফাইল আপডেট করুন
        </h1>

        <form className="space-y-6">
          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative group">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200 border-4 border-emerald-500">
                <img
                  src={preview || "https://via.placeholder.com/160"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <label className="absolute inset-0 flex flex-col items-center justify-center rounded-full cursor-pointer bg-black/0 group-hover:bg-black/50 transition-all duration-300">
                <FiUpload className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-white text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ছবি আপলোড করুন
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                নাম
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="আপনার নাম"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                ঠিকানা
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="আপনার ঠিকানা"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                পাসওয়ার্ড
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:#059669 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="নতুন পাসওয়ার্ড"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#059669] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="পাসওয়ার্ড নিশ্চিত করুন"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              বাতিল করুন
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#059669] text-white rounded-lg hover:bg-[#047857]"
            >
              সংরক্ষণ করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
