import ImageSlider from "./components/ImageSlider";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as ImIcons from "react-icons/im";

import {ServiceCard} from "./components/ServiceCard";
import { QualityCard } from "./components/ServiceCard";

// for showing the slider on the screen 
 const homeSlides = [
    { src: "/Images/Home_Slider/img_1.jpg", title: "PCB", desc: "PCB Image" },
    { src: "/Images/Home_Slider/img_2.jpg", title: "Circuit", desc: "Electronics World" },
  ];

export default function Home() {
  return (
  <>
    {/* Section 1: Header + Slider */}
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold text-gray-800 ">
        We are here for you 🌟
      </h1>
      <ImageSlider slides={homeSlides} height="h-[500px]" autoplaySpeed={3000} />
    </div>

    {/*Section 2: Quality Cards*/}
    <div className="bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-8 p-20 ">
      <QualityCard icon={<FaIcons.FaTools />} title="Product Development"/>
      <QualityCard icon={<MdIcons.MdDesignServices />} title="Graphic Design" />
      <QualityCard icon={<RiIcons.RiVideoAiLine />} title="Video Editing" />
      <QualityCard icon={<MdIcons.MdModeEditOutline />} title="Logo & Banner Design" />
      <QualityCard icon={<ImIcons.ImAndroid />} title="App Development" />
      <QualityCard icon={<FaIcons.FaLaptopCode />} title="Website Development" />
    </div>

    {/* Section 3: Service Cards */}
    <div className="bg-gray-50 flex flex-wrap gap-6 justify-center items-center p-8">
      <ServiceCard icon={<FaIcons.FaTools />} title="Product Development"/>
      <ServiceCard icon={<MdIcons.MdDesignServices />} title="Graphic Design" />
      <ServiceCard icon={<RiIcons.RiVideoAiLine />} title="Video Editing" />
      <ServiceCard icon={<MdIcons.MdModeEditOutline />} title="Logo & Banner Design" />
      <ServiceCard icon={<ImIcons.ImAndroid />} title="App Development" />
      <ServiceCard icon={<FaIcons.FaLaptopCode />} title="Website Development" />
    </div>

  </>
);

}
