import React from "react"
import { useSEO } from "../hooks/useSEO"

function Academy(){
  useSEO(
    "Academy — Programming & AI Courses | Faatixa",
    "Hands-on courses in web development, AI/ML and embedded systems with labs, projects and mentorship."
  )
  return (
    <div className="bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-10">Academy / Courses</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow border">
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Full-Stack Web Development (12 weeks)</h3>
              <p className="text-gray-700 mb-4">Learn React, Node.js, MongoDB, and deployment. Includes real projects and mentorship.</p>
              <div className="flex gap-3">
                <button className="bg-[#4d0a0a] text-white px-5 py-2 rounded-2xl">Enroll Now</button>
                <button className="border border-[#4d0a0a] text-[#4d0a0a] px-5 py-2 rounded-2xl">Download Syllabus</button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow border">
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Applied Machine Learning (10 weeks)</h3>
              <p className="text-gray-700 mb-4">From data cleaning to model deployment — real datasets and production-ready pipelines.</p>
              <div className="flex gap-3">
                <button className="bg-[#4d0a0a] text-white px-5 py-2 rounded-2xl">Enroll Now</button>
                <button className="border border-[#4d0a0a] text-[#4d0a0a] px-5 py-2 rounded-2xl">Download Syllabus</button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow border">
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">IoT & Embedded Systems (8 weeks)</h3>
              <p className="text-gray-700 mb-4">Sensors, microcontrollers, MQTT, and cloud integration with practical labs.</p>
              <div className="flex gap-3">
                <button className="bg-[#4d0a0a] text-white px-5 py-2 rounded-2xl">Enroll Now</button>
                <button className="border border-[#4d0a0a] text-[#4d0a0a] px-5 py-2 rounded-2xl">Download Syllabus</button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow border">
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">AI for Business Leaders (4 weeks)</h3>
              <p className="text-gray-700 mb-4">Non-technical track to understand AI opportunities, risks and strategy.</p>
              <div className="flex gap-3">
                <button className="bg-[#4d0a0a] text-white px-5 py-2 rounded-2xl">Enroll Now</button>
                <button className="border border-[#4d0a0a] text-[#4d0a0a] px-5 py-2 rounded-2xl">Download Syllabus</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Academy


