export default function Footer() {
  return (
    <footer className="bg-brand-gradient-dark text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1 - About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            We provide creative digital services including App Development, Web
            Design, and Graphic Design — helping you build your brand and
            digital presence.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact + Map */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:ryuutechnologysolutions@gmail.com"
              className="hover:text-blue-400 transition"
            >
              ryuutechnologysolutions@gmail.com
            </a>
          </p>
          <p>Phone: +91 9876543210</p>

          {/* MAP */}
          <div className="mt-4">
            <a
              href="https://maps.app.goo.gl/BVVCQR3XT9ym61GFA" // <-- if want to change the location then change this and iframe of the location 
              target="_blank"
              rel="noopener noreferrer"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7159.169796540949!2d73.01872914627654!3d26.210178308291415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418bbea3ffa63b%3A0x58b0a0a27b618e35!2sKudi%20Bhagtasni%20Housing%20Board%2C%20Jodhpur%2C%20Rajasthan%20342005!5e0!3m2!1sen!2sin!4v1764052105862!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md cursor-pointer hover:opacity-90"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Ryuu Technology Solution. All rights
        reserved.
      </div>
    </footer>
  );
}
