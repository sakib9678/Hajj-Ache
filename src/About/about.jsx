import React, { useState, useEffect } from "react";
import admin from "../assets/images/admin.jpg"
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAward,
  FaMedal,
  FaHandshake,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";
import aboutHero from "../assets/images/about-hero.jpeg";
import ourMission from "../assets/images/our-mission.jpg";
import ourVision from "../assets/images/our-vision.jpg";
import journey1 from "../assets/images/our-journy1.jpeg";
import journey2 from "../assets/images/our-journy2.jpeg";
import journey3 from "../assets/images/our-journy3.jpeg";
import journey4 from "../assets/images/our-journy4.jpeg";

const About = () => {
  const teamMembers = [
    {
      name: "মোঃ ইব্রাহিম হোসেন",
      role: "প্রতিষ্ঠাতা এবং সিইও",
      image:
        "https://eduporibar.com/frontend/assets/images/about-us/ibrahim-sir.jpg",
      description: "২০ বছরের হজ ও ওমরাহ পরিচালনার অভিজ্ঞতা",
    },
    {
      name: "মঞ্জরুল ইসলাম",
      role: "অপারেশনস ডাইরেক্টর",
      image: admin,
      description: "১৫ বছরের ট্যুর অপারেশন পরিচালনার অভিজ্ঞতা",
    },
    {
      name: "মোঃ করিম",
      role: "ধর্মীয় পরামর্শক",
      image:
        "https://readdy.ai/api/search-image?query=islamic%20scholar%20religious%20advisor%20portrait&width=200&height=200",
      description: "ইসলামিক স্কলার এবং হজ গাইড",
    },
  ];
  const timeline = [
    {
      year: "২০০৩",
      title: "যাত্রা শুরু",
      description: "প্রথম হজ্জ এজেন্সি হিসেবে যাত্রা শুরু",
      image: journey1,
    },
    {
      year: "২০১৫",
      title: "প্রতিষ্ঠান শুরু",
      description:
        "এই বছর আমাদের যাত্রা শুরু হয়েছিল একটি ছোট টিম এবং বড় স্বপ্ন নিয়ে।",
      image: journey2,
    },
    {
      year: "২০১৮",
      title: "প্রথম সফলতা",
      description:
        "আমাদের প্রথম পণ্য বাজারে ব্যাপক সাড়া ফেলেছিল এবং আমরা অগ্রগতির পথে চলতে থাকি।",
      image: journey3,
    },
    {
      year: "২০২৩",
      title: "আন্তর্জাতিক সম্প্রসারণ",
      description:
        "আমরা বৈশ্বিক বাজারে প্রবেশ করি এবং নতুন দেশে কার্যক্রম শুরু করি।",
      image: journey4,
    },
  ];

  const achievements = [
    { title: "সেরা হজ্জ এজেন্সি ২০২৩", icon: FaAward },
    { title: "আন্তর্জাতিক মানসম্মত সেবা", icon: FaMedal },
    { title: "সৌদি সরকারের স্বীকৃতি", icon: FaHandshake },
    { title: "৫০,০০০+ সন্তুষ্ট যাত্রী", icon: FaUsers },
  ];

  const testimonials = [
    {
      name: "মোঃ হাসান আলী",
      location: "ঢাকা",
      image: "https://readdy.ai/api/search-image?query=bangladeshi%20muslim%20man%20portrait&width=100&height=100",
      text: "আলহামদুলিল্লাহ, তাদের সেবায় আমি খুবই সন্তুষ্ট। পুরো হজ্জ যাত্রায় তারা আমাদের পাশে ছিল।",
      rating: 5,
      year: "২০২৩"
    },
    {
      name: "ফাতেমা বেগম",
      location: "চট্টগ্রাম",
      image: "https://readdy.ai/api/search-image?query=bangladeshi%20muslim%20woman%20portrait&width=100&height=100",
      text: "খুব সুন্দর ব্যবস্থাপনা। সব কিছু ছিল পরিকল্পিত এবং নিরাপদ। আমি আমার পরিবারের জন্যও তাদের সুপারিশ করব।",
      rating: 5,
      year: "২০২৩"
    },
    {
      name: "আব্দুর রহিম",
      location: "সিলেট",
      image: "https://readdy.ai/api/search-image?query=elderly%20bangladeshi%20muslim%20man&width=100&height=100",
      text: "প্রথম থেকে শেষ পর্যন্ত সব কিছু ছিল অসাধারণ। তাদের গাইড খুব অভিজ্ঞ এবং সহযোগী ছিলেন।",
      rating: 5,
      year: "২০২২"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative py-32 h-[80vh]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30 to-emerald-800/90 mix-blend-multiply"></div>
          <img
            src={aboutHero}
            alt="Makkah"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
          >
            আমাদের সম্পর্কে জানুন
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light"
          >
            ২০ বছর ধরে বিশ্বস্ততার সাথে হজ ও ওমরাহ সেবা প্রদানে নিবেদিত
          </motion.p>
        </div>
      </div>
      {/* Mission & Vision */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-center mb-24 text-emerald-600 dark:text-emerald-400"
          >
            আমাদের লক্ষ্য ও দৃষ্টি
          </motion.h2>

          <div className="space-y-32">
            {/* Goal Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row items-center gap-16"
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl blur-lg opacity-20"></div>
                  <img
                  src={ourMission}
                    alt="Our Mission"
                    className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>

              <div className="lg:w-1/2 w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-l-4 border-emerald-500">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full">
                    <FaUsers className="text-3xl text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-emerald-600 dark:text-emerald-400">
                    আমাদের লক্ষ্য
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  প্রতিটি মুসলিম ভাই-বোনের জন্য সহজ এবং আধ্যাত্মিকভাবে সমৃদ্ধ হজ
                  ও ওমরাহ যাত্রা নিশ্চিত করা।
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></span>
                    সর্বোচ্চ মানের সেবা নিশ্চিতকরণ
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></span>
                    নিরাপদ ও আরামদায়ক যাত্রা
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></span>
                    ২৪/৭ সহায়তা প্রদান
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Vision Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row-reverse items-center gap-16"
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl blur-lg opacity-20"></div>
                  <img
                    src={ourVision}
                    alt="Our Vision"
                    className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>

              <div className="lg:w-1/2 w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-l-4 border-emerald-500">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full">
                    <FaAward className="text-3xl text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-emerald-600 dark:text-emerald-400">
                    আমাদের দৃষ্টি
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  বাংলাদেশের অন্যতম সেরা হজ ও ওমরাহ সেবা প্রদানকারী প্রতিষ্ঠান
                  হিসেবে প্রতিষ্ঠিত হওয়া।
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></span>
                    ডিজিটাল প্রযুক্তির সর্বোচ্চ ব্যবহার
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></span>
                    অভিজ্ঞ টিম দ্বারা সেবা প্রদান
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></span>
                    আন্তর্জাতিক মানসম্মত পরিষেবা
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-10 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-20 text-emerald-600">
            আমাদের যাত্রা
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-300"></div>
            {timeline.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`mb-16 flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                key={index}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 px-4">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-l-4 border-emerald-500">
                    <h3 className="text-xl font-bold text-emerald-600 mb-1">
                      {item.year}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-10 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-emerald-600">
            আমাদের অর্জন
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center"
                key={index}
              >
                <achievement.icon className="text-5xl text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {achievement.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-600 dark:text-emerald-400">
            আমাদের দক্ষ টিম
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
              >
                <div className="w-32 h-32 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-gray-100">
                  {member.name}
                </h3>
                <p className="text-emerald-600 dark:text-emerald-400 text-center mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-emerald-600 dark:text-emerald-400">
            যাত্রীদের অভিজ্ঞতা
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 relative"
              >
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm">
                  {testimonial.year}
                </div>
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-emerald-100"
                  />
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="">
              <h2 className="text-3xl font-bold mb-6 text-emerald-600 dark:text-emerald-400">
                যোগাযোগ করুন
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                আপনার যেকোনো প্রয়োজনে আমরা সার্বক্ষণিক সহায়তা প্রদানে প্রস্তুত
                আছি। আমাদের সাথে যোগাযোগ করুন।
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaPhoneAlt className="text-emerald-600 text-xl" />
                  <span className="text-gray-600 dark:text-gray-300">
                    +৮৮০১৭১১-১২৩৪৫৬
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-emerald-600 text-xl" />
                  <span className="text-gray-600 dark:text-gray-300">
                    info@hajjumrah.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-emerald-600 text-xl" />
                  <span className="text-gray-600 dark:text-gray-300">
                    হুসাইন মার্কেট, উত্তর বাড্ডা, ঢাকা
                  </span>
                </div>
              </div>
            </div>
            <div>
              <form className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                <div className="mb-6">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    নাম
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    ইমেইল
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    বার্তা
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500"
                  ></textarea>
                </div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-colors">
                  পাঠিয়ে দিন
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
