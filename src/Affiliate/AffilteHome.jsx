import React from "react";
import Slider from "react-slick";
import { UserCheck, Megaphone, HandCoins, HelpCircle, Wallet, Link, Clock, BarChart3, Banknote } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AffilteHome = () => {
  const testimonials = [
    {
      id: 1,
      name: "কামরুল হাসান",
      location: "ঢাকা, বাংলাদেশ",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "এই প্লাটফর্মের মাধ্যমে আমি প্রতি মাসে ভালো আয় করছি। সাপোর্ট টিম সবসময় সহযোগিতা করে।",
    },
    {
      id: 2,
      name: "আবদুল্লাহ আল মামুন",
      location: "চট্টগ্রাম, বাংলাদেশ",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "সহজে হজ্জ প্যাকেজ বিক্রি করে কমিশন পাওয়া যায়। খুবই প্রফেশনাল একটি প্লাটফর্ম।",
    },
    {
      id: 3,
      name: "নাজমুল হক",
      location: "সিলেট, বাংলাদেশ",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      text: "দ্রুত পেমেন্ট এবং ভালো কমিশন রেট। আমি খুবই সন্তুষ্ট এই প্লাটফর্মের সেবা নিয়ে।",
    },
  ];

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const faqs = [
    {
      question: "কিভাবে অ্যাফিলিয়েট পার্টনার হতে পারি?",
      answer: "আমাদের ওয়েবসাইটে রেজিস্ট্রেশন ফর্ম পূরণ করে সহজেই পার্টনার হতে পারবেন।",
      icon: <UserCheck className="text-emerald-600 w-6 h-6" />,
    },
    {
      question: "কমিশন কিভাবে পাবো?",
      answer: "প্রতি মাসের ১ তারিখে আপনার ব্যাংক অ্যাকাউন্টে কমিশন পেমেন্ট করা হয়।",
      icon: <Wallet className="text-emerald-600 w-6 h-6" />,
    },
    {
      question: "রেফারেল লিংক কিভাবে পাবো?",
      answer: "অ্যাকাউন্ট তৈরির পর আপনার ড্যাশবোর্ডে নিজস্ব রেফারেল লিংক পাবেন।",
      icon: <Link className="text-emerald-600 w-6 h-6" />,
    },
    {
      question: "বুকিং ট্র্যাক করবো কিভাবে?",
      answer: "আপনার ড্যাশবোর্ডে রিয়েল-টাইম বুকিং স্ট্যাটাস, রিপোর্ট এবং হিস্টরি দেখতে পারবেন।",
      icon: <BarChart3 className="text-emerald-600 w-6 h-6" />,
    },
    {
      question: "ন্যূনতম কত টাকার পেমেন্ট উত্তোলন করা যায়?",
      answer: "ন্যূনতম ৫,০০০ টাকা উত্তোলন করা যায় মোবাইল ব্যাংকিং বা ব্যাংক একাউন্টে।",
      icon: <Banknote className="text-emerald-600 w-6 h-6" />,
    },
    {
      question: "কোন ধরনের সাপোর্ট পাওয়া যায়?",
      answer: "২৪/৭ লাইভ চ্যাট, ইমেইল এবং ফোন সাপোর্ট দেওয়া হয়।",
      icon: <HelpCircle className="text-emerald-600 w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <div className="relative h-[90vh] bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/041/425/890/small/ai-generated-islamic-greeting-cards-for-muslim-holidays-eid-ul-adha-festival-celebration-photo.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <span className="text-emerald-400 text-xl mb-4">আপনার ক্যারিয়ার শুরু করুন</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            আমাদের <span className="text-emerald-400">অ্যাফিলিয়েট পার্টনার</span> হিসেবে
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            পবিত্র হজ্জ ও উমরাহ প্যাকেজ বিক্রি করে উপার্জন করুন উচ্চ কমিশন। আমাদের প্রফেশনাল টিম আপনাকে সর্বাত্মক সহযোগিতা করবে।
          </p>
          <div className="flex gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105">
              রেজিস্ট্রেশন করুন
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium transition-all">
              বিস্তারিত জানুন
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "সক্রিয় পার্টনার", value: "৫০০+" },
            { label: "সর্বোচ্চ কমিশন", value: "১৫%" },
            { label: "সাপোর্ট", value: "২৪/৭" },
            { label: "সফল বুকিং", value: "১০০০+" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all">
              <h3 className="text-4xl font-bold text-emerald-600 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">কিভাবে কাজ করে?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">মাত্র তিনটি সহজ ধাপে শুরু করুন আপনার অ্যাফিলিয়েট ক্যারিয়ার</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <UserCheck className="w-10 h-10 text-emerald-600" />, title: "রেজিস্ট্রেশন করুন", text: "ফ্রি রেজিস্ট্রেশন করে অ্যাকাউন্ট তৈরি করুন।" },
              { icon: <Megaphone className="w-10 h-10 text-emerald-600" />, title: "প্রমোট করুন", text: "রেফারেল লিংক শেয়ার করে প্যাকেজ প্রমোট করুন।" },
              { icon: <HandCoins className="w-10 h-10 text-emerald-600" />, title: "আয় করুন", text: "সফল বুকিং থেকে পান আকর্ষণীয় কমিশন।" },
            ].map((step, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-emerald-50 hover:shadow-md transition-all text-center">
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">সফল পার্টনারদের অভিজ্ঞতা</h2>
          <Slider {...testimonialSettings}>
            {testimonials.map(({ id, name, location, image, text }) => (
              <div key={id} className="px-4">
                <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                  <div className="flex items-center mb-6">
                    <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold">{name}</h4>
                      <p className="text-gray-500 text-sm">{location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">সাধারণ জিজ্ঞাসা</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all flex items-start gap-4">
                <div>{faq.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-emerald-600 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">আজই শুরু করুন আপনার অ্যাফিলিয়েট যাত্রা</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">বাংলাদেশের সবচেয়ে বড় হজ্জ ও উমরাহ অ্যাফিলিয়েট প্লাটফর্মে যোগ দিন</p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-medium hover:bg-emerald-100 transition-all transform hover:scale-105">
            এখনই যোগ দিন
          </button>
        </div>
      </div>
    </div>
  );
};

export default AffilteHome;
