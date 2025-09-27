import React from "react"
import { Link } from "react-router-dom"
import { useSEO } from "../hooks/useSEO"

const POSTS = [
  { slug: "ai-iot-trends-2025", title: "AI & IoT Trends for 2025", summary: "Key shifts in edge AI, private LLMs and industrial IoT.", date: "2025-01-10" },
  { slug: "ml-maturity-roadmap", title: "ML Maturity Roadmap", summary: "From experiments to production ML systems.", date: "2025-02-02" },
  { slug: "choosing-cloud-for-iot", title: "Choosing a Cloud for IoT", summary: "Telemetry, device twins and cost considerations.", date: "2025-03-05" }
]

function Blog(){
  useSEO(
    "Blog / Resources — Faatixa",
    "Articles on AI, IoT, ICT and software delivery from Faatixa."
  )
  return (
    <div className="bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-10">Blog / Resources</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map(p => (
              <article key={p.slug} className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <p className="text-sm text-gray-500 mb-2">{p.date}</p>
                <h2 className="text-xl font-bold text-[#0F172A] mb-2">{p.title}</h2>
                <p className="text-gray-700 mb-4">{p.summary}</p>
                <Link to={`/blog/${p.slug}`} className="text-[#4d0a0a] font-semibold">Read more →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog


