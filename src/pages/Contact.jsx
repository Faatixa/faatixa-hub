import React, { useState } from "react"
import { useSEO } from "../hooks/useSEO"

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
              <h2 className="text-xl font-bold text-[#0F172A] mb-3">Alternative</h2>
              <p className="text-gray-700">Email us at <span className="font-semibold">hello@cursorai.com</span> or call <span className="font-semibold">+252-XX-XXXXXXX</span>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact


