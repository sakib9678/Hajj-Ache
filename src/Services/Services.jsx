import {
  FaBriefcaseMedical,
  FaBus,
  FaCertificate,
  FaCheckCircle,
  FaChevronDown,
  FaChevronRight,
  FaEnvelope,
  FaHeadset,
  FaHotel,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPassport,
  FaPhoneAlt,
  FaShieldAlt,
  FaSlidersH,
  FaTags,
  FaUserTie,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: "visa",
      title: "ভিসা প্রসেসিং সেবা",
      icon: <FaPassport />,
      description:
        "সকল ধরণের হজ ও ওমরাহ ভিসা আবেদনের ক্ষেত্রে বিশেষজ্ঞের সহায়তা, একটি মসৃণ এবং ঝামেলামুক্ত প্রক্রিয়া নিশ্চিত করা।",
      price: "শুরু হচ্ছে ২৫০০০ টাকা থেকে",
      features: [
        "ভিসা প্রক্রিয়াকরণে দ্রুত ট্র্যাক",
        "নথি যাচাইকরণ",
        "আবেদন সহায়তা",
        "অবস্থা ট্র্যাকিং",
        "জরুরি প্রক্রিয়াকরণ উপলব্ধ",
      ],
      link: "visa-processing",
    },
    {
      id: "transportation",
      title: "পরিবহন সেবা",
      icon: <FaBus />,
      description:
        "আপনার পবিত্র যাত্রার সময় সকল ভ্রমণ প্রয়োজনের জন্য নির্ভরযোগ্য এবং আরামদায়ক পরিবহন বিকল্প।",
      price: "শুরু হচ্ছে ৩০০০০ টাকা থেকে",
      features: [
        "এয়ারপোর্ট ট্রান্সফার",
        "মহানগরী ভ্রমণ",
        "পবিত্র স্থানগুলোর পরিবহন",
        "ভিআইপি যানবাহন বিকল্প",
        "২৪/৭ উপলব্ধতা",
      ],
    },
    {
      id: "accommodation",
      title: "আবাসন ব্যবস্থা",
      icon: <FaHotel />,
      description:
        "পবিত্র স্থানগুলোর নিকটে বাজেট-বান্ধব থেকে শুরু করে বিলাসবহুল থাকার ব্যবস্থা।",
      price: "শুরু হচ্ছে ৫০০০০ টাকা থেকে",
      features: [
        "হারাম এর নিকটে হোটেল ",
        "অ্যাপার্টমেন্ট ভাড়া",
        "গ্রুপ আবাসন",
        "দীর্ঘমেয়াদী থাকার বিকল্প",
        "বিশেষ প্রবেশাধিকার রুম",
      ],
    },
    {
      id: "tours",
      title: "গাইডেড ট্যুর এবং জিয়ারত",
      icon: <FaMapMarkedAlt />,
      description:
        "জ্ঞানী গাইডরা গুরুত্বপূর্ণ ইসলামী ঐতিহাসিক স্থানগুলোর শিক্ষা ও আধ্যাত্মিক ট্যুর পরিচালনা করেন।",
      price: "শুরু হচ্ছে ২০০০০ টাকা থেকে",
      features: [
        "ঐতিহাসিক স্থানগুলোর দর্শন",
        "বহুভাষী গাইড",
        "ছোট গ্রুপের বিকল্প",
        "কাস্টম itineraries",
        "শিক্ষামূলক মন্তব্য",
      ],
    },
    {
      id: "insurance",
      title: "ভ্রমণ বীমা",
      icon: <FaShieldAlt />,
      description:
        "হজ ও ওমরাহ যাত্রীদের জন্য বিশেষভাবে তৈরি বিস্তৃত ভ্রমণ বীমা প্যাকেজ।",
      price: "শুরু হচ্ছে ১০০০০ টাকা থেকে",
      features: [
        "মেডিকেল কভারেজ",
        "ট্রিপ বাতিল",
        "হারানো ব্যাগেজ সুরক্ষা",
        "জরুরি উদ্ধার",
        "COVID-19 কভারেজ",
      ],
    },
    {
      id: "medical",
      title: "মেডিকেল সহায়তা",
      icon: <FaBriefcaseMedical />,
      description:
        "আপনার তীর্থযাত্রা জুড়ে আপনার স্বাস্থ্য এবং সুস্থতা নিশ্চিত করার জন্য পেশাদার চিকিৎসা সহায়তা পরিষেবা।",
      price: "শুরু হচ্ছে ১৫০০০ টাকা থেকে",
      features: [
        "অন-কলে ডাক্তার",
        "প্রেসক্রিপশন সেবা",
        "হাসপাতাল সমন্বয়",
        "মেডিকেল অনুবাদ",
        "পূর্ববর্তী অবস্থার ব্যবস্থাপনা",
      ],
    },
  ];

  const serviceBenefits = [
    {
      title: "বিশেষজ্ঞ নির্দেশনা",
      description:
        "আপনার হজ ও ওমরাহ যাত্রার জন্য বিশেষজ্ঞদের দ্বারা প্রদত্ত নির্দেশনা এবং সহায়তা।",
      icon: <FaUserTie />,
    },
    {
      title: "২৪/৭ সহায়তা",
      description:
        "আপনার যাত্রার পুরো সময় জুড়ে সম্পূর্ণ মানসিক শান্তির জন্য রাউন্ড-দ্য-ক্লক সহায়তা উপলব্ধ।",
      icon: <FaHeadset />,
    },
    {
      title: "নমনীয় পরিকল্পনা",
      description:
        "আপনার নির্দিষ্ট প্রয়োজন, পছন্দ এবং বাজেট অনুযায়ী কাস্টমাইজযোগ্য পরিষেবা বিকল্পগুলি।",
      icon: <FaSlidersH />,
    },
    {
      title: "প্রতিযোগিতামূলক মূল্য",
      description:
        "পরিষেবার গুণমানের জন্য চমৎকার মূল্য সহ স্বচ্ছ মূল্য নির্ধারণ।",
      icon: <FaTags />,
    },
    {
      title: "লাইসেন্সপ্রাপ্ত অপারেটর",
      description:
        "সম্পূর্ণ লাইসেন্সপ্রাপ্ত এবং অনুমোদিত পরিষেবা প্রদানকারীরা সকল নিয়মাবলী মেনে চলে।",
      icon: <FaCertificate />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=elegant%2520Islamic%2520architectural%2520background%2520with%2520subtle%2520geometric%2520patterns%2520and%2520soft%2520gradient%2520from%2520emerald%2520to%2520teal%2520perfect%2520for%2520website%2520hero%2520section%2520professional%2520high%2520quality%2520with%2520perfect%2520lighting%2520and%2520composition%2520clean%2520minimal%2520design&width=1440&height=500&seq=24&orientation=landscape"
            alt="Services Background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 "></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left max-w-2xl">
              <div className="flex items-center justify-center md:justify-start text-sm mb-4">
                <a
                  href="https://readdy.ai/home/3a832c93-013c-4aec-ac5b-c640bffa5805/c343c993-1dce-4c1f-bde3-d134602ec29c"
                  data-readdy="true"
                  className="text-white hover:text-emerald-200 transition-colors cursor-pointer"
                >
                  Home
                </a>
                <FaChevronRight className="mx-2 text-xs text-white/70" />
                <span className="text-white font-medium">Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                আমাদের সেবা
              </h1>
              <p className="text-xl text-white/90 mb-8">
                আপনার হজ ও ওমরাহ যাত্রার প্রতিটি দিকের জন্য বিস্তৃত সমাধান, যা
                আরাম, সুবিধা এবং আধ্যাত্মিক পরিপূর্ণতা প্রদানের জন্য ডিজাইন করা
                হয়েছে।
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <a
                  href="#service-categories"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                >
                  এক্সপ্লোর করুন
                </a>
                <a
                  href="#inquiry-form"
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Categories Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#059669]">
              আমাদের সেবা বিভাগ
            </h2>
            <p className="max-w-2xl mx-auto text-lg dark:text-white">
              আমাদের বিস্তৃত বিশেষায়িত সেবাগুলি থেকে নির্বাচন করুন, যা আপনার
              পবিত্র যাত্রাকে নির্বিঘ্ন এবং আধ্যাত্মিকভাবে পরিপূর্ণ করতে ডিজাইন
              করা হয়েছে।
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#059669]">
                    {service.title}
                  </h3>
                  <p className="mb-4 dark:text-white">{service.description}</p>
                  <div className="mb-4">
                    <span className="block text-sm text-gray-500 dark:text-gray-400">
                      Pricing
                    </span>
                    <span className="text-lg font-bold text-emerald-600">
                      {service.price}
                    </span>
                  </div>
                  <button
                    onClick={() => navigate(service.link)}
                    className="mt-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    আরও জানুন
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service Spotlight */}
      <section className="py-16 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=luxury%2520VIP%2520transportation%2520service%2520for%2520Hajj%2520pilgrims%2520with%2520modern%2520comfortable%2520vehicles%2520and%2520professional%2520drivers%2520in%2520Saudi%2520Arabia%2520near%2520Mecca%2520high%2520quality%2520professional%2520photography%2520with%2520perfect%2520lighting%2520and%2520composition%2520clean%2520elegant%2520image&width=700&height=500&seq=25&orientation=landscape"
                alt="VIP Transportation Service"
                className="w-full h-full object-cover object-top rounded-xl"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-600 font-medium text-sm mb-4">
                Featured Service
              </div>
              <h2 className="text-3xl font-bold mb-4 text-[#059669]">
                ভিআইপি পরিবহন পরিষেবা
              </h2>
              <p className="text-lg mb-6 dark:text-white">
                আমাদের প্রিমিয়াম ভিআইপি পরিবহন পরিষেবার সাথে আরাম এবং সুবিধার
                চূড়ান্ত অভিজ্ঞতা নিন, যা বিশেষভাবে হজ এবং ওমরাহ যাত্রীদের জন্য
                ডিজাইন করা হয়েছে যারা গোপনীয়তা, আরাম এবং দক্ষতাকে মূল্যায়ন
                করেন।
              </p>
              <div className="mb-8">
                <h3 className="font-bold text-xl mb-3 dark:text-white">
                  কি অন্তর্ভুক্ত:
                </h3>
                <ul className="space-y-2 dark:text-white">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-emerald-600 mt-1 mr-2" />
                    <span>
                      বিলাসবহুল এয়ার-কন্ডিশনড যানবাহন পেশাদার চালকদের সাথে
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-emerald-600 mt-1 mr-2" />
                    <span>
                      ব্যস্ত সময়ে পবিত্র স্থানগুলিতে অগ্রাধিকারমূলক প্রবেশপথ
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-emerald-600 mt-1 mr-2" />
                    <span>আপনার ভ্রমণপথের জন্য নমনীয় সময়সূচী</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-emerald-600 mt-1 mr-2" />
                    <span>বিনামূল্যে পানীয় এবং ওয়াই-ফাই</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-emerald-600 mt-1 mr-2" />
                    <span>
                      তাৎক্ষণিক সহায়তার জন্য 24/7 নিবেদিতপ্রাণ প্রেরণকারী
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg font-bold text-lg">
                  বিশেষ অফার: মে মাসের বুকিং এর জন্য ১৫% ছাড়
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                  এই পরিষেবা বুক করুন
                </button>
                <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                  Request Custom Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#059669]">
              কেন আমাদের পরিষেবা বেছে নেবেন?
            </h2>
            <p className="max-w-2xl mx-auto text-lg dark:text-white">
              আমরা আপনার তীর্থযাত্রার প্রতিটি বিস্তারিত বিষয়ে মনোযোগ দিয়ে
              অসাধারণ পরিষেবা গুণমান প্রদান করতে গর্বিত।
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {serviceBenefits.map((Benefit) => (
              <div className="text-center p-4 sm:p-6">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-tie text-3xl"></i>
                  <span className="text-3xl">{Benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#059669]">
                  {Benefit.title}
                </h3>
                <p className="dark:text-gray-300">{Benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Inquiry Form */}
      <section id="inquiry-form" className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className=" mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-6 sm:p-8 bg-emerald-600 rounded-xl">
                <h2 className="text-3xl font-bold mb-6 text-white dark:text-[#059669]">
                  যোগাযোগ করুন
                </h2>
                <p className="mb-8 text-white/90">
                  আমাদের পরিষেবা সম্পর্কে কোন প্রশ্ন আছে অথবা একটি কাস্টম
                  উদ্ধৃতি প্রয়োজন? ফর্মটি পূরণ করুন এবং আমাদের দল ২৪ ঘন্টার
                  মধ্যে আপনার সাথে যোগাযোগ করবে।
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mr-4">
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white dark:text-[#059669]">
                        আমাদের অবস্থান
                      </h4>
                      <p className="text-white/80">
                        হুসাইন মার্কেট, উত্তর বাড্ডা , ঢাকা, বাংলাদেশ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mr-4">
                      <i className="fas fa-phone-alt text-white"></i>
                      <FaPhoneAlt className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white dark:text-[#059669]">
                        ফোন নম্বর
                      </h4>
                      <p className="text-white/80">+966 12 345 6789 (সাধারণ)</p>
                      <p className="text-white/80">
                        +966 12 345 6780 (২৪/৭ সহায়তা)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mr-4">
                      <i className="fas fa-envelope text-white"></i>
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white dark:text-[#059669]">
                        ইমেইল ঠিকানা
                      </h4>
                      <p className="text-white/80">info@hajjease.com</p>
                      <p className="text-white/80">support@hajjease.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-[#059669]">
                  পরিষেবা তদন্ত ফর্ম
                </h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        পূর্ণ নাম *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full p-3 rounded-lg border-none focus:ring-2 focus:ring-emerald-500 bg-gray-100 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        placeholder="আপনার পূর্ণ নাম"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        ইমেইল ঠিকানা *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full p-3 rounded-lg border-none focus:ring-2 focus:ring-emerald-500 bg-gray-100 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        placeholder="আপনার ইমেইল ঠিকানা"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        ফোন নম্বর *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full p-3 rounded-lg border-none focus:ring-2 focus:ring-emerald-500 bg-gray-100 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        placeholder="আপনার ফোন নম্বর"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium mb-2"
                      >
                        পরিষেবা আগ্রহ *
                      </label>
                      <div className="relative rounded-lg  dark:bg-gray-600">
                        <select
                          id="service"
                          name="service"
                          required
                          className="w-full p-3 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500 border-none bg-gray-100 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        >
                          <option value="visa">ভিসা প্রক্রিয়াকরণ</option>
                          <option value="transportation">পরিবহন</option>
                          <option value="accommodation">আবাসন</option>
                          <option value="tours">গাইডেড ট্যুর</option>
                          <option value="insurance">ভ্রমণ বীমা</option>
                          <option value="medical">মেডিকেল সহায়তা</option>
                          <option value="custom">কাস্টম প্যাকেজ</option>
                          <option value="other">অন্যান্য</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                          <FaChevronDown className="text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      আপনার বার্তা *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full p-3 rounded-lg border-none focus:ring-2 focus:ring-emerald-500 bg-gray-100 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      placeholder="আপনার পরিষেবা প্রয়োজনীয়তার বিস্তারিত প্রদান করুন..."
                    ></textarea>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        required
                        className="mr-2 h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                      />
                      <label htmlFor="agreeToTerms" className="text-sm">
                        আমি{" "}
                        <a
                          href="#"
                          className="text-emerald-600 hover:underline"
                        >
                          পরিষেবার শর্তাবলী
                        </a>{" "}
                        এবং{" "}
                        <a
                          href="#"
                          className="text-emerald-600 hover:underline"
                        >
                          গোপনীয়তা নীতি
                        </a>{" "}
                        সম্পর্কে পড়েছি এবং সম্মত হয়েছি।
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    তদন্ত জমা দিন
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-600 dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 dark:text-[#059669]">
            আপনার তীর্থযাত্রার অভিজ্ঞতা আরও উন্নত করতে প্রস্তুত?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            আপনার আধ্যাত্মিক যাত্রায় মনোযোগ দিতে আমাদের সরবরাহের যত্ন নিতে দিন।
            আমাদের ব্যাপক পরিষেবাগুলি আরাম, সুবিধা এবং মানসিক প্রশান্তি নিশ্চিত
            করে।
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              পরিষেবা বুক করুন
            </button>
            <button className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              একজন পরামর্শকের সাথে কথা বলুন
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
