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
      src: "/logos/delilah-01.png",
    },
    {
      src: "/logos/dynastical white-01.png",
    },
    {
      src: "/logos/main_logo.svg",
    },
    {
      src: "/logos/tapas1.png",
    },
    {
      src: "/logos/the pune studio-01.png",
    },
    {
      src: "/logos/trispirit-01.png",
    },
  ];

  return (
    <div className={style.container}>
      <Swiper
        modules={[A11y, Autoplay]}
        autoplay={{
          delay: 0,
        }}
        speed={2000}
        loop
        spaceBetween={100}
        slidesPerView={4}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide>
              <div
                key={index}
                className={style.picture}
                style={{
                  width: "200px",
                  height: "100px",
                  background: "#bbb",
                  position: "relative",
                }}
              >
                <Image
                  fill
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                  }}
                  src={item.src}
                  alt=""
                />
              </div>
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>
                    <div className={style.picture} style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.picture} style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.picture} style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.picture} style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.picture} style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.picture} style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.picture} style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.picture} style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.picture} style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.picture} style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.picture} style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.picture} style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
