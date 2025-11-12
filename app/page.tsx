import ImageSlider from "./components/ImageSlider";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as ImIcons from "react-icons/im";
import { ServiceCard } from "./components/ServiceCard";

const homeSlides = [
  { src: "/Images/Home_Slider/Graphic_Design.jpg", title: "Graphic Design", desc: "" },
  { src: "/Images/Home_Slider/Logo_Design.jpg", title: "Logo Design", desc: "" },
  { src: "/Images/Home_Slider/Web_Design.jpg", title: "WebApp Design", desc: "" },
];

export default function Home() {
  return (
    <>
      {/* Section 1: Header + Slider */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden ">

        <div className="z-10 space-y-6 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight animate-fadeIn">
            We craft innovative digital experiences with our expertise 🌟
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your ideas into powerful products, beautiful designs, and scalable solutions.
          </p>
        </div>

        <div className="mt-10 w-full max-w-6xl shadow-xl rounded-2xl overflow-hidden z-10 animate-fadeInSlow">
          <ImageSlider slides={homeSlides} height="h-[500px]" autoplaySpeed={3000} />
        </div>
      </section>

      {/* Section 2: Services */}
      <section>
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Services</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">
            Explore our range of creative and development services to help your brand shine.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 px-6 max-w-6xl mx-auto">
          <ServiceCard
            icon={<FaIcons.FaTools />}
            title="Product Development"
            desc="From idea to launch, we build reliable digital products."
          />
          <ServiceCard
            icon={<MdIcons.MdDesignServices/>}
            title="Graphic Design"
            desc="Visually stunning graphics to make your brand stand out."
          />
          <ServiceCard
            icon={<RiIcons.RiVideoAiLine  />}
            title="Video Editing"
            desc="Creative storytelling through professional editing."
          />
          <ServiceCard
            icon={<MdIcons.MdModeEditOutline />}
            title="Logo & Banner Design"
            desc="Crafting unique identities and marketing visuals."
          />
          <ServiceCard
            icon={<ImIcons.ImAndroid  />}
            title="App Development"
            desc="Intuitive and performant mobile applications."
          />
          <ServiceCard
            icon={<FaIcons.FaLaptopCode />}
            title="Website Development"
            desc="Responsive, modern, and scalable web solutions."
          />
        </div>
      </section>
    </>
  );
}
