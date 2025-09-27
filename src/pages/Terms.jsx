import React from "react"
import { useSEO } from "../hooks/useSEO"

function Terms(){
  useSEO("Terms — Faatixa", "Terms and conditions for using Faatixa services and website.")
  return (
    <div className="bg-white">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">Terms & Conditions</h1>
          <p className="text-gray-700 mb-4">By accessing our website or using our services, you agree to these terms. Content is provided as-is, and services are delivered under applicable statements of work and SLAs.</p>
          <p className="text-gray-700 mb-4">We may update these terms from time to time. Continued use constitutes acceptance of the latest version.</p>
        </div>
      </section>
    </div>
  )
}

export default Terms


