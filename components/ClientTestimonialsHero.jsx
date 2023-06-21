"use client"

import { Lilita_One, Bebas_Neue } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import style from '@styles/ClientTestimonialsHero.module.scss'
import { useRef } from 'react'

const lilita = Lilita_One({
    weight: "400",
    subsets: ['latin']
})

const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"]
  })

const ClientTestimonialsHero = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

  return (
    <>
    <h1 className={`${style.title} ${lilita.className}`}>Read What our Clients say about us !</h1>
    <div ref={ref} className={style.container}>
        <Link href={'/corporate-clients'} >
            <motion.div 
            animate={{x: isInView ? 0 : "100vw"}}
            transition={{duration: 0.8, type: "tween"}}
            className={style.card}>
                <div className={style.picture}>
                    <Image src="/assets/images/corporate.jpg" alt='Corporate Client Testimonials' fill />
                </div>
                <h1 className={`${style.cat} ${bebas.className}`}>Corporate</h1>
            </motion.div>
        </Link>
        <Link href={'/political-clients'} >
            <motion.div 
            animate={{x: isInView ? 0 : "100vw"}}
            transition={{duration: 0.9, type: "tween"}}
            className={style.card}>
                <div className={style.picture}>
                    <Image src="/assets/images/political.jpg" alt='Political Client Testimonials' fill />
                </div>
                <h1 className={`${style.cat} ${bebas.className}`}>Political</h1>    
            </motion.div>
        </Link>
        <Link href={'/events-clients'} >
            <motion.div 
            animate={{x: isInView ? 0 : "100vw"}}
            transition={{duration: 1, type: "tween"}}
            className={style.card}>
                <div className={style.picture}>
                    <Image src="/assets/images/events.jpg" alt='Events Client Testimonials' fill />
                </div>
                <h1 className={`${style.cat} ${bebas.className}`}>Events</h1>
            </motion.div>
        </Link>
    </div>
    </>
  )
}

export default ClientTestimonialsHero