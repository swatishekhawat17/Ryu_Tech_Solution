"use client";

import Slider from "react-slick";
import Image from "next/image";

type Slide = {
  src: string;
  title: string;
  desc: string;
  height?: string; // optional (if you plan to pass height later)
};

interface ImageSliderProps {
  slides: Slide[];
  height?: string;
  autoplaySpeed?: number;
}


export default function ImageSlider({
  slides,
  height = "h-100",
  autoplaySpeed = 3000,
}: ImageSliderProps) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed,
    arrows: false,
  };

  return (
    <div className="w-full max-w-9xl mx-auto mt-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={`relative overflow-hidden rounded-3xl ${height} md:h-[500px]`}>
            {/* Background image */}
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-3xl"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start text-white rounded-xl pl-8 md:pl-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-lg mb-5">{slide.desc}</p>

              <button className="bg-blue-300 hover:bg-purple-200 text-black px-6 py-3 rounded-lg shadow-md transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

