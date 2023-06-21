"use client"

import {motion} from "framer-motion"
import { Abril_Fatface, Bebas_Neue } from 'next/font/google'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {AiFillCaretDown} from 'react-icons/ai'
import Image from "next/image"
import style from '@styles/Hero.module.scss'

const abril = Abril_Fatface({
  weight: "400",
  subsets: ["latin"]
})

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"]
})

const Hero = () => {

  const [text] = useTypewriter({
    words: ['Advertising', 'Marketing', 'Branding'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  })

  return (
    <div className={style.container}>
        <div className={style.right}>
          <div className={style.picture}>
            <div className={style.overlay}></div>
            <Image fill src='/assets/images/hero/cartoon.png' alt="dynastical communication character" />
          </div>
          <h2 className={bebas.className}>We Do 
            <span className='word ml-2'> {text} </span>
          </h2> 
        </div>
        <div className={`${style.left} ${abril.className}`}>
          <div style={{overflow: "hidden"}}>
            <motion.h1
            initial={{y: "90%"}}
            animate={{y: 0}}
            transition={{ease: "linear", duration: 0.6, }}
            >Dynastical</motion.h1>
          </div>
          <div style={{overflow: "hidden"}}>
            <motion.h1
            initial={{y: "90%"}}
            animate={{y: 0}}
            transition={{ease: "linear", duration: 0.6, delay: 0.6}}
            >Communication</motion.h1>
          </div>
        </div>
        <div className={style.downArrow}>
          <AiFillCaretDown />
        </div>
    </div>
  )
}

export default Hero