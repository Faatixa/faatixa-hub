import React from "react"
import { useSEO } from "../hooks/useSEO"

function Services(){
  useSEO(
    "Services — AI, IoT, ICT, Software, Support | Faatixa",
    "End-to-end AI, IoT, ICT, custom software and support services. From prototype to production with secure, scalable delivery."
  )
  return (
    <div className="bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-10">Services</h1>

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-3">AI Solutions</h2>
              <p className="text-gray-700 max-w-4xl">We design and deploy machine learning models tailored to business problems: predictive analytics, NLP, computer vision, and automation. From data strategy and model training to deployment and monitoring, Faatixa ensures reliable, interpretable, and scalable AI systems.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-3">IoT Systems</h2>
              <p className="text-gray-700 max-w-4xl">Our IoT solutions connect hardware, firmware and cloud to provide real-time telemetry, remote control, and automation. We build secure device fleets, edge processing pipelines, and dashboards for actionable insights and reduced downtime.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-3">ICT Services</h2>
              <p className="text-gray-700 max-w-4xl">Robust ICT services including network design, cloud migration, server management and cybersecurity. We ensure reliable uptime and compliant infrastructure for SMBs and enterprises.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-3">Academy — Programming & AI</h2>
              <p className="text-gray-700 max-w-4xl">Hands-on courses for web development, data science, AI and embedded systems. Courses include live labs, projects and mentorship so learners graduate with demonstrable skills.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-3">Custom Software Development</h2>
              <p className="text-gray-700 max-w-4xl">We build web and mobile applications using modern stacks (React, Node, MongoDB, etc.). Focus on clean architecture, test coverage and CI/CD for faster delivery.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-3">Support & Maintenance</h2>
              <p className="text-gray-700 max-w-4xl">Continuous support packages, backups, security patches and SLA-based incident response to keep your systems safe and up-to-date.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services


