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
import { BsArrowRight } from "react-icons/bs";
import { Didact_Gothic } from "next/font/google";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

import style from "@styles/Slider.module.scss";
import Link from "next/link";

const Slider = ({ data, onPage, title, href }) => {

  return (
    <>
      <div className={style.titleDiv}>
        <h1 className={didact.className}>{title}</h1>
        { onPage &&
          <button>
            <Link href={href} >View All <BsArrowRight /></Link>
          </button>
        }
      </div>
      <div className={`${style.container} ${onPage ? style.onPage : ''}`}>
        <Swiper
          modules={[A11y, Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: "false"
          }}
          loop
          speed={2000}
          spaceBetween={100}
          slidesPerView={6}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={style.picture}>
                  <Image src={item.src} alt="dynastical clients" fill />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
