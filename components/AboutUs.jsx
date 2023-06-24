"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Lilita_One } from 'next/font/google'
import { motion, useInView } from 'framer-motion'
import style from '@styles/AboutUs.module.scss'
import { useRef } from 'react'

const lilita = Lilita_One({
  weight: "400",
  subsets: ['latin']
})

const AboutUs = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})

  return (
    <div className={style.container}>
        <div ref={ref} className={style.left}>
            <motion.h1
            animate={{translateY: isInView ? 0 : "500px", opacity: isInView ? 1 : 0}}
            transition={{duration: 0.4, ease: "linear", type: "spring"}}
            className={lilita.className}>Welcome to Dynastical</motion.h1>
            <motion.p
            animate={{translateY: isInView ? 0 : "500px", opacity: isInView ? 1 : 0}}
            transition={{duration: 0.5, ease: "linear", delay: 0.3, type: "spring"}}
            >Reign Your Digital Kingdom with Dynastical Communication</motion.p>
            <motion.h2
            animate={{translateY: isInView ? 0 : "500px", opacity: isInView ? 1 : 0}}
            transition={{duration: 0.5, ease: "linear", delay: 0.5, type: "spring"}}
            >Dynastical Communication is a full-service digital marketing and advertising agency in Pune that helps businesses increase their online visibility and reach their target audience. With a team of experienced professionals, Dynastical Communication provides a range of services including SEO, PPC advertising, social media marketing, email marketing, content marketing, and website design and development. At Dynastical Communication, we believe that your digital dreams can become a reality with the right strategy and execution. So, join us and reign your digital kingdom with confidence!</motion.h2>
        </div>
        <div className={style.right}>
            <div className={style.picture}>
                <Image src="/assets/images/digiservice.png" alt='dynastical communication about' fill />
            </div>
        </div>
    </div>
  )
}

export default AboutUs