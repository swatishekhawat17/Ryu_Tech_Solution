export default function Footer() {
  return (
    <footer className="bg-[#0b2434] text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Column 1 - About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            We provide creative digital services including App Development,
            Web Design, and Graphic Design — helping you build your brand
            and digital presence.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p>Email: <a href="mailto:info@rts.com" className="hover:text-blue-400 transition">info@trs.com</a></p>
          <p>Phone: +91 9876543210</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#" className="hover:text-blue-400 transition">🌐</a>
            <a href="#" className="hover:text-blue-400 transition">📘</a>
            <a href="#" className="hover:text-blue-400 transition">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Ryu Technology Solution. All rights reserved.
      </div>
    </footer>
  );
}
