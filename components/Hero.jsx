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
          <div className={style.overlay}></div>
          <Image fill src='/assets/images/hero/cartoon.png' alt="dynastical communication character" />
        </div>
        <h2 className={bebas.className}>We Do
          <span className='word ml-2'> {text} </span>
        </h2>
      </div>
      <div className={style.additonalRight}></div>
      <div className={style.botttomWave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260"><path fill="rgb(253, 238, 219)" style={{border: "1px solid #000"}} fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,53.3C384,43,480,53,576,80C672,107,768,149,864,181.3C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <div className={style.botttomWave2}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 250"><path fill="#fff" style={{border: "1px solid #000"}} fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,53.3C384,43,480,53,576,80C672,107,768,149,864,181.3C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </div>
  )
}

export default Hero