import React, { useState } from "react";
import {
  UserCheck,
  Megaphone,
  HandCoins,
  HelpCircle,
  Wallet,
  Link,
  BarChart3,
  Banknote,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AffiliateHome = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const features = [
    {
      icon: <UserCheck className="w-12 h-12 text-emerald-600" />,
      title: "সহজ রেজিস্ট্রেশন",
      description: "মাত্র কয়েক মিনিটে অ্যাফিলিয়েট অ্যাকাউন্ট খোলা সম্ভব।",
    },
    {
      icon: <Wallet className="w-12 h-12 text-emerald-600" />,
      title: "আকর্ষণীয় কমিশন",
      description: "প্রতিটি বুকিং থেকে সর্বোচ্চ ১৫% কমিশন অর্জন করুন।",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-emerald-600" />,
      title: "রিয়েল-টাইম ট্র্যাকিং",
      description: "বুকিং এবং কমিশন রিয়েল-টাইম ট্র্যাক করুন।",
    },
    {
      icon: <Megaphone className="w-12 h-12 text-emerald-600" />,
      title: "মার্কেটিং টুলস",
      description: "বিক্রয় বাড়াতে আধুনিক মার্কেটিং টুলস ব্যবহার করুন।",
    },
  ];

  const processSteps = [
    {
      number: "০১",
      title: "সাইন আপ করুন",
      description: "আমাদের ওয়েবসাইটে অ্যাফিলিয়েট অ্যাকাউন্ট খুলুন।",
    },
    {
      number: "০২",
      title: "প্যাকেজ বেছে নিন",
      description: "আকর্ষণীয় হজ্জ ও উমরাহ প্যাকেজ বেছে নিন।",
    },
    {
      number: "০৩",
      title: "প্রমোট করুন",
      description: "সোশ্যাল মিডিয়া ও অন্যান্য মাধ্যমে শেয়ার করুন।",
    },
    {
      number: "০৪",
      title: "আয় করুন",
      description: "প্রতিটি সফল বুকিং থেকে কমিশন পান।",
    },
  ];

  const testimonialsData = [
    {
      id: 1,
      name: "কামরুল হাসান",
      location: "ঢাকা",
      image: "/api/placeholder/80/80",
      text: "এই প্লাটফর্মের মাধ্যমে আমি প্রতি মাসে ভালো আয় করছি। সাপোর্ট টিম সবসময় সহযোগিতা করে।",
      earnings: "৮০,০০০+ টাকা",
      profession: "ফ্রিল্যান্সার",
    },
    {
      id: 2,
      name: "আবদুল্লাহ আল মামুন",
      location: "চট্টগ্রাম",
      image: "/api/placeholder/80/80",
      text: "সহজে হজ্জ প্যাকেজ বিক্রি করে কমিশন পাওয়া যায়। খুবই প্রফেশনাল একটি প্লাটফর্ম।",
      earnings: "১,২০,০০০+ টাকা",
      profession: "ব্যবসায়ী",
    },
    {
      id: 3,
      name: "নাজমুল হক",
      location: "সিলেট",
      image: "/api/placeholder/80/80",
      text: "দ্রুত পেমেন্ট এবং ভালো কমিশন রেট। আমি খুবই সন্তুষ্ট এই প্লাটফর্মের সেবা নিয়ে।",
      earnings: "৯৫,০০০+ টাকা",
      profession: "শিক্ষক",
    },
  ];

  const tabContent = [
    {
      title: "কমিশন",
      content: (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    প্যাকেজ
                  </th>
                  <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    কমিশন হার
                  </th>
                  <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    মিনিমাম আয়
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-200">
                    হজ্জ প্যাকেজ (ইকোনমি)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-emerald-600 dark:text-emerald-500 font-medium">
                    ১০%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-200">১৫,০০০ টাকা</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-200">
                    হজ্জ প্যাকেজ (প্রিমিয়াম)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-emerald-600 dark:text-emerald-500 font-medium">
                    ১২%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-200">২৫,০০০ টাকা</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-200">
                    উমরাহ প্যাকেজ (ইকোনমি)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-emerald-600 dark:text-emerald-500 font-medium">
                    ১০%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-200">১২,০০০ টাকা</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-200">
                    উমরাহ প্যাকেজ (প্রিমিয়াম)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-emerald-600 dark:text-emerald-500 font-medium">
                    ১৫%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-200">২০,০০০ টাকা</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      title: "পেমেন্ট",
      content: (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full">
                <Wallet className="w-6 h-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-1 text-gray-900 dark:text-white">পেমেন্ট সময়সূচী</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  প্রতি মাসের ১ তারিখে নিয়মিত পেমেন্ট করা হয়।
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full">
                <Banknote className="w-6 h-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-1 text-gray-900 dark:text-white">ন্যূনতম উত্তোলন</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  ৫,০০০ টাকা বা তার বেশি পরিমাণ উত্তোলন করা যাবে।
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full">
                <Link className="w-6 h-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-1 text-gray-900 dark:text-white">পেমেন্ট মাধ্যম</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  বিকাশ, নগদ, রকেট, ব্যাংক ট্রান্সফার
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "সুবিধা",
      content: (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: <UserCheck className="w-6 h-6 text-emerald-600" />,
                title: "ফ্রি রেজিস্ট্রেশন",
                text: "কোন রেজিস্ট্রেশন ফি ছাড়াই শুরু করুন",
              },
              {
                icon: <Megaphone className="w-6 h-6 text-emerald-600" />,
                title: "মার্কেটিং রিসোর্স",
                text: "ফ্রি মার্কেটিং টুলস, ব্যানার ও কন্টেন্ট",
              },
              {
                icon: <HelpCircle className="w-6 h-6 text-emerald-600" />,
                title: "২৪/৭ সাপোর্ট",
                text: "সর্বদা সহযোগিতা পাবেন দক্ষ টিমের কাছ থেকে",
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
                title: "ড্যাশবোর্ড",
                text: "সহজ ও অত্যাধুনিক ড্যাশবোর্ড ব্যবস্থা",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full">
                  {React.cloneElement(benefit.icon, {
                    className: "w-6 h-6 text-emerald-600 dark:text-emerald-500"
                  })}
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-gray-900 dark:text-white">{benefit.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const faqs = [
    {
      question: "কিভাবে অ্যাফিলিয়েট পার্টনার হতে পারি?",
      answer:
        "আমাদের ওয়েবসাইটে রেজিস্ট্রেশন ফর্ম পূরণ করে সহজেই পার্টনার হতে পারবেন। অনুমোদনের পর আপনি আপনার ড্যাশবোর্ড ব্যবহার করতে পারবেন।",
    },
    {
      question: "কমিশন কিভাবে পাবো?",
      answer:
        "প্রতি মাসের ১ তারিখে আপনার পছন্দের পেমেন্ট মেথডে (বিকাশ, নগদ, রকেট, ব্যাংক ট্রান্সফার) কমিশন পাঠানো হয়।",
    },
    {
      question: "রেফারেল লিংক কিভাবে পাবো?",
      answer:
        "অ্যাকাউন্ট তৈরির পর আপনার ড্যাশবোর্ডে নিজস্ব রেফারেল লিংক পাবেন। আপনি প্রতিটি প্যাকেজের জন্য আলাদা রেফারেল লিংক তৈরি করতে পারবেন।",
    },
    {
      question: "বুকিং ট্র্যাক করবো কিভাবে?",
      answer:
        "আপনার ড্যাশবোর্ডে রিয়েল-টাইম বুকিং স্ট্যাটাস, রিপোর্ট এবং হিস্টরি দেখতে পারবেন। সাপোর্ট টিম বুকিং স্ট্যাটাস আপডেট সম্পর্কে আপনাকে ইমেইল নোটিফিকেশনও পাঠাবে।",
    },
    {
      question: "ন্যূনতম কত টাকার পেমেন্ট উত্তোলন করা যায়?",
      answer:
        "ন্যূনতম ৫,০০০ টাকা উত্তোলন করা যায় মোবাইল ব্যাংকিং বা ব্যাংক একাউন্টে। এর কম পরিমাণ পরবর্তী মাসে যোগ হয়ে যাবে আপনার ব্যালেন্সে।",
    },
    {
      question: "কোন ধরনের সাপোর্ট পাওয়া যায়?",
      answer:
        "২৪/৭ লাইভ চ্যাট, ইমেইল এবং ফোন সাপোর্ট দেওয়া হয়। এছাড়াও আমাদের ডেডিকেটেড অ্যাফিলিয়েট ম্যানেজার আপনাকে সহযোগিতা করবেন।",
    },
  ];

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600/90 to-emerald-800/90 dark:from-emerald-800/90 dark:to-emerald-900/90 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <span className="bg-[#059669]/20 dark:bg-emerald-700/30 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-6">
                বাংলাদেশের অন্যতম সেরা অ্যাফিলিয়েট প্লাটফর্ম
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#059669] dark:text-emerald-400 mb-6 leading-tight">
                হজ্জ-উমরাহ প্যাকেজ বিক্রি করে আয় করুন
              </h1>
              <p className="text-emerald-50 dark:text-emerald-100 text-lg mb-8">
                আমাদের অ্যাফিলিয়েট প্রোগ্রামে যোগ দিয়ে সহজেই উপার্জন করুন। কোন
                রেজিস্ট্রেশন ফি নেই, শুধুমাত্র আপনার সময় এবং প্রচেষ্টার
                প্রয়োজন。
              </p>
              <div className="flex gap-4">
                <button onClick={() => navigate("/affiliate-registrater")} className="bg-white dark:bg-emerald-900 text-emerald-700 dark:text-emerald-100 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 dark:hover:bg-emerald-800 transition-all shadow-lg">
                  রেজিস্ট্রেশন করুন
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-emerald-900/50 transition-all">
                  আরও জানুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 dark:divide-gray-800">
          {[
            { label: "সক্রিয় পার্টনার", value: "৫০০+" },
            { label: "সর্বোচ্চ কমিশন", value: "১৫%" },
            { label: "টোটাল আয়", value: "৭০ লক্ষ+" },
            { label: "সফল বুকিং", value: "১০০০+" },
          ].map((stat, index) => (
            <div key={index} className="py-8 px-4 text-center">
              <h3 className="text-4xl font-bold text-emerald-600 dark:text-emerald-500 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              আমাদের{" "}
              <span className="text-emerald-600 dark:text-emerald-500">অ্যাফিলিয়েট প্রোগ্রাম</span>{" "}
              কেন বিশেষ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              সর্বোচ্চ কমিশন, সময়মত পেমেন্ট এবং সর্বাত্মক সহযোগিতার নিশ্চয়তা
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl hover:shadow-lg transition-all text-center border border-gray-100 dark:border-gray-700 hover:border-emerald-100 dark:hover:border-emerald-800"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-emerald-50 dark:bg-emerald-900/50 p-4 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-10 bg-emerald-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              কিভাবে <span className="text-emerald-600">কাজ করে</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              সহজ চারটি ধাপে শুরু করুন আপনার অ্যাফিলিয়েট ক্যারিয়ার
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-8 hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 hover:border-emerald-200 flex flex-col items-center text-center h-full">
                  <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-emerald-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              আমাদের <span className="text-emerald-600 dark:text-emerald-500">অফার</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              আমাদের অ্যাফিলিয়েট পার্টনারদের জন্য বিশেষ সুবিধা
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-6 border-b dark:border-gray-700">
            {tabContent.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`py-3 px-6 font-medium text-lg transition-all ${
                  activeTab === idx
                    ? "text-emerald-600 dark:text-emerald-500 border-b-2 border-emerald-600 dark:border-emerald-500"
                    : "text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="mt-6">{tabContent[activeTab].content}</div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-10 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              সফল <span className="text-emerald-600">অ্যাফিলিয়েট</span>{" "}
              পার্টনার
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              আমাদের পার্টনাররা কিভাবে সফলতা অর্জন করেছেন
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-lg text-[#059669]">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500">
                        {testimonial.profession}, {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">"{testimonial.text}"</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              সাধারণ <span className="text-emerald-600">জিজ্ঞাসা</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">আপনার প্রশ্নের উত্তর খুঁজে নিন</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-700  rounded-lg">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform dark:text-white ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-white">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-emerald-600 dark:bg-emerald-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            আজই শুরু করুন আপনার অ্যাফিলিয়েট ক্যারিয়ার
          </h2>
          <p className="text-emerald-50 text-xl mb-8 max-w-2xl mx-auto">
            বাংলাদেশের অন্যতম সেরা হজ্জ-উমরাহ অ্যাফিলিয়েট প্রোগ্রামে যোগ দিন
            এবং উপার্জন শুরু করুন
          </p>
          <button onClick={() => navigate("/affiliate-registrater")} className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-medium hover:bg-emerald-50 transition-all shadow-lg inline-flex items-center gap-2">
            রেজিস্ট্রেশন করুন <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AffiliateHome;
