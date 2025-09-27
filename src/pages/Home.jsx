import React from "react"
import { Link } from "react-router-dom"
import { useSEO } from "../hooks/useSEO"

function Home(){
  useSEO(
    "Faatixa — AI, IoT & ICT Solutions | Academy & Custom Software",
    "Faatixa delivers AI-driven solutions, IoT systems, ICT services and hands-on programming courses. Build smarter products and skilled teams with our end-to-end services."
  )
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8FAFC] to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] mb-6">
              Empower Your Future with 
              <span className="text-[#4d0a0a]"> Intelligent Technology</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Faatixa designs and delivers AI-driven solutions, IoT systems and practical 
              programming training to accelerate businesses and skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-[#4d0a0a] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-[#3a0808] transition-colors"
              >
                Get a Demo
              </Link>
              <Link 
                to="/academy" 
                className="border-2 border-[#4d0a0a] text-[#4d0a0a] px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-[#4d0a0a] hover:text-white transition-colors"
              >
                View Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive solutions to modernize your business and develop your team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI Solutions */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100 reveal">
              <div className="w-12 h-12 bg-[#4d0a0a] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">AI Solutions</h3>
              <p className="text-gray-600">Deploy intelligent models to automate decisions and extract insights.</p>
            </div>

            {/* IoT Systems */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100 reveal">
              <div className="w-12 h-12 bg-[#4d0a0a] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">IoT Systems</h3>
              <p className="text-gray-600">Connected devices and real-time monitoring to optimize operations.</p>
            </div>

            {/* ICT Services */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100 reveal">
              <div className="w-12 h-12 bg-[#4d0a0a] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">ICT Services</h3>
              <p className="text-gray-600">Network setup, cloud migration and managed IT support.</p>
            </div>

            {/* Academy */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100 reveal">
              <div className="w-12 h-12 bg-[#4d0a0a] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Academy</h3>
              <p className="text-gray-600">Practical programming & AI courses for professionals and students.</p>
            </div>

            {/* Custom Software */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100 reveal">
              <div className="w-12 h-12 bg-[#4d0a0a] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Custom Software</h3>
              <p className="text-gray-600">Scalable web & mobile apps tailored to your workflows.</p>
            </div>

            {/* Support & Maintenance */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100 reveal">
              <div className="w-12 h-12 bg-[#4d0a0a] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Support & Maintenance</h3>
              <p className="text-gray-600">24/7 monitoring, updates and security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real solutions delivering measurable results for our clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 reveal">
              <div className="w-16 h-16 bg-[#10B981] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Smart Warehouse Automation</h3>
              <p className="text-gray-600 mb-4">Real-time inventory tracking using IoT sensors and predictive restock alerts.</p>
              <div className="text-sm text-[#10B981] font-semibold">Tech: IoT, MQTT, Python, MongoDB</div>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 reveal">
              <div className="w-16 h-16 bg-[#10B981] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Customer Sentiment AI</h3>
              <p className="text-gray-600 mb-4">NLP model reduced response time and improved satisfaction by 35%.</p>
              <div className="text-sm text-[#10B981] font-semibold">Tech: Python, TensorFlow, NLP, React</div>
            </div>

            {/* Project 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 reveal">
              <div className="w-16 h-16 bg-[#10B981] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Remote Learning Platform</h3>
              <p className="text-gray-600 mb-4">Scalable LMS for hands-on coding labs with live evaluations.</p>
              <div className="text-sm text-[#10B981] font-semibold">Tech: Node.js, React, MongoDB, WebRTC</div>
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


