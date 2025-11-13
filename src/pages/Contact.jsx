import React, { useState } from "react"
import { useSEO } from "../hooks/useSEO"
import { site } from "../config/site"

function Contact(){
  useSEO(
    "Contact — Request Demo | Faatixa",
    "Get in touch with Faatixa for custom solutions, demos, or course enrollment."
  )
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("")

  const validate = () => {
    const next = {}
    if(!form.name.trim()) next.name = "Required"
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Valid email required"
    if(!form.subject.trim()) next.subject = "Required"
    if(!form.message.trim()) next.message = "Required"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const submit = (e) => {
    e.preventDefault()
    setStatus("")
    if(!validate()) return
    // Placeholder submission. Integrate EmailJS or backend here.
    setTimeout(() => {
      setStatus("Message sent! We'll get back to you shortly.")
      setForm({ name: "", email: "", company: "", subject: "", message: "" })
    }, 400)
  }
  return (
    <div className="bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">Get in touch with Faatixa</h1>
          <p className="text-gray-700 mb-8 max-w-2xl">Whether you need a custom solution or want to enroll in a course, our team is ready to help.</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <form onSubmit={submit} className="lg:col-span-2 bg-white border rounded-2xl p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className={`border rounded-xl px-4 py-3 w-full ${errors.name? 'border-red-500':''}`} placeholder="Your full name" />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className={`border rounded-xl px-4 py-3 w-full ${errors.email? 'border-red-500':''}`} placeholder="Work email" />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>
                <input value={form.company} onChange={e=>setForm({...form, company:e.target.value})} className="border rounded-xl px-4 py-3 w-full" placeholder="Company or school" />
                <div>
                  <input value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} className={`border rounded-xl px-4 py-3 w-full ${errors.subject? 'border-red-500':''}`} placeholder="Subject" />
                  {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject}</p>}
                </div>
              </div>
              <div>
                <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className={`border rounded-xl px-4 py-3 w-full mt-4 ${errors.message? 'border-red-500':''}`} rows="6" placeholder="Message" />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>
              <button type="submit" className="mt-4 bg-[#4d0a0a] text-white px-6 py-3 rounded-2xl">Send Message</button>
              {status && <p className="text-green-600 mt-3">{status}</p>}
            </form>

            <div className="bg-[#F8FAFC] rounded-2xl p-6">
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a href={`mailto:${site.email}`} className="text-[#4d0a0a] font-semibold hover:underline">
                    {site.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="text-[#4d0a0a] font-semibold hover:underline">
                    {site.phone}
                  </a>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-gray-500 mb-3">Follow Us</p>
                  <div className="flex gap-4">
                    <a 
                      href={site.socials.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#4d0a0a] transition-colors"
                      aria-label="Twitter"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a 
                      href={site.socials.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#4d0a0a] transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a 
                      href={site.socials.tiktok} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#4d0a0a] transition-colors"
                      aria-label="TikTok"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact


