"use client"
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Didact_Gothic } from 'next/font/google'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import style from '@styles/EventsPageHero.module.scss'

const didact = Didact_Gothic({
    weight: "400",
    subsets: ['latin']
})

const EventsPageHero = () => {

    const ref1 = useRef(null)
    const isInView1 = useInView(ref1, { once: true })
    const ref2 = useRef(null)
    const isInView2 = useInView(ref2, { once: true })

    return (
        <div className={style.container}>
            <div className={style.infoDiv}>
                <div ref={ref1} className={style.strip}>
                    <motion.h1
                        animate={{ translateX: isInView1 ? 0 : -500 }}
                        transition={{ duration: 1 }}
                        className={`${style.title} ${didact.className}`}><span>Coporate</span> Events
                    </motion.h1>
                </div>
                <h2 className={style.tagline}>Your corporate events made perfect with seamless planning!</h2>
                <div className={style.data}>
                    <p className={style.info}>From high-profile conferences to executive retreats and from on-ground special day programs to in-hall corporate programs, our team handles every detail, from concept development to flawless execution. With a focus on innovation and personalization, we deliver events that inspire, engage, and drive business success. Trust us to make your corporate event an extraordinary affair.</p>
                    <div className={style.pictureDiv}>
                        <div className={style.picture}>
                            <Image src='/assets/images/services/brand.png' alt="Search Engine Optimization (SEO)" fill />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.carouselHeadings}>
                <h1 className={`${style.carouselTitle} ${didact.className}`}>Moments of <span> Corporate </span> Brilliance</h1>
                <p className={style.carouselTagline}>Captivating Event Highlights</p>
            </div>
            <div className={style.sliderDiv}>
                <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div style={{
                            position: "relative",
                            width: "100%",
                            height: "80vh",
                            border: "1px solid #000"
                        }}>
                            <Image
                                style={{
                                    position: "absolute",
                                }}
                                src={"/assets/images/about.jpg"} alt='dynastical corporate events' fill />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{
                            position: "relative",
                            width: "100%",
                            height: "80vh",
                            border: "1px solid #000"
                        }}>
                            <Image
                                style={{
                                    position: "absolute",
                                }}
                                src={"/assets/images/about.jpg"} alt='dynastical corporate events' fill />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{
                            position: "relative",
                            width: "100%",
                            height: "80vh",
                            border: "1px solid #000"
                        }}>
                            <Image
                                style={{
                                    position: "absolute",
                                }}
                                src={"/assets/images/about.jpg"} alt='dynastical corporate events' fill />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{
                            position: "relative",
                            width: "100%",
                            height: "80vh",
                            border: "1px solid #000"
                        }}>
                            <Image
                                style={{
                                    position: "absolute",
                                }}
                                src={"/assets/images/about.jpg"} alt='dynastical corporate events' fill />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={style.infoDiv}>
                <div ref={ref2} className={`${style.strip} ${style.reverse}`}>
                    <motion.h1
                        animate={{ translateX: isInView2 ? 0 : 500 }}
                        transition={{ duration: 1 }}
                        className={`${style.title} ${didact.className}`}><span>Social</span>  Events
                    </motion.h1>
                </div>
                <h2 className={`${style.tagline} ${style.taglineEnd}`}>Leave the planning to us, and enjoy the perfect social events!</h2>
                <div className={style.data}>
                    <div className={style.pictureDiv}>
                        <div className={style.picture}>
                            <Image src='/assets/images/services/brand.png' alt="Search Engine Optimization (SEO)" fill />
                        </div>
                    </div>
                    <p className={`${style.info} ${style.infoEnd}`}>
                        Our team takes great pride in curating and executing a wide range of exceptional social events. With a proven track record of successfully organizing and managing various events, we specialize in creating immersive experiences that cater to diverse interests and themes. Count on our expertise and passion to deliver an event that exceeds your expectations, leaving a lasting impression on your guests.
                    </p>
                </div>
            </div>
            <div className={style.carouselHeadings}>
                <h1 className={`${style.carouselTitle} ${didact.className}`}> <span>Social</span>  Events in Frames</h1>
                <p className={style.carouselTagline}>Captivating Moments in Pictures</p>
            </div>
            <div className={style.sliderDiv}>
                <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div style={{
                            position: "relative",
                            width: "100%",
                            height: "80vh",
                            border: "1px solid #000"
                        }}>
                            <Image
                                style={{
                                    position: "absolute",
                                }}
                                src={"/assets/images/about.jpg"} alt='dynastical corporate events' fill />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{
                            position: "relative",
                            width: "100%",
                            height: "80vh",
                            border: "1px solid #000"
                        }}>
                            <Image
                                style={{
                                    position: "absolute",
                                }}
                                src={"/assets/images/about.jpg"} alt='dynastical corporate events' fill />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{
                            position: "relative",
                            width: "100%",
                            height: "80vh",
                            border: "1px solid #000"
                        }}>
                            <Image
                                style={{
                                    position: "absolute",
                                }}
                                src={"/assets/images/about.jpg"} alt='dynastical corporate events' fill />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{
                            position: "relative",
                            width: "100%",
                            height: "80vh",
                            border: "1px solid #000"
                        }}>
                            <Image
                                style={{
                                    position: "absolute",
                                }}
                                src={"/assets/images/about.jpg"} alt='dynastical corporate events' fill />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default EventsPageHero

