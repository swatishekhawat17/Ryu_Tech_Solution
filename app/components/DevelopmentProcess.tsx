"use client";

import { useEffect } from "react";
import Image from "next/image";

const steps = [
  {
    title: "DISCOVERY",
    desc: "We understand your business needs, goals, and target audience to define a clear roadmap.",
    img: "/Images/Dev_Process/discovery.jpg",
  },
  {
    title: "DESIGN & PLANNING",
    desc: "We create wireframes, UI/UX designs, and architectural plans for a flawless experience.",
    img: "/Images/Dev_Process/design.jpg",
  },
  {
    title: "DEVELOPMENT & TESTING",
    desc: "Our skilled developers build and rigorously test your product using modern tools.",
    img: "/Images/Dev_Process/development.jpg",
  },
  {
    title: "PROTOTYPING & MVP DEVELOPMENT",
    desc: "We create functional prototypes or MVPs to validate ideas faster.",
    img: "/Images/Dev_Process/prototype.jpg",
  },
  {
    title: "LAUNCH, MAINTENANCE & SUPPORT",
    desc: "Your product goes live with continuous updates, monitoring, and enhancements.",
    img: "/Images/Dev_Process/launch.jpg",
  },
];

export default function DevelopmentProcess() {
 

  return (
    <section className="py-20 bg-brand-gradient-dark mt-4 mb-4 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-white">
  Our Development Process
</h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          We follow a structured and agile process to deliver scalable, robust,
          and user-friendly applications.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-9">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative group overflow-hidden rounded-2xl bg-gray-900 cursor-pointer shadow-lg transition-all duration-500 hover:w-[110%] border-2"

            >
              {/* Background Image */}
              <div className="h-80 w-full overflow-hidden rounded-2xl">
                <Image
                  src={step.img}
                  alt={step.title}
                  width={400}
                  height={500}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-[0.3]"
                />
              </div>

              {/* Title (always visible) */}
              <h3 className="absolute bottom-4 left-4 font-bold text-white text-lg transition-all duration-500 group-hover:bottom-25">
                {step.title}
              </h3>

              {/* Hidden description (visible on hover) */}
              <p className="absolute bottom-[-150px] left-4 right-4 text-left text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:bottom-6">
                {step.desc}
              </p>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
