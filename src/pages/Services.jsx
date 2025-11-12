import React from "react"
import { Link } from "react-router-dom"
import { useSEO } from "../hooks/useSEO"
import { assets } from "../assets/assets"

function Services(){
  useSEO(
    "Services — AI, IoT, ICT, Software, Support | Faatixa",
    "End-to-end AI, IoT, ICT, custom software and support services. From prototype to production with secure, scalable delivery."
  )
  
  const services = [
    {
      title: "AI Solutions",
      subtitle: "Intelligent Automation",
      description: "We design and deploy machine learning models tailored to business problems: predictive analytics, NLP, computer vision, and automation.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "IoT Systems",
      subtitle: "Connected Devices",
      description: "Our IoT solutions connect hardware, firmware and cloud to provide real-time telemetry, remote control, and automation.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "ICT Services",
      subtitle: "Network & Cloud",
      description: "Robust ICT services including network design, cloud migration, server management and cybersecurity for reliable infrastructure.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      title: "Academy",
      subtitle: "Programming & AI Training",
      description: "Hands-on courses for web development, data science, AI and embedded systems with live labs and mentorship.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Content with Image */}
            <div className="bg-gradient-to-br from-[#4d0a0a] via-[#5a0c0c] to-[#3a0808] p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Abstract Shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                {/* Label */}
                <p className="text-white/90 text-sm uppercase tracking-wider mb-4">Our Services</p>
                
                {/* Main Headline */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                  World-Class IT Solutions for Your Business
                </h1>
                
                {/* CTA Button */}
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#4d0a0a] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors mb-8"
                >
                  <span>More Services</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Image */}
              <div className="relative z-10 mt-8">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={assets.heroimage1} 
                    alt="Faatixa Services" 
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4d0a0a]/50 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Service Cards */}
            <div className="bg-white p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#4d0a0a] hover:shadow-lg transition-all duration-300 group"
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 bg-[#4d0a0a] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#4d0a0a] transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-sm text-gray-500 font-medium mb-3">
                      {service.subtitle}
                    </p>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Text */}
          <div className="bg-gradient-to-br from-[#4d0a0a] via-[#5a0c0c] to-[#3a0808] px-8 lg:px-12 py-6">
            <p className="text-center text-white/90 text-sm">
              Ensuring Excellence with Innovation, Quality, and Dedication
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services


