import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import ChatBubble from "./Components/ChatBubble"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Academy from "./pages/Academy"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Post from "./pages/Post"
import Terms from "./pages/Terms"
import Privacy from "./pages/Privacy"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"

function App(){
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Post />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ChatBubble />
      </div>
    </Router>
  )
}
export default App