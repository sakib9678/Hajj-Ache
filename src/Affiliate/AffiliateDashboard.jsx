import React from "react";
import { FiEdit, FiLogOut } from "react-icons/fi";
import { BsCashCoin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const AffiliateDashboard = () => {
   const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-20">
      {/* Profile Header */}
      <div className="bg-[#059669] dark:bg-[#047857] rounded-xl shadow-md p-6 mb-6 ">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <img src="" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Sakib Sheikh
                </h1>

                <p className="font-medium text-white/80">sakib@gmail.com</p>

                <p className="font-medium text-white/80">0123-456-7890</p>

                <p className="font-medium text-white">
                  Member since :{" "}
                  <span className="text-white/80">January 1, 2025</span>
                </p>
                <button onClick={() => navigate("/affiliate-dashboard/edit-profile")} className="mt-2 bg-white text-[#059669] px-4 py-2 rounded-lg flex items-center gap-2">
                  <FiEdit /> এডিট প্রোফাইল
                </button>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-72">
                <div className="space-y-4">
                  <div className="flex items-center justify-between px-4 py-2 bg-[#059669]/20 dark:bg-[#059669]/40 rounded-lg">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#059669] rounded-full">
                      <BsCashCoin className="text-white text-3xl" />
                    </div>

                    <div>
                      <p className="dark:text-gray-300">Available Balance</p>
                      <span className="text-3xl font-bold text-[#059669] dark:text-[#34d399]">
                        ৳ 25,000
                      </span>
                    </div>
                  </div>
                  <div className="border-t">
                    <div className="flex justify-between items-center mb-2"></div>
                  </div>
                </div>
                <button className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center justify-center gap-2">
                  <FiLogOut /> Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Transaction ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">2023-06-{item}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">#TRX{item}23456</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Commission</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400">+৳5,000</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AffiliateDashboard;
