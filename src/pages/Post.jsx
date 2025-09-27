import React, { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useSEO } from "../hooks/useSEO"

const CONTENT = {
  "ai-iot-trends-2025": {
    title: "AI & IoT Trends for 2025",
    description: "Key shifts in edge AI, private LLMs and industrial IoT.",
    body: `Edge AI reduces latency, private LLMs protect data, and industrial IoT focuses on reliability and cost.`
  },
  "ml-maturity-roadmap": {
    title: "ML Maturity Roadmap",
    description: "From experiments to production ML systems.",
    body: `Define business goals, data strategy, CI/CD for ML, monitoring and responsible AI practices.`
  },
  "choosing-cloud-for-iot": {
    title: "Choosing a Cloud for IoT",
    description: "Telemetry, device twins and cost considerations.",
    body: `Evaluate device management, messaging protocols, pricing models, and compliance in your target markets.`
  }
}

function Post(){
  const { slug } = useParams()
  const post = CONTENT[slug]

  useSEO(
    post ? `${post.title} — Faatixa` : "Post — Faatixa",
    post ? post.description : "Read the latest from Faatixa."
  )

  if(!post){
    return (
      <div className="bg-white">
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-2xl font-bold text-[#0F172A] mb-4">Post not found</h1>
            <Link to="/blog" className="text-[#4d0a0a]">← Back to Blog</Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-gray-500 mb-2"><Link to="/blog" className="text-[#4d0a0a]">Blog</Link> · 2025</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">{post.title}</h1>
          <p className="text-gray-700 mb-6">{post.description}</p>
          <div className="prose max-w-none">
            {post.body}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Post


