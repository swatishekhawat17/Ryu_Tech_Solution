"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaPlus, FaMinus, FaPhoneAlt } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import "./styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <div className="group">
      <nav
        className="
          font-navbar font-bold text-[18px]
          absolute w-full top-0 left-0 z-30
          bg-transparent backdrop-blur-xl
          transition-all duration-300 px-10 py-4
          group-hover:bg-white group-hover:backdrop-blur-0
        "
      >
        <div
          className="
            w-full px-2 flex items-center justify-between
            text-white transition-all duration-300
            group-hover:text-black
          "
        >
          {/* ---- LEFT SECTION: Logo + Name ---- */}
          <div className="flex items-center gap-4">
            <div className="relative w-[50px] h-[50px]">
              <Image
                src="/Images/Main_Logo/main logo.png"
                alt="Ryuu Technology Solutions"
                fill
                className="object-contain transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            {/* <h1 className="text-2xl font-bold text-white group-hover:text-black">
              Ryuu Technology Solutions
            </h1> */}
          </div>

          {/* ---- DESKTOP MENU ---- */}
          <div className="ml-auto hidden md:flex items-center space-x-8">
            {/* Home */}
            <div className="nav-item">
              <Link href="/">Home</Link>
              <span className="nav-underline bg-brand-gradient"></span>
            </div>

            {/* Services */}
            <div className="nav-item">
              <div className="flex items-center gap-1">
                <span className="select-none">Services</span>
                <TiArrowSortedDown className="nav-arrow text-s" />
              </div>
              <span className="nav-underline bg-brand-gradient"></span>

              <div className="nav-dropdown bg-white">
                <p className="text-black text-sm">Service 1</p>
                <p className="text-black text-sm">Service 2</p>
              </div>
            </div>

            {/* Products */}
            <div className="nav-item">
              <div className="flex items-center gap-1">
                <span className="select-none">Products</span>
                <TiArrowSortedDown className="nav-arrow text-s" />
              </div>
              <span className="nav-underline bg-brand-gradient"></span>

              <div className="nav-dropdown bg-white">
                <p className="text-black text-sm">Product 1</p>
                <p className="text-black text-sm">Product 2</p>
              </div>
            </div>

            {/* About */}
            <div className="nav-item">
              <Link href="/about">About</Link>
              <span className="nav-underline bg-brand-gradient"></span>
            </div>

            {/* Contact */}
            <div className="nav-item">
              <Link href="/contact">Contact Us</Link>
              <span className="nav-underline bg-brand-gradient"></span>
            </div>

            {/* Icons */}
            <div
              className="
                hidden md:flex items-center 
                space-x-8 ml-10 lg:ml-20 
                text-white 
                group-hover:text-black
                transition-all 
                duration-300
              "
            >
              <div className="icon-wrapper">
                <FaPhoneAlt className="text-xl cursor-pointer" />
                <span className="icon-tooltip bg-brand-gradient text-white">
                  +91 9876543210
                </span>
              </div>

              <div className="icon-wrapper">
                <MdEmail className="text-2xl cursor-pointer" />
                <span className="icon-tooltip bg-brand-gradient text-white">
                  rtu@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* ---- MOBILE MENU BUTTON ---- */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl transition-all duration-300
            group-hover:text-black"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* ---- MOBILE MENU ---- */}
        {menuOpen && (
          <div
            className="
              md:hidden bg-white shadow-lg rounded-b-xl px-6 py-5
              flex flex-col space-y-5 text-gray-800 animate-slideDown
            "
          >
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-full px-4 py-2 pl-10 w-full text-sm"
              />
            </div>

            <div className="p-4 space-y-4">
              <Link href="/" className="block text-lg font-medium"> Home </Link>

              {/* Services Dropdown */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex justify-between items-center text-lg font-medium"
                >
                  Services
                  {!servicesOpen ? <FaPlus /> : <FaMinus />}
                </button>

                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-2 text-gray-700">
                    <Link href="/services/web-development" className="block"> Service 1 </Link>
                    <Link href="/services/mobile-apps" className="block"> Service 2 </Link>
                  </div>
                )}
              </div>

              {/* Products Dropdown */}
              <div>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="w-full flex justify-between items-center text-lg font-medium"
                >
                  Products
                  {!productsOpen ? <FaPlus /> : <FaMinus />}
                </button>

                {productsOpen && (
                  <div className="ml-4 mt-2 space-y-2 text-gray-700">
                    <Link href="/products/product1" className="block"> Product 1 </Link>
                    <Link href="/products/product2" className="block"> Product 2 </Link>
                  </div>
                )}
              </div>

              <Link href="/about" className="block text-lg font-medium"> About </Link>
              <Link href="/contact" className="block text-lg font-medium"> Contact Us </Link>
            </div>

            {/* Contact Info */}
            <div className="pt-4 border-t flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-lg" />
                <span className="text-sm">+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <MdEmail className="text-lg" />
                <span className="text-sm">info@ryuutech.com</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
