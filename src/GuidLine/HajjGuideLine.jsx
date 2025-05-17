import React, { useState } from 'react'
import { motion } from 'framer-motion'

const HajjGuideLine = () => {
  const [selectedStep, setSelectedStep] = useState(null)

  const hajjSteps = [
    {
      id: 1,
      title: 'ইহরাম',
      englishTitle: 'Ihram',
      description: 'মীকাত সীমানায় পৌঁছার আগে ইহরামের নিয়ত করুন',
      detailedSteps: [
        'গোসল করে ইহরামের কাপড় পরুন',
        'হজ্জের নিয়ত করুন',
        'তালবিয়াহ পাঠ করুন',
        'ইহরাম অবস্থায় নিষিদ্ধ কাজগুলো থেকে বিরত থাকুন'
      ],
      image: '/images/ihram.jpg',
      icon: '🕋'
    },
    {
      id: 2,
      title: 'তাওয়াফ',
      englishTitle: 'Tawaf',
      description: 'কাবা শরীফ সাতবার প্রদক্ষিণ করুন',
      detailedSteps: [
        'হাজরে আসওয়াদ থেকে শুরু করুন',
        'সাত চক্কর সম্পূর্ণ করুন',
        'তাওয়াফের সময় দোয়া করুন',
        'মাকামে ইব্রাহীমের পিছনে দুই রাকাত নামাজ পড়ুন'
      ],
      image: '/images/tawaf.jpg',
      icon: '🔄'
    },
    {
      id: 3,
      title: 'সাঈ',
      englishTitle: 'Sa\'i',
      description: 'সাফা-মারওয়া পাহাড়ের মধ্যে সাতবার সাঈ করুন',
      detailedSteps: [
        'সাফা পাহাড় থেকে শুরু করুন',
        'সাতবার সাঈ সম্পন্ন করুন',
        'প্রতিটি পাহাড়ে দোয়া করুন',
        'সব চক্কর পূর্ণ করুন'
      ],
      image: '/images/sai.jpg',
      icon: '🚶'
    },
    {
      id: 4,
      title: 'আরাফাত',
      englishTitle: 'Arafat',
      description: 'জিলহজ্জ মাসের ৯ তারিখে আরাফাতে অবস্থান করুন',
      detailedSteps: [
        'আরাফাতের সীমানার মধ্যে থাকুন',
        'যোহর থেকে সূর্যাস্ত পর্যন্ত দোয়া করুন',
        'খুতবা শ্রবণ করুন',
        'আল্লাহর যিকির করুন'
      ],
      image: '/images/arafat.jpg',
      icon: '⛰️'
    },
    {
      id: 5,
      title: 'মুযদালিফা',
      englishTitle: 'Muzdalifah',
      description: 'মুযদালিফায় রাত্রিযাপন করুন',
      detailedSteps: [
        'জামরাতের জন্য কংকর সংগ্রহ করুন',
        'মাগরিব ও ইশা একত্রে আদায় করুন',
        'সম্ভব হলে ফজর পর্যন্ত অবস্থান করুন',
        'রাতে দোয়া করুন'
      ],
      image: '/images/muzdalifah.jpg',
      icon: '🌙'
    },
    {
      id: 6,
      title: 'জামরাত',
      englishTitle: 'Jamarat',
      description: 'শয়তানকে প্রতীকात্মক পাথর নিক্ষেপ করুন',
      detailedSteps: [
        'জামরাতুল আকাবায় প্রথমে পাথর মারুন',
        'প্রতিটি জামরাতে সাতটি করে কংকর নিক্ষেপ করুন',
        'সঠিক সময়ে কংকর মারুন',
        'নিরাপত্তা বজায় রেখে ধৈর্য ধরুন'
      ],
      image: '/images/jamarat.jpg',
      icon: '🗿'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hajj-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              হজ্জ গাইডলাইন
            </h1>
            <p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 max-w-2xl font-bangla"
            >
              সুন্নাহ মোতাবেক হজ্জ পালনের ধাপভিত্তিক নির্দেশিকা
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {hajjSteps.map((step) => (
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-sm">
                  <span className="text-2xl">{step.icon}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-emerald-600 font-semibold mr-2">
                    ধাপ {step.id}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 font-bangla">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 font-bangla">
                  {step.description}
                </p>
                <div className="space-y-2">
                  {step.detailedSteps.map((detailStep, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                      <p className="text-gray-700 text-sm font-bangla">{detailStep}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HajjGuideLine