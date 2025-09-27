import React from "react"
import { useSEO } from "../hooks/useSEO"

function Projects(){
  useSEO(
    "Projects — Case Studies | Faatixa",
    "Explore AI, IoT and software projects delivering measurable results across industries."
  )
  return (
    <div className="bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-10">Projects / Case Studies</h1>

          <div className="space-y-10">
            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0F172A]">Smart Warehouse Automation</h2>
              <p className="text-gray-700 mt-2">Real-time inventory tracking using IoT sensors and predictive restock alerts.</p>
              <div className="mt-4 space-y-2 text-gray-700">
                <p><span className="font-semibold">Problem:</span> Manual stock checks causing delays and inaccuracies.</p>
                <p><span className="font-semibold">Solution:</span> IoT sensors, MQTT, and dashboards for live tracking.</p>
                <p><span className="font-semibold">Impact:</span> Reduced out-of-stock events by 35%.</p>
                <p><span className="font-semibold">Tech stack:</span> Node, React, Python, MQTT, MongoDB.</p>
              </div>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0F172A]">Customer Sentiment AI</h2>
              <p className="text-gray-700 mt-2">NLP model reduced response time and improved satisfaction by 35%.</p>
              <div className="mt-4 space-y-2 text-gray-700">
                <p><span className="font-semibold">Problem:</span> Slow, inconsistent customer support triage.</p>
                <p><span className="font-semibold">Solution:</span> NLP classification and prioritization dashboard.</p>
                <p><span className="font-semibold">Impact:</span> 35% faster response, higher CSAT.</p>
                <p><span className="font-semibold">Tech stack:</span> Python, TensorFlow, React.</p>
              </div>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0F172A]">Remote Learning Platform</h2>
              <p className="text-gray-700 mt-2">Scalable LMS for hands-on coding labs with live evaluations.</p>
              <div className="mt-4 space-y-2 text-gray-700">
                <p><span className="font-semibold">Problem:</span> Limited interactivity in remote courses.</p>
                <p><span className="font-semibold">Solution:</span> Live coding labs and automated feedback.</p>
                <p><span className="font-semibold">Impact:</span> Increased completion rate by 22%.</p>
                <p><span className="font-semibold">Tech stack:</span> Node, React, WebRTC, MongoDB.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects


