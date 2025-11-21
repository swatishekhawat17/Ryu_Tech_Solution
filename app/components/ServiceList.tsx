import { ServiceCard } from "./ServiceCardComponent";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as ImIcons from "react-icons/im";

{/*Service Cards*/}
export default function ServiceList() {
  return (
    <section className="bg-white mt-4 pt-0" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 lg:px-15 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12">

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ServiceCard
            icon={<FaIcons.FaTools />}
            title="Product Development"
            desc="From idea to launch, we build reliable digital products."
            hoverDesc="We help you transform concepts into functional products with full-cycle development — including design, architecture, prototyping, testing, and deployment."
            link="/services/product-development"
          />

          <ServiceCard
            icon={<MdIcons.MdDesignServices />}
            title="Graphic Design"
            desc="Visually stunning graphics to make your brand stand out."
            hoverDesc="From social media creatives to marketing materials, we craft modern designs that elevate your visual identity."
            link="/services/graphic-design"
          />

          <ServiceCard
            icon={<RiIcons.RiVideoAiLine />}
            title="Video Editing"
            desc="Creative storytelling through professional editing."
            hoverDesc="We produce engaging video edits, motion graphics, reels, and promotional videos."
            link="/services/video-editing"
          />

          <ServiceCard
            icon={<MdIcons.MdModeEditOutline />}
            title="Logo & Banner Design"
            desc="Crafting unique identities and visuals."
            hoverDesc="Custom-designed logos, banners, posters, and brand kits that match your business personality."
            link="/services/logo-banner-design"
          />

          <ServiceCard
            icon={<ImIcons.ImAndroid />}
            title="App Development"
            desc="Modern and fast mobile applications."
            hoverDesc="We build Android, iOS, and cross-platform apps with beautiful UI and scalable backends."
            link="/services/app-development"
          />

          <ServiceCard
            icon={<FaIcons.FaLaptopCode />}
            title="Website Development"
            desc="Responsive and scalable web solutions."
            hoverDesc="We develop websites, dashboards, and full-stack web apps using modern technologies."
            link="/services/website-development"
          />
        </div>

      </div>
    </section>
  );
}
