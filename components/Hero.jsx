"use client"

import { Lilita_One, Bebas_Neue } from 'next/font/google'
import { useTypewriter } from 'react-simple-typewriter'
import Image from "next/image"
import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import Link from 'next/link'
import style from '@styles/Hero.module.scss'

const lilita = Lilita_One({
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
      <div className={style.circle}></div>
      <div className={style.circle2}></div>
      <div className={style.circle3}></div>
      <div className={`${style.left}`}>
        <p className={`${style.weAre} ${lilita.className}`}>we are</p>
        <h1 className={lilita.className}>Dynastical Communication</h1>
        <p className={`${style.tagline} ${lilita.className}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum autem nemo</p>
        <div className={style.logos}>
          <div className={style.logo}>
            <Link target='_blank' href={'https://www.facebook.com/DynasticalCommunication/'}>
              <FaFacebookF />
            </Link>
          </div>
          <div className={style.logo}>
            <Link target='_blank' href={'https://twitter.com/Dynastical_Comm'}>
            <FaTwitter />
            </Link>
          </div>
          <div className={style.logo}>
            <Link target='_blank' href={'https://www.instagram.com/dynasticalcommunication/'}>
            <FaInstagram />
            </Link>
          </div>
          <div className={style.logo}>
            <Link target='_blank' href={'https://www.linkedin.com/company/dynastical-communication/about/'}>
            <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.picture}>
          <Image fill src='/assets/images/hero/cartoon.png' alt="dynastical communication character" />
        </div>
        <h2 className={bebas.className}>We Do
          <span className='word ml-2'> {text} </span>
        </h2>
      </div>
      <div className={style.additonalRight}></div>
      <div className={style.botttomWave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260"><path
        fill='#f86c6c' style={{border: "1px solid #000",
        background: "#ffe978",
        background: "linear-gradient(310deg, #ffb066 0%, #ff867b 100%)"
        }}
        fill-opacity="1" d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,160C672,192,768,224,864,234.7C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>
      <div className={style.botttomWave2}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 250"><path fill="#FFDEDE" style={{textShadow: "1px 1px 3px #ff0000"}} fill-opacity="1" d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,160C672,192,768,224,864,234.7C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>
    </div>
  )
}

export default Hero