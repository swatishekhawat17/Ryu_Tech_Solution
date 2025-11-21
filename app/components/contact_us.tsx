"use client";
import Image from "next/image";
import "./styles/contact_form.css";

export default function ContactUs() {
  return (
    <section className="w-full flex justify-center py-5 px-2 bg-gray-100">
      <div className="relative w-full max-w-9xl bg-white rounded-3xl shadow-xl p-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Form Section */}
          <div className="bg-white shadow-md rounded-xl p-6">
          <h1 className="text-center text-4xl font-extrabold text-grey-700 mb-4"> Lets's Connect</h1>
          <p className ="text-center text-xm mb-8 text-gray-600">
          I'd love to connect with you to talk about your project and possible partnership</p>
          
          <form className="contactForm">
            {/* First Name + Last Name */}
            <div className="formRow">
              <div>
                <label className="formLabel">First Name</label>
                <input type="text" className="formInput" placeholder="First Name" />
              </div>

              <div>
                <label className="formLabel">Last Name</label>
                <input type="text" className="formInput" placeholder="Last Name" />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="formRow">
              <div>
                <label className="formLabel">Email</label>
                <input type="email" className="formInput" placeholder="Your Email" />
              </div>

              <div>
                <label className="formLabel">Phone Number</label>
                <input type="text" className="formInput" placeholder="Phone Number" />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="formLabel">Message</label>
              <textarea rows={4} className="formTextarea" placeholder="Write your message..."></textarea>
            </div>
            {/* Button */}
            <button className="formButton">Send Message</button>
          </form>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center ">
            <div className="relative w-[650px] h-[650px] rounded-4xl overflow-hidden ">
              <Image
                src="/Images/Contact_us.jpg"
                alt="Contact Illustration"
                fill
                className="object-cover opacity-70"  // reduced opacity
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
