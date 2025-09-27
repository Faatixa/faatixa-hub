import React from "react"
import { useSEO } from "../hooks/useSEO"

function Dashboard(){
  useSEO("Dashboard — Client Portal | Faatixa", "Client portal placeholder page for authenticated users.")
  return (
    <div className="bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Client Portal</h1>
          <p className="text-gray-700">This is a scaffold for future authenticated features (projects, tickets, reports).</p>
        </div>
      </section>
    </div>
  )
}

export default Dashboard


