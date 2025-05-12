import React, { useState } from "react";
import {
  FaHotel,
  FaBus,
  FaUtensils,
  FaUserTie,
  FaMosque,
} from "react-icons/fa";

const Packege = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("umrah");

  const umrahPackages = [
    {
      title: "ইকোনমি",
      price: "২,৯৯,৯৯৯",
      perMonth: "২৪,৯৯৯",
      isPopular: false,
      features: {
        accommodation: {
          icon: <FaHotel />,
          title: "আবাসন",
          type: "3-তারকা হোটেল",
          details: "হারাম থেকে ২ কিমি দূরে",
        },
        transport: {
          icon: <FaBus />,
          title: "পরিবহন",
          type: "শেয়ারড বাস",
          details: "স্ট্যান্ডার্ড ক্লাস",
        },
        meals: {
          icon: <FaUtensils />,
          title: "খাবার",
          type: "শুধু সকালের নাস্তা",
          details: "বুফে স্টাইল",
        },
        guide: {
          icon: <FaUserTie />,
          title: "গাইড",
          type: "গ্রুপ গাইড",
          details: "১:২৫ অনুপাত",
        },
        ziyarat: {
          icon: <FaMosque />,
          title: "জিয়ারত",
          type: "বেসিক প্যাকেজ",
          details: "মেইন সাইটস অনলি",
        },
      },
    },
    {
      title: "স্ট্যান্ডার্ড",
      price: "৪,৪৯,৯৯৯",
      perMonth: "৩৭,৪৯৯",
      isPopular: true,
      features: {
        accommodation: {
          icon: <FaHotel />,
          title: "আবাসন",
          type: "4-তারকা হোটেল",
          details: "হারাম থেকে ৮০০ মিটার দূরে",
        },
        transport: {
          icon: <FaBus />,
          title: "পরিবহন",
          type: "VIP বাস",
          details: "এসি সুবিধা",
        },
        meals: {
          icon: <FaUtensils />,
          title: "খাবার",
          type: "হাফ বোর্ড",
          details: "সকালের নাস্তা ও রাতের খাবার",
        },
        guide: {
          icon: <FaUserTie />,
          title: "গাইড",
          type: "গ্রুপ গাইড",
          details: "১:১৫ অনুপাত",
        },
        ziyarat: {
          icon: <FaMosque />,
          title: "জিয়ারত",
          type: "স্ট্যান্ডার্ড প্যাকেজ",
          details: "সব প্রধান সাইট",
        },
      },
    },
    {
      title: "প্রিমিয়াম",
      price: "৬,৯৯,৯৯৯",
      perMonth: "৫৮,৩৩৩",
      isPopular: false,
      features: {
        accommodation: {
          icon: <FaHotel />,
          title: "আবাসন",
          type: "5-তারকা হোটেল",
          details: "হারামের পাশে",
        },
        transport: {
          icon: <FaBus />,
          title: "পরিবহন",
          type: "প্রাইভেট গাড়ি",
          details: "24/7 সার্ভিস",
        },
        meals: {
          icon: <FaUtensils />,
          title: "খাবার",
          type: "ফুল বোর্ড",
          details: "সব খাবার অন্তর্ভুক্ত",
        },
        guide: {
          icon: <FaUserTie />,
          title: "গাইড",
          type: "প্রাইভেট গাইড",
          details: "নিবেদিত গাইড",
        },
        ziyarat: {
          icon: <FaMosque />,
          title: "জিয়ারত",
          type: "প্রিমিয়াম প্যাকেজ",
          details: "সব সাইট + জাদুঘর",
        },
      },
    },
  ];

  const hajjPackages = [
    {
      title: "ইকোনমি হজ্ব",
      price: "৯,৯৯,৯৯৯",
      perMonth: "৮৩,৩৩৩",
      isPopular: false,
      features: {
        accommodation: {
          icon: <FaHotel />,
          title: "আবাসন",
          type: "3-তারকা হোটেল",
          details: "হারাম থেকে ৩ কিমি দূরে",
        },
        transport: {
          icon: <FaBus />,
          title: "পরিবহন",
          type: "শেয়ারড বাস",
          details: "স্ট্যান্ডার্ড ক্লাস",
        },
        meals: {
          icon: <FaUtensils />,
          title: "খাবার",
          type: "ফুল বোর্ড",
          details: "বুফে স্টাইল",
        },
        guide: {
          icon: <FaUserTie />,
          title: "গাইড",
          type: "গ্রুপ গাইড",
          details: "১:২৫ অনুপাত",
        },
        ziyarat: {
          icon: <FaMosque />,
          title: "জিয়ারত",
          type: "বেসিক প্যাকেজ",
          details: "মেইন সাইটস",
        },
      },
    },
    {
      title: "স্ট্যান্ডার্ড হজ্ব",
      price: "১২,৯৯,৯৯৯",
      perMonth: "১,০৮,৩৩৩",
      isPopular: true,
      features: {
        accommodation: {
          icon: <FaHotel />,
          title: "আবাসন",
          type: "4-তারকা হোটেল",
          details: "হারাম থেকে ১ কিমি দূরে",
        },
        transport: {
          icon: <FaBus />,
          title: "পরিবহন",
          type: "VIP বাস",
          details: "এসি সুবিধা",
        },
        meals: {
          icon: <FaUtensils />,
          title: "খাবার",
          type: "ফুল বোর্ড প্রিমিয়াম",
          details: "বুফে + রুম সার্ভিস",
        },
        guide: {
          icon: <FaUserTie />,
          title: "গাইড",
          type: "গ্রুপ গাইড",
          details: "১:১৫ অনুপাত",
        },
        ziyarat: {
          icon: <FaMosque />,
          title: "জিয়ারত",
          type: "প্রিমিয়াম প্যাকেজ",
          details: "সকল ঐতিহাসিক স্থান",
        },
      },
    },
    {
      title: "প্রিমিয়াম হজ্ব",
      price: "১৫,৯৯,৯৯৯",
      perMonth: "১,৩৩,৩৩৩",
      isPopular: false,
      features: {
        accommodation: {
          icon: <FaHotel />,
          title: "আবাসন",
          type: "5-তারকা হোটেল",
          details: "হারামের সামনে",
        },
        transport: {
          icon: <FaBus />,
          title: "পরিবহন",
          type: "প্রাইভেট গাড়ি",
          details: "লাক্সারি সেডান",
        },
        meals: {
          icon: <FaUtensils />,
          title: "খাবার",
          type: "ফুল বোর্ড VIP",
          details: "24/7 রুম সার্ভিস",
        },
        guide: {
          icon: <FaUserTie />,
          title: "গাইড",
          type: "প্রাইভেট গাইড",
          details: "১:৫ অনুপাত",
        },
        ziyarat: {
          icon: <FaMosque />,
          title: "জিয়ারত",
          type: "VIP প্যাকেজ",
          details: "সম্পূর্ণ কাস্টমাইজড",
        },
      },
    },
  ];

  const PackageCard = ({ pkg }) => (
    <div
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
        pkg.isPopular
          ? "border-2 border-emerald-500"
          : "border border-gray-200 dark:border-gray-700"
      }`}
    >
      <div
        className={`p-6 ${
          pkg.isPopular
            ? "bg-gradient-to-br from-emerald-500 to-emerald-700"
            : "bg-white dark:bg-gray-800"
        }`}
      >
        {pkg.isPopular && (
          <div className="absolute top-0 right-6 transform translate-y-3">
            <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm">
              সর্বাধিক জনপ্রিয়
            </span>
          </div>
        )}

        <div className="text-center mb-8">
          <h3
            className={`text-2xl font-bold mb-2 ${
              pkg.isPopular
                ? "text-white"
                : "text-gray-900 dark:text-white"
            }`}
          >
            {pkg.title}
          </h3>
          <div className="flex items-center justify-center gap-2">
            <span
              className={`text-4xl font-bold ${
                pkg.isPopular ? "text-white" : "text-emerald-600"
              }`}
            >
              ৳{pkg.price}
            </span>
          </div>
          <p
            className={`text-sm mt-2 ${
              pkg.isPopular ? "text-emerald-100" : "text-gray-500 dark:text-gray-400"
            }`}
          >
            বা মাসিক ৳{pkg.perMonth}
          </p>
        </div>

        <div className="space-y-4">
          {Object.values(pkg.features).map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className={`text-xl ${
                  pkg.isPopular ? "text-emerald-100" : "text-emerald-500"
                }`}
              >
                {feature.icon}
              </div>
              <div>
                <p
                  className={`font-medium ${
                    pkg.isPopular
                      ? "text-white"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {feature.type}
                </p>
                <p
                  className={`text-sm ${
                    pkg.isPopular ? "text-emerald-100" : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {feature.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`w-full mt-8 py-3 rounded-xl font-medium transition-all duration-300 ${
            pkg.isPopular
              ? "bg-white text-emerald-600 hover:bg-emerald-50"
              : "bg-emerald-600 text-white hover:bg-emerald-700"
          }`}
        >
          প্যাকেজ বুক করুন
        </button>
      </div>
    </div>
  );

  return (
    <div className="dark:bg-gray-900 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-5xl font-bold mb-4 text-emerald-60
              dark:text-white 0"
          >
            আমাদের প্যাকেজসমূহ
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto mb-8 
              dark:text-gray-300 text-gray-600"
          >
            আপনার বাজেট এবং প্রয়োজন অনুযায়ী সেরা প্যাকেজটি বেছে নিন
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setActiveTab("umrah")}
              className={`px-6 py-2 text-lg rounded-full font-medium transition-all duration-300 ${
                activeTab === "umrah"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              ওমরাহ প্যাকেজসমূহ
            </button>
            <button
              onClick={() => setActiveTab("hajj")}
              className={`px-6 py-2 text-lg rounded-full font-medium transition-all duration-300 ${
                activeTab === "hajj"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              হজ্ব প্যাকেজসমূহ
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {activeTab === "umrah"
            ? umrahPackages.map((pkg, index) => (
                <PackageCard key={index} pkg={pkg} />
              ))
            : hajjPackages.map((pkg, index) => (
                <PackageCard key={index} pkg={pkg} />
              ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg mb-6  text-gray-600 dark:text-gray-300">
            কাস্টমাইজড প্যাকেজের জন্য যোগাযোগ করুন
          </p>
          <button className="px-8 py-3 rounded-xl font-medium transition-all duration-300 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:bg-emerald-600 dark:text-white dark:hover:bg-emerald-700">
            কাস্টম প্যাকেজের জন্য যোগাযোগ করুন →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packege;
