import { link } from "framer-motion/client";
import React, { useState } from "react";
import { FaKaaba, FaMosque, FaPassport, FaPlane } from "react-icons/fa";

const Service = () => {
  const services = [
    {
      title: "হজ্ব প্যাকেজ",
      description:
        "হজ্ব প্যাকেজ পরিচালনায় আমাদের রয়েছে দীর্ঘ দক্ষতা ও অভিজ্ঞতা। এই অভিজ্ঞতার আলোকে হজ্ব পালনে ইচ্ছুকদের জন্য যথাযথ পরামর্শ এবং হজ্ব সংক্রান্ত বিষয়ে সার্বিক সহযোগীতা করা হয়।",
      icon: <FaKaaba className="text-2xl text-emerald-600" />,
      link: "hajj-packages"
    },
    {
      title: "ওমরাহ প্যাকেজ",
      description:
        "ওমরাহ প্যাকেজ পরিচালনায় আমাদের রয়েছে দীর্ঘ দক্ষতা ও অভিজ্ঞতা। এই অভিজ্ঞতার আলোকে ওমরাহ পালনে ইচ্ছুকদের জন্য যথাযথ পরামর্শ এবং ওমরাহ সংক্রান্ত বিষয়ে সার্বিক সহযোগীতা করা হয়।",
      icon: <FaMosque className="text-2xl text-emerald-600" />,
      link: "umrah-packages"
    },
    {
      title: "এয়ার টিকেটিং",
      description:
        "ওমরাহ পালনকারী, ভ্রমনকারী ও অন্যান্য ভ্রমন সংক্রান্ত বিষয়ে এয়ার টিকেট বুকিং এর ক্ষেত্রে যথাযথ পরামর্শ এবং ইমিগ্রেশন সংক্রান্ত তথ্যাদি প্রদানের মাধ্যমে যাত্রীদের সহযোগীতা করা হয়।",
      icon: <FaPlane className="text-2xl text-emerald-600" />,
      link: "service/air-ticketing"
    },
    {
      title: "ভিসা ও ম্যানপাওয়ার",
      description:
        "বর্তমানে প্রতিনিয়ত বিভিন্ন প্রয়োজনে মানুষকে এক দেশ থেকে অন্য দেশে যাতায়াতের ক্ষেত্রে ভিসা একটি জরুরী বিষয়। মেডিকেল ভিসা, ওমরাহ ভিসা, বিজনেস ভিসা, টুরিস্ট ভিসা সংক্রান্ত বিষয়ে সহায়তা করা হয়।",
      icon: <FaPassport className="text-2xl text-emerald-600" />,
      link: "service/visa-processing"
    },
  ];
  return (
    <div>
      <section className="py-20 bg-gray-50 dark:bg-gray-800 ">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-600 px-4">
              আমাদের ব্যাপক সেবা
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 px-4 max-w-2xl mx-auto">
              আমরা আপনার পবিত্র যাত্রার জন্য এন্ড-টু-এন্ড সমাধান প্রদান করি,
              প্রতিটি পদক্ষেপে সান্ত্বনা, নির্দেশনা এবং আধ্যাত্মিক পরিপূর্ণতা
              নিশ্চিত করি।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-4">
            {services.map((service) => (
              <div className="rounded-xl p-4 md:p-6 transition-transform hover:-translate-y-2 cursor-pointer bg-white dark:bg-gray-700 shadow-lg">
                <div className="rounded-full bg-emerald-100 dark:bg-emerald-900/50 p-3 md:p-4 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-emerald-600 dark:text-emerald-500">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base mb-4 text-gray-600 dark:text-gray-300">{service.description}</p>
                <a
                  href={service.link}
                  className="text-emerald-600 dark:text-emerald-500 font-medium hover:text-emerald-700 dark:hover:text-emerald-400 flex items-center"
                >
                  আরও জানুন <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
