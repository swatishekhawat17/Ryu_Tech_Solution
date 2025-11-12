"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Menu open/close icons


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-blue-400">
          Ryuu<span className="text-purple-400"> Technology Solutions</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />} 
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-3 text-gray-700 font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="block">Services</Link>
          <Link href="/products" onClick={() => setMenuOpen(false)} className="block">Products</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block">About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block">Contact</Link>
        </div>
      )}

    </nav>
  );
}
