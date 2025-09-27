import React from "react"
import { Link } from "react-router-dom"
import { useSEO } from "../hooks/useSEO"

function NotFound(){
  useSEO("Page Not Found — Faatixa", "The page you’re looking for doesn’t exist.")
  return (
    <div className="bg-white">
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-extrabold text-[#0F172A]">404</h1>
          <p className="mt-4 text-gray-600">Sorry, we can’t find that page.</p>
          <Link to="/" className="mt-6 inline-block bg-[#4d0a0a] text-white px-6 py-3 rounded-2xl">Go Home</Link>
        </div>
      </section>
    </div>
  )
}

export default NotFound


