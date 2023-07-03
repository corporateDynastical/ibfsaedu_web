"use client"
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Lilita_One } from 'next/font/google'
import Image from 'next/image'
import style from '@styles/EventsPageHero.module.scss'

const lilita = Lilita_One({
    weight: "400",
    subsets: ['latin']
})

const EventsPageHero = () => {

    return (
        <div className={style.container}>
            <div className={style.circle1}></div>
            <div className={style.circle2}></div>
            <div className={style.circle3}></div>
            <div className={style.circle4}></div>
            <div className={style.circle5}></div>
            <div className={style.circle6}></div>
            <div className={style.infoDiv}>
                <div className={style.strip}>
                    <div className={style.circle}></div>
                    <h1 className={`${style.title} ${lilita.className}`}>Coporate Events</h1>
                </div>
                <h2 className={style.tagline}>Lorem ipsum dolor sit amet consec</h2>
                <div className={style.data}>
                    <p className={style.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?</p>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Coporate Events" fill />
                    </div>
                </div>
            </div>
            <div className={style.carouselHeadings}>
                <h1 className={`${style.carouselTitle} ${lilita.className}`}>Moments of Corporate Brilliance</h1>
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
                    <h1 className={`${style.title} ${lilita.className}`}>Social Events</h1>
                    <div className={style.circle}></div>
                </div>
                <h2 className={`${style.tagline} ${style.taglineEnd}`}>Lorem ipsum dolor sit amet consec</h2>
                <div className={style.data}>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Social Events" fill />
                    </div>
                    <p className={`${style.info} ${style.infoEnd}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?
                    </p>
                </div>
            </div>
            <div className={style.carouselHeadings}>
                <h1 className={`${style.carouselTitle} ${lilita.className}`}>Political Events in Frames</h1>
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

