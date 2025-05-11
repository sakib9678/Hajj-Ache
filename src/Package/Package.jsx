import React, { useState } from 'react'
import madina from "../assets/images/madina.png"

const Package = () => {
  const [selectedPackage, setSelectedPackage] = useState(null)

  const packages = [
    {
      title: 'Basic Umrah Package',
      price: '3,999',
      duration: '10 Days',
      image: '/images/packages/standard-hotel.jpg',
      highlights: ['3-Star Hotel', 'Group Transportation', 'Basic Meals'],
      features: [
        'Hotel Accommodation (Walking Distance)',
        'Air-Conditioned Transportation',
        'Visa Processing & Support',
        'Experienced Guide Services',
        'Airport Transfers',
        'Daily Breakfast & Dinner',
        'Ziyarat Tours in Makkah & Madinah'
      ]
    },
    {
      title: 'Premium Hajj Package',
      price: '7,999',
      duration: '15 Days',
      image: '/images/packages/luxury-hotel.jpg',
      highlights: ['5-Star Hotel', 'VIP Transport', 'All-Inclusive'],
      features: [
        '5-Star Hotel Near Haram',
        'Private VIP Transportation',
        'Express Visa Processing',
        'Personal Multilingual Guide',
        'VIP Airport Meet & Greet',
        'Premium All-Inclusive Dining',
        'Extended Ziyarat Program',
        'Premium Arafat & Mina Stay'
      ]
    },
    {
      title: 'Executive Umrah Plus',
      price: '5,999',
      duration: '12 Days',
      image: '/images/packages/vip-transport.jpg',
      highlights: ['4-Star Hotel', 'Business Class', 'Full Board'],
      features: [
        '4-Star Luxury Accommodation',
        'Business Class Transfers',
        'Priority Visa Processing',
        'Dedicated Guide Service',
        'Executive Airport Lounge',
        'Full Board Dining',
        'Historical Sites Tours',
        'Shopping Assistant'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[80vh] bg-fixed bg-cover bg-left-bottom"
        style={{ backgroundImage: `url(${madina})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <h1 className="text-7xl font-bold text-white mb-6 leading-tight">
                Your Journey to Sacred Lands
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Experience the spiritual journey of a lifetime with our meticulously crafted 
                Hajj and Umrah packages, designed for comfort and peace of mind.
              </p>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all">
                Explore Packages
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: '/images/icons/kaaba.svg',
                title: 'Premium Locations',
                description: 'Stay in carefully selected hotels within walking distance of the Holy Mosques'
              },
              {
                icon: '/images/icons/calendar.svg',
                title: 'Flexible Durations',
                description: 'Choose from various package durations to suit your schedule and budget'
              },
              {
                icon: '/images/icons/support.svg',
                title: '24/7 Dedicated Support',
                description: 'Round-the-clock assistance in multiple languages throughout your journey'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-all">
                <img src={feature.icon} alt={feature.title} className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Choose Your Package</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white font-semibold">{pkg.duration}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                  <p className="text-3xl font-bold text-emerald-600 mb-6">
                    ${pkg.price}
                    <span className="text-sm text-gray-500 font-normal">/person</span>
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => setSelectedPackage(pkg)}
                    className="w-full bg-emerald-600 text-white py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: {madina}}}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            What Our Pilgrims Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
                <p className="text-gray-200 mb-6">
                  "An incredible spiritual journey made comfortable by the excellent service and attention to detail."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4" />
                  <div>
                    <h4 className="text-white font-semibold">Abdullah Ahmad</h4>
                    <p className="text-gray-300">Premium Package</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Package