"use client";
import { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

import style from "@styles/Slider.module.scss";

const Slider = () => {
  const data = [
    {
      src: "/corpLogos/carnival.png",
    },
    {
      src: "/corpLogos/delilah.png",
    },
    {
      src: "/corpLogos/dynastical.png",
    },
    {
      src: "/corpLogos/epb.png",
    },
    {
      src: "/corpLogos/kulfi_heaven.png",
    },
    {
      src: "/corpLogos/promax.png",
    },
    {
      src: "/corpLogos/right_foundation.png",
    },
    {
      src: "/corpLogos/runbhumi.png",
    },
    {
      src: "/corpLogos/sadguru_solar.png",
    },
    {
      src: "/corpLogos/tapas.png",
    },
    {
      src: "/corpLogos/tps.png",
    },
    {
      src: "/corpLogos/trispirit.png",
    },
    {
      src: "/corpLogos/vedbrahma.png",
    },

  ];

  return (
    <div className={style.container}>
      <Swiper
        modules={[A11y, Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        loop
        speed={5000}
        spaceBetween={0}
        slidesPerView={5}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide>
                <Image
                  key={index}
                  width={600}
                  height={600}
                  src={item.src}
                  alt=""
                />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
