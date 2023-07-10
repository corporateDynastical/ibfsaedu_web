"use client"
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Didact_Gothic } from 'next/font/google'
import Image from 'next/image'
import style from '@styles/EventsPageHero.module.scss'

const didact = Didact_Gothic({
    weight: "400",
    subsets: ['latin']
})

const EventsPageHero = () => {

    return (
        <div className={style.container}>
            <div className={style.infoDiv}>
                <div className={style.strip}>
                    <div className={style.circle}></div>
                    <h1 className={`${style.title} ${didact.className}`}> <span>Coporate</span> Events</h1>
                </div>
                <h2 className={style.tagline}>Your corporate events made perfect with seamless planning!</h2>
                <div className={style.data}>
                    <p className={style.info}>From high-profile conferences to executive retreats and from on-ground special day programs to in-hall corporate programs, our team handles every detail, from concept development to flawless execution. With a focus on innovation and personalization, we deliver events that inspire, engage, and drive business success. Trust us to make your corporate event an extraordinary affair.</p>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Coporate Events" fill />
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
                <div className={`${style.strip} ${style.reverse}`}>
                    <h1 className={`${style.title} ${didact.className}`}> <span>Social</span>  Events</h1>
                    <div className={style.circle}></div>
                </div>
                <h2 className={`${style.tagline} ${style.taglineEnd}`}>Leave the planning to us, and enjoy the perfect social events!</h2>
                <div className={style.data}>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Social Events" fill />
                    </div>
                    <p className={`${style.info} ${style.infoEnd}`}>We take pride in curating and executing a diverse range of exceptional social events. We have successfully organized and managed various events that cater to different interests and themes. With our expertise and passion, we guarantee an exceptional event that will leave a lasting impression.
                    </p>
                </div>
            </div>
            <div className={style.carouselHeadings}>
                <h1 className={`${style.carouselTitle} ${didact.className}`}> <span>Political</span>  Events in Frames</h1>
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

