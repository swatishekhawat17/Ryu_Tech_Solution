import { ServiceCard } from "./ServiceCardComponent";
import { servicesList }  from "./ServiceList";

import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as ImIcons from "react-icons/im";

{/*Service Section on home page*/}
export default function ServiceSection() {
  return (
    <section className="bg-white mt-4 pt-0" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-1 lg:grid-cols-2 gap-15">

        {/* ---------- LEFT SIDE ---------- */}
        <div className="relative flex flex-col justify-center">

          {/* Background image */}
          <img
            src="/Images/Main_Logo/main logo.png"
            className="absolute left-0 top-0 w-full h-full object-contain opacity-15 pointer-events-none"
            alt="background"
          />

          {/* Foreground content */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Services We Offer
          </h2>

          <div className="h-1 w-24 bg-brand-gradient rounded-full mb-6"></div>

          <p className="font-bold text-gray-500 leading-snug">
            As a leading software and mobile app development company, we employ
            the latest technologies and creative ways to deliver scalable,
            effective, and resilient solutions that drive business growth and
            success.
          </p>
        </div>

        {/* ---------- RIGHT SIDE (SERVICE CARDS GRID) ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center sm:place-items-stretch">
        {servicesList.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              hoverDesc={service.hoverDesc}
              link={service.link}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
