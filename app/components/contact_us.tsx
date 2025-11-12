import * as FaIcons from "react-icons/fa";
export default function ContactUs(){
    {/* Section 3: Contact Us */}
return(
<section className="w-full bg-gradient-to-r from-blue-200 to-purple-200 text-black py-20 px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* LEFT SIDE - Taglines */}
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-6">
        Tailored <span className="text-blue-500">Solutions</span> with <br />
        <span className="text-purple-400">Product-Led Innovation</span> & AI Excellence
      </h2>
      <p className="text-gray-500 text-lg mb-8">
        Driving digital innovation through our AI-driven Pods, rapid prototyping, 
        product-led strategies, and continuous innovation.
      </p>

      <div className="flex flex-wrap gap-10 mt-10">
        <div>
          <p className="text-3xl font-bold text-blue-500">15+</p>
          <p className="text-gray-600 text-sm">Application Deployments</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-purple-500">#1</p>
          <p className="text-gray-600 text-sm">Software Company</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-500">20+</p>
          <p className="text-gray-600 text-sm">Development Experts</p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE - Contact Form */}
    <div className="bg-[#0b2434] p-8 md:p-10 rounded-2xl shadow-lg border border-gray-700">
      <h3 className="text-2xl font-semibold mb-6 text-center text-white">
        Let’s discuss how our expertise can help you achieve your goals
      </h3>

      <form className="space-y-5">
        <div>
          <label className="block text-sm mb-1 text-gray-300">Your Name*</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg bg-[#122f40] border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-gray-300">Business Email*</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-3 rounded-lg bg-[#122f40] border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-gray-300">Company Name</label>
          <input
            type="text"
            placeholder="Your company name"
            className="w-full p-3 rounded-lg bg-[#122f40] border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-gray-300">Contact No*</label>
          <input
            type="text"
            placeholder="+91 98765 43210"
            className="w-full p-3 rounded-lg bg-[#122f40] border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-gray-300">How Can We Help You*</label>
          <textarea
            rows={4}
            placeholder="Write your message..."
            className="w-full p-3 rounded-lg bg-[#122f40] border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Connect with us
        </button>
      </form>
    </div>
  </div>
</section>

)
}
