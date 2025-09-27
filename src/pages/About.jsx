import React from "react"
import { useSEO } from "../hooks/useSEO"

function About(){
  useSEO(
    "About — Faatixa",
    "Faatixa builds smart solutions and skilled teams through AI, IoT, ICT and hands-on training. Meet our leadership team."
  )
  return (
    <div className="bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">About Faatixa</h1>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Faatixa advances businesses with smart technology. We design and deliver AI-driven solutions,
            IoT systems, ICT services, and hands-on programming education through our Academy. Our mission is to
            help teams build intelligent products and develop job-ready skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#0F172A]">Amina Yusuf — CEO & Founder</h3>
              <p className="text-gray-700 mt-2">Serial entrepreneur with 10+ years building digital products.</p>
              <a className="text-[#4d0a0a] mt-3 inline-block" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#0F172A]">Mohamed Ali — CTO</h3>
              <p className="text-gray-700 mt-2">AI engineer specializing in NLP and scalable ML systems.</p>
              <a className="text-[#4d0a0a] mt-3 inline-block" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#0F172A]">Fatima Noor — Head of Academy</h3>
              <p className="text-gray-700 mt-2">Curriculum designer and educator with experience in bootcamps.</p>
              <a className="text-[#4d0a0a] mt-3 inline-block" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About


