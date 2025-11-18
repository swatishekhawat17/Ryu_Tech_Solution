import ImageSlider from "./components/ImageSlider";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as ImIcons from "react-icons/im";
import { ServiceCard } from "./components/ServiceCard";
import PageWrapper from "./components/PageWraper";
import ContactUs from "./components/contact_us";


const homeSlides = [
  { src: "/Images/Home_Slider/Graphic_Design.jpg", title: "Graphic Design", desc: "" },
  { src: "/Images/Home_Slider/Logo_Design.jpg", title: "Logo Design", desc: "" },
  { src: "/Images/Home_Slider/Web_Design.jpg", title: "WebApp Design", desc: "" },
];

export default function Home() {
  return (
    <PageWrapper>
      <>
        {/* Section 1: Slider */}
        <section
          className="relative pt-0 mt-0 flex items-start justify-start text-center overflow-hidden"
          data-aos="fade-up"
        >
          <div className="w-full max-w-9xl shadow-xl rounded-2xl overflow-hidden z-10">
            <ImageSlider slides={homeSlides} height="h-[500px]" autoplaySpeed={3000} />
          </div>
        </section>

        {/* Section 2: Services */}
        <section className="mt-10 pt-0" data-aos="fade-up">
          <div className="text-center mb-4 px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Services</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">
              Explore our range of creative and development services to help your brand shine.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 px-6 max-w-6xl mx-auto">

            {/* Product Development */}
            <div data-aos="zoom-in">
              <ServiceCard
                icon={<FaIcons.FaTools />}
                title="Product Development"
                desc="From idea to launch, we build reliable digital products."
                hoverDesc="We help you transform concepts into functional products with full-cycle development — including design, architecture, prototyping, testing, and deployment."
                link="/services/product-development"
              />
            </div>

            {/* Graphic Design */}
            <div data-aos="zoom-in">
              <ServiceCard
                icon={<MdIcons.MdDesignServices />}
                title="Graphic Design"
                desc="Visually stunning graphics to make your brand stand out."
                hoverDesc="From social media creatives to marketing materials, we craft clean and modern designs that elevate your visual identity."
                link="/services/graphic-design"
              />
            </div>

            {/* Video Editing */}
            <div data-aos="zoom-in">
              <ServiceCard
                icon={<RiIcons.RiVideoAiLine />}
                title="Video Editing"
                desc="Creative storytelling through professional editing."
                hoverDesc="We produce engaging video edits, motion graphics, reels, and promotional videos that capture attention and tell your story effectively."
                link="/services/video-editing"
              />
            </div>

            {/* Logo & Banner */}
            <div data-aos="zoom-in">
              <ServiceCard
                icon={<MdIcons.MdModeEditOutline />}
                title="Logo & Banner Design"
                desc="Crafting unique identities and marketing visuals."
                hoverDesc="Get custom-designed logos, banners, posters, and brand kits tailored specifically to reflect your business vision and personality."
                link="/services/logo-banner-design"
              />
            </div>

            {/* App Development */}
            <div data-aos="zoom-in">
              <ServiceCard
                icon={<ImIcons.ImAndroid />}
                title="App Development"
                desc="Intuitive and performant mobile applications."
                hoverDesc="We build fast, user-friendly Android, iOS, and cross-platform apps with modern UI/UX and scalable backend integration."
                link="/services/app-development"
              />
            </div>

            {/* Website Development */}
            <div data-aos="zoom-in">
              <ServiceCard
                icon={<FaIcons.FaLaptopCode />}
                title="Website Development"
                desc="Responsive, modern, and scalable web solutions."
                hoverDesc="We develop high-performance websites, portfolio sites, business dashboards, and full-stack web applications using modern technologies."
                link="/services/website-development"
              />
            </div>
          </div>
        </section>
        {/*Contact Us */}
        <div className = "mt-5" data-aos="fade-up" data-aos-delay="200">
          <ContactUs />
        </div>
      </>
    </PageWrapper>
  );
}
