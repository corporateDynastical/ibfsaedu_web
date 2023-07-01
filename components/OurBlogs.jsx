"use client"

import { Lilita_One, Bebas_Neue } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import style from '@styles/OurBlogs.module.scss'
import { useRef } from 'react'

const lilita = Lilita_One({
    weight: "400",
    subsets: ['latin']
})

const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"]
})

const OurBlogs = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const data = [
        {
            href: "/blogs/blog-1",
            src: "/assets/images/corporate.jpg",
            alt: "Trendy Digital Marketing & Advertising",
            heading: "Unlock the Power of Trendy Digital Marketing & Advertising",
            date: "22 FEB 2023"
        },
        {
            href: "/blogs/blog-2",
            src: "/assets/images/political.jpg",
            alt: "Creative Graphic Designs",
            heading: "Bringing Your Ideas To Life With Creative Graphic Designs",
            date: "24 FEB 2023"
        },
        {
            href: "/blogs/blog-3",
            src: "/assets/images/events.jpg",
            alt: "Dynastical Holi Blog",
            heading: "Let's color your brand with confidence",
            date: "06 MAR 2023"
        },
    ]


    return (
        <div className={style.container}>
            <div className={style.circle}></div>
            <div className={style.circle2}></div>
            <div className={style.circle3}></div>
            <div className={style.circle4}></div>
            <div className={style.left}>
                <h1 className={`${style.title} ${lilita.className}`}>Discover Our Blog Collection !
                </h1>
                <div className={style.picture}>
                    <Image src={'/assets/images/about.jpg'} alt='dynastical blogs' fill />
                </div>
            </div>
            <div ref={ref} className={style.right}>
                {data.map((item, index) => {
                    return (
                        <Link href={item.href} >
                            <div className={style.stripDiv}>
                                <div className={style.stripHead}>
                                    <div className={style.date}>
                                        <p className={bebas.className}>{item.date}</p>
                                    </div>
                                </div>
                                <div className={style.strip}>
                                    <div className={style.insideTopLeftCircle}></div>
                                    <div className={style.insideTopLeftCircle1}></div>
                                    <div className={style.insideTopLeftCircle2}></div>
                                    <div className={style.insideTopLeftCircle3}></div>
                                    <div className={style.insideBottomRightCircle}></div>
                                    <div className={style.insideBottomRightCircle1}></div>
                                    <div className={style.insideBottomRightCircle2}></div>
                                    <div className={style.insideBottomRightCircle3}></div>
                                    <div className={style.data}>
                                        <h1 className={`${style.heading} ${lilita.className}`}>
                                            {item.heading}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default OurBlogs