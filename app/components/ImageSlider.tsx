"use client";

import Slider from "react-slick";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
  height = "h-50",
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
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <ul style={{ margin: "0px" }}> {dots} </ul>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "white",
          opacity: 0.5, // inactive dots slightly transparent
          cursor: "pointer",
        }}
      ></div>
    ),
  };
  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          right: "10px",
          zIndex: 10,
          color: "white",
        }}
        onClick={onClick}
      >
        <FaArrowRight size={24} />
      </div>
    );
  }
  
  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          left: "10px",
          zIndex: 10,
          color: "white",
        }}
        onClick={onClick}
      >
        <FaArrowLeft size={24} />
      </div>
    );
  }
  
  return (
    <div className="w-full mt-10 flex justify-start pr-10">
      {/* White box */}
      <div className="w-full max-w-3xl bg-white rounded-3xl p-2 shadow-xl">
        {/* Content inside white box (slider on right) */}
        <div className="flex justify-end w-full">
          <div className="w-full max-w-3xl">
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-3xl ${height} md:h-[500px]`}
                >
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

                    <button className="bg-brand-blue hover:bg-brand-purple hover:text-white font-semibold text-black px-6 py-3 rounded-lg shadow-md transition">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
