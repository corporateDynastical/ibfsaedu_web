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
    const isInView = useInView(ref, {once: true})

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
    <>
    <h1 className={`${style.title} ${lilita.className}`}>Our Blogs !</h1>
    <div ref={ref} className={style.container}>
        {data.map((item, index)=> {
           return (<Link href={item.href} >
            <motion.div 
            animate={{x: isInView ? 0 : "100vw"}}
            transition={{duration: 0.8, type: "tween", delay: 0.05 * index}}
            className={style.card}>
                <div className={style.picture}>
                    <Image src={item.src} alt={item.alt} fill />
                </div>
                <div className={style.data}>
                    <h1 className={style.heading}>
                        {item.heading}
                    </h1>                    
                    <div className={style.date}>
                        <p className={bebas.className}>{item.date}</p>
                    </div>
                </div>
            </motion.div>
        </Link>)})}
    </div>
    </>
  )
}

export default OurBlogs