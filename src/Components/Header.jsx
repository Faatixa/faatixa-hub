import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { assets } from "../assets/assets"

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img className="w-32 h-32" src={assets.logo} alt="Faatixa Logo" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {[
                          { to: '/', label: 'Home' },
                          { to: '/about', label: 'About' },
                          { to: '/services', label: 'Services' },
                          { to: '/academy', label: 'Academy' },
                          { to: '/projects', label: 'Projects' },
                          { to: '/blog', label: 'Blog' },
                          { to: '/contact', label: 'Contact' },
                        ].map(link => (
                          <NavLink 
                            key={link.to} 
                            to={link.to}
                            className={({ isActive }) =>
                              `transition-colors ${isActive ? 'text-[#4d0a0a] font-semibold' : 'text-gray-700 hover:text-[#4d0a0a]'}`
                            }
                          >
                            {link.label}
                          </NavLink>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex">
                        <Link 
                            to="/contact" 
                            className="bg-[#4d0a0a] text-white px-6 py-3 rounded-2xl hover:bg-[#3a0808] transition-colors"
                        >
                            Get a Demo
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-[#4d0a0a] focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-[#4d0a0a]">
                                Home
                            </Link>
                            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-[#4d0a0a]">
                                About
                            </Link>
                            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-[#4d0a0a]">
                                Services
                            </Link>
                            <Link to="/academy" className="block px-3 py-2 text-gray-700 hover:text-[#4d0a0a]">
                                Academy
                            </Link>
                            <Link to="/projects" className="block px-3 py-2 text-gray-700 hover:text-[#4d0a0a]">
                                Projects
                            </Link>
                            <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-[#4d0a0a]">
                                Blog
                            </Link>
                            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-[#4d0a0a]">
                                Contact
                            </Link>
                            <div className="pt-2">
                                <Link 
                                    to="/contact" 
                                    className="block w-full bg-[#4d0a0a] text-white px-6 py-3 rounded-2xl text-center hover:bg-[#3a0808] transition-colors"
                                >
                                    Get a Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header