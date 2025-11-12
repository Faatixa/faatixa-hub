import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSEO } from "../hooks/useSEO"
import { assets } from "../assets/assets"

function Home(){
  useSEO(
    "Faatixa — AI, IoT & ICT Solutions | Academy & Custom Software",
    "Faatixa delivers AI-driven solutions, IoT systems, ICT services and hands-on programming courses. Build smarter products and skilled teams with our end-to-end services."
  )

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
  const heroImages = [assets.heroimage1, assets.heroimage2, assets.heroimage3]
  
  const categories = [
    { 
      name: 'Technology', 
      image: assets.heroimage1,
      description: 'Cutting-edge IT solutions and modern systems to transform your business operations.'
    },
    { 
      name: 'Innovation', 
      image: assets.heroimage2,
      description: 'Pioneering new ideas and creative solutions that drive digital transformation.'
    },
    { 
      name: 'Community', 
      image: assets.heroimage3,
      description: 'Building and nurturing a community with diverse skills and common goals.'
    },
    { 
      name: 'Training', 
      image: assets.heroimage1,
      description: 'Comprehensive IT training programs to develop skills and empower professionals.'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [categories.length])

  return (
    <div className="bg-white">
      {/* Hero Section with Background Images */}
      <section className="relative py-16 lg:py-20 overflow-hidden min-h-[450px] lg:min-h-[650px] flex items-center">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
            </div>
          ))}
        </div>

        {/* Content Overlay - Centered */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          {/* Main Heading with Gradient Effect */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white drop-shadow-2xl block mb-2">
              Empower Your Future with
            </span>
            <span className="bg-gradient-to-r from-white via-white to-[#4d0a0a] bg-clip-text text-transparent drop-shadow-2xl block">
              Intelligent Technology
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/95 mb-10 drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
            Faatixa designs and delivers AI-driven solutions, IoT systems and practical 
            programming training to accelerate businesses and skills.
          </p>

        

          {/* Trusted Brands - Centered */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-white/90 mb-4 font-medium">Trusted by leading brands and startups</p>
            <div className="flex items-center justify-center gap-6">
              <div className="w-12 h-12 bg-white/25 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/40 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4V4zm2 2v12h12V6H6z"/>
                </svg>
              </div>
              <div className="w-12 h-12 bg-white/25 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/40 shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-bold text-white">N</span>
              </div>
              <div className="w-12 h-12 bg-white/25 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/40 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div>

      <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 text-center">
                We Build Competitive Business Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-center max-w-2xl mx-auto">
                Faatixa delivers comprehensive AI-driven solutions, IoT systems, ICT services, and practical programming training to accelerate your business growth and develop your team's skills.
              </p>
        </div>
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Images Collage */}
            <div className="relative">
              {/* Main Central Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={assets.heroimage1} 
                  alt="Faatixa Services" 
                  className="w-full h-[300px] object-cover"
                />
              </div>

              {/* Top Left Image */}
              <div className="absolute -top-4 -left-4 z-20 w-[150px] h-[150px] rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={assets.heroimage2} 
                  alt="Faatixa Team" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="absolute -bottom-4 -right-4 z-20 w-[150px] h-[150px] rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={assets.heroimage3} 
                  alt="Faatixa Solutions" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute bottom-8 left-8 z-30 bg-[#4d0a0a] rounded-2xl p-6 shadow-2xl border-4 border-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">2+</div>
                    <div className="text-sm text-white/90 font-medium">Years Of Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Services List */}
            <div className="max-w-full">
              {/* Services List - 3 Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {/* AI Solutions */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#4d0a0a] hover:shadow-md transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-[#4d0a0a] rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-[#0F172A] mb-1.5 group-hover:text-[#4d0a0a] transition-colors">AI Solutions</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">Deploy intelligent models to automate decisions and extract insights.</p>
                  </div>
                </div>

                {/* IoT Systems */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#4d0a0a] hover:shadow-md transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-[#4d0a0a] rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-[#0F172A] mb-1.5 group-hover:text-[#4d0a0a] transition-colors">IoT Systems</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">Connected devices and real-time monitoring to optimize operations.</p>
                  </div>
                </div>

                {/* ICT Services */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#4d0a0a] hover:shadow-md transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-[#4d0a0a] rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-[#0F172A] mb-1.5 group-hover:text-[#4d0a0a] transition-colors">ICT Services</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">Network setup, cloud migration and managed IT support.</p>
                  </div>
                </div>

                {/* Academy */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#4d0a0a] hover:shadow-md transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-[#4d0a0a] rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-[#0F172A] mb-1.5 group-hover:text-[#4d0a0a] transition-colors">Academy</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">Practical programming & AI courses for professionals and students.</p>
                  </div>
                </div>

                {/* Custom Software */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#4d0a0a] hover:shadow-md transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-[#4d0a0a] rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-[#0F172A] mb-1.5 group-hover:text-[#4d0a0a] transition-colors">Custom Software</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">Scalable web & mobile apps tailored to your workflows.</p>
                  </div>
                </div>

                {/* Support & Maintenance */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#4d0a0a] hover:shadow-md transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-[#4d0a0a] rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-[#0F172A] mb-1.5 group-hover:text-[#4d0a0a] transition-colors">Support & Maintenance</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">24/7 monitoring, updates and security.</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6 text-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-[#4d0a0a] text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-[#3a0808] transition-colors shadow-md hover:shadow-lg"
                >
                  <span>More About Us</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Rotating Background Images - Centered with Rounded Corners */}
          <div className="relative w-full max-w-6xl mx-auto h-[350px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out rounded-3xl ${
                  index === activeCategoryIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Light overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30 rounded-3xl"></div>
              </div>
            ))}

            {/* Category Title Overlay - Inside Image Container */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center px-4 max-w-3xl mx-auto">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4d0a0a] drop-shadow-2xl uppercase tracking-tight mb-4">
                  {categories[activeCategoryIndex].name}
                </h2>
                <p className="text-lg md:text-xl text-white/95 drop-shadow-lg leading-relaxed">
                  {categories[activeCategoryIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-6 md:gap-8 bg-white px-4 md:px-6 py-3 rounded-full shadow-lg border border-gray-200">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategoryIndex(index)}
                  className="relative flex flex-col items-center group"
                >
                  <span className={`text-xs md:text-sm font-semibold transition-colors duration-300 ${
                    index === activeCategoryIndex 
                      ? 'text-[#4d0a0a]' 
                      : 'text-gray-600 hover:text-[#4d0a0a]'
                  }`}>
                    {category.name}
                  </span>
                  <div className={`mt-1.5 h-0.5 w-full transition-all duration-300 ${
                    index === activeCategoryIndex 
                      ? 'bg-[#4d0a0a] w-full' 
                      : 'bg-gray-300 group-hover:bg-gray-400'
                  }`}></div>
                  {index === activeCategoryIndex && (
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-[#4d0a0a]"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Expectations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image with Abstract Shape */}
            <div className="relative">
              {/* Abstract Brand Color Shape - Wavy/Organic */}
              <div className="absolute -left-12 -top-12 w-80 h-80 bg-gradient-to-br from-[#4d0a0a] via-[#5a0c0c] to-[#3a0808] opacity-30 blur-3xl" style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'
              }}></div>
              <div className="absolute -left-6 -top-6 w-64 h-64 bg-gradient-to-br from-[#4d0a0a] to-[#3a0808] opacity-40 blur-2xl" style={{
                borderRadius: '60% 40% 30% 70% / 50% 60% 40% 50%'
              }}></div>
              
              {/* Main Image - Organic Shape */}
              <div className="relative z-10 overflow-hidden shadow-2xl" style={{
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                clipPath: 'polygon(0% 15%, 15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)'
              }}>
                <img 
                  src={assets.heroimage1} 
                  alt="Faatixa Clients" 
                  className="w-full h-[500px] object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-20">
                  <div className="w-20 h-20 bg-[#4d0a0a] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Small Label */}
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">About Faatixa</p>
              
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
                We Help Clients With The Best Solutions
              </h2>
              
              {/* Description */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Faatixa delivers comprehensive IT solutions that transform businesses. We combine cutting-edge technology with practical expertise to help you achieve your goals.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#4d0a0a] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Branding and design identity</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#4d0a0a] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Website & Marketing Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#4d0a0a] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Unlimited Support & Updates</span>
                </div>
              </div>

              {/* Stats Box */}
              <div className="bg-gray-100 rounded-2xl p-6 mb-8 inline-flex items-center gap-4">
                <div className="w-14 h-14 bg-[#4d0a0a] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#0F172A]">55+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {/* Completed Projects */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                  <div className="text-3xl font-bold text-[#0F172A] mb-1">41+</div>
                  <div className="text-sm text-gray-600">Completed Projects</div>
                </div>

                {/* Ongoing Projects */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                  <div className="text-3xl font-bold text-[#0F172A] mb-1">23+</div>
                  <div className="text-sm text-gray-600">Ongoing Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Faatixa */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Why Choose Faatixa?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We combine technical expertise with practical training to deliver exceptional results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4d0a0a] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Domain Expertise</h3>
              <p className="text-gray-600">Deep knowledge in AI, IoT and ICT with proven track record of successful implementations.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4d0a0a] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">End-to-End Delivery</h3>
              <p className="text-gray-600">Complete solutions from prototype to production with ongoing support and maintenance.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4d0a0a] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Practical Training</h3>
              <p className="text-gray-600">Hands-on programs that produce job-ready developers with real-world skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4d0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to modernize? Let's build something together.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-[#4d0a0a] px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Sales
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-[#4d0a0a] transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home


