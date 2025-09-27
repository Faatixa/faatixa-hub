import React from "react"
import { useSEO } from "../hooks/useSEO"

function Privacy(){
  useSEO("Privacy Policy — Faatixa", "How Faatixa collects, uses and protects your data.")
  return (
    <div className="bg-white">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">Privacy Policy</h1>
          <p className="text-gray-700 mb-4">We collect minimal data necessary to provide our services, such as contact details for communication and analytics for site performance.</p>
          <p className="text-gray-700 mb-4">We do not sell personal data. You can request access or deletion of your data at any time by contacting hello@cursorai.com.</p>
        </div>
      </section>
    </div>
  )
}

export default Privacy


