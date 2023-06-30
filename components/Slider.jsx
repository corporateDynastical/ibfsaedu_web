"use client"
import { A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay'
import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({
    weight: "400",
    subsets: ['latin']
  })
  
import style from '@styles/Slider.module.scss'

const Slider = () => {
    return (
        <div className={style.container}>
            <div className={style.circle1}></div>
            <div className={style.circle2}></div>
            <div className={style.circle3}></div>
            <div className={style.circle4}></div>
            <h1 className={lilita.className}>Our Trusted Partners</h1>
            <Swiper
                modules={[A11y, Autoplay]}
                autoplay={{
                    delay: 0
                }}
                speed={2000}
                loop
                spaceBetween={100}
                slidesPerView={6}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '100px', height: '100px', background: "#bbb", position: "relative" }}>
                        <Image fill style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}} src={'/assets/images/about.jpg'} alt=""/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider