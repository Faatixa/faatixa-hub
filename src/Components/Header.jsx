import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { assets } from "../assets/assets"
import { site } from "../config/site"

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

                    {/* Social Media Icons */}
                    <div className="hidden md:flex items-center gap-4">
                        <a 
                            href={site.socials.twitter} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-[#4d0a0a] transition-colors"
                            aria-label="Twitter"
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                        <a 
                            href={site.socials.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-[#4d0a0a] transition-colors"
                            aria-label="Instagram"
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a 
                            href={site.socials.tiktok} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-[#4d0a0a] transition-colors"
                            aria-label="TikTok"
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                            </svg>
                        </a>
                        <Link 
                            to="/contact" 
                            className="bg-[#4d0a0a] text-white px-6 py-3 rounded-2xl hover:bg-[#3a0808] transition-colors"
                        >
                            Contact Us
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
                            <div className="pt-2 space-y-2">
                                <div className="flex items-center justify-center gap-4">
                                    <a 
                                        href={site.socials.twitter} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-[#4d0a0a] transition-colors"
                                        aria-label="Twitter"
                                    >
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                        </svg>
                                    </a>
                                    <a 
                                        href={site.socials.instagram} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-[#4d0a0a] transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                    <a 
                                        href={site.socials.tiktok} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-[#4d0a0a] transition-colors"
                                        aria-label="TikTok"
                                    >
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                        </svg>
                                    </a>
                                </div>
                                <Link 
                                    to="/contact" 
                                    className="block w-full bg-[#4d0a0a] text-white px-6 py-3 rounded-2xl text-center hover:bg-[#3a0808] transition-colors"
                                >
                                    Contact Us
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