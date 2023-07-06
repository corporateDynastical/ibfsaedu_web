"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMail, AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdCall } from 'react-icons/io'
import { motion } from 'framer-motion'
import { Lilita_One } from 'next/font/google'
import style from '@styles/Navbar.module.scss'

const lilita = Lilita_One({
  weight: "400",
  subsets: ['latin']
})

const Navbar = () => {

  const [show, setShow] = useState(false)

  return (
    <>
      <div className={style.header}>
        <div className={style.headerContainer}>
          <div className={style.right}>
            <div className={style.headerItem}>
              <AiOutlineMail /> connectdynastical@gmail.com <span className='px-1'>|</span>
            </div>
            <Link href={'tel:+919175772356'} className={style.headerItem}>
              <IoMdCall /> +91 91757 72356 <span className='px-1'>|</span>
            </Link>
            <Link href={'tel:+918766962067'} className={style.headerItem}>
              <IoMdCall /> +91 87669 62067
            </Link>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.navContainer}>
          <div className={style.logo}>
            <Link href={'/'}>
              <div className={style.picture}>
                <Image fill src='/assets/images/main_logo.svg' alt='Dynastical Communication Logo' />
              </div>
            </Link>
          </div>
          <div className={style.socialIcons}>
            <Link target='_blank' href={'https://www.facebook.com/DynasticalCommunication/'}>
              <AiFillFacebook />
            </Link>
            <Link target='_blank' href={'https://twitter.com/Dynastical_Comm'}>
              <AiOutlineTwitter />
            </Link>
            <Link target='_blank' href={'https://www.instagram.com/dynasticalcommunication/'}>
              <AiFillInstagram />
            </Link>
            <Link target='_blank' href={"https://www.linkedin.com/company/dynastical-communication/about/"}>
              <AiFillLinkedin />
            </Link>
          </div>
          <div className={style.navBurger} onClick={() => setShow(true)}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
      <motion.div
        animate={{ y: show ? 0 : -1200 }}
        transition={{ duration: 0.8, type: "tween", ease: "easeOut" }}
        className={style.menu}>
        <div className={style.menuContainer}>
          <div className={style.menuLeft}>
            <div>
              <div className={style.col}>
                <Link onClick={() => setShow(false)} linkData={'Home'} href={'/'} className={`${style.heading} ${lilita.className}`}>Home</Link>
                <hr className={style.line} />
              </div>
              <div className={style.col}>
                <Link onClick={() => setShow(false)} linkData={'About'} href={'/about-us'} className={`${style.heading} ${lilita.className}`}>About</Link>
                <hr className={style.line} />
              </div>
            </div>
            <div className={`${style.col}`}>
              <div linkData={'Services'} className={`${`${style.heading} ${lilita.className}`}`}>Services</div>
              <hr className={style.line} />
              <div className={style.corpMenu}>
                <ul className={style.links}>
                  <li><Link onClick={() => setShow(false)} href={'/corporate-solutions'}>Corporate Solutions</Link></li>
                  <li><Link onClick={() => setShow(false)} href={'/political-analysis'}>Political Analysis</Link></li>
                  <li><Link onClick={() => setShow(false)} href={'/events'}>Events</Link></li>
                  <li><Link onClick={() => setShow(false)} href={'/digital-marketing'}>Digital Marketing</Link></li>
                </ul>
              </div>
            </div>
            <div className={style.col}>
              <div linkData={'Testimonial'} className={`${style.heading} ${lilita.className}`}>Testimonial</div>
              <hr className={style.line} />
              <ul className={style.links}>
                <li><Link onClick={() => setShow(false)} href={'/corporate-clients'}>Corporate Clients</Link></li>
                <li><Link onClick={() => setShow(false)} href={'/political-clients'}>Political Clients</Link></li>
              </ul>
            </div>
            <div className={style.col}>
              <div linkData={'Other'} className={`${style.heading} ${lilita.className}`}>Other</div>
              <hr className={style.line} />
              <ul className={style.links}>
                <li><Link onClick={() => setShow(false)} href={'/blogs'}>Blogs</Link></li>
                <li><Link onClick={() => setShow(false)} href={'/contact-us'}>Contact</Link></li>
                <li><Link onClick={() => setShow(false)} href={'/career'}>Career</Link></li>
              </ul>
            </div>
          </div>
          <div className={style.menuRight}>
            <div className={style.menuHeaderItem}>
              <AiOutlineMail /> connectdynastical@gmail.com
            </div>
            <Link href={'tel:+919175772356'} className={style.menuHeaderItem}>
              <IoMdCall /> +91 91757 72356
            </Link>
            <Link href={'tel:+918766962067'} className={style.menuHeaderItem}>
              <IoMdCall /> +91 87669 62067
            </Link>
            <div className={style.menuSocialIcons}>
              <Link target='_blank' href={'https://www.facebook.com/DynasticalCommunication/'}>
                <AiFillFacebook />
              </Link>
              <Link target='_blank' href={'https://twitter.com/Dynastical_Comm'}>
                <AiOutlineTwitter />
              </Link>
              <Link target='_blank' href={'https://www.instagram.com/dynasticalcommunication/'}>
                <AiFillInstagram />
              </Link>
              <Link target='_blank' href={"https://www.linkedin.com/company/dynastical-communication/about/"}>
                <AiFillLinkedin />
              </Link>
            </div>
          </div>
        </div>
        <div className={style.close} onClick={() => setShow(false)}>
          <AiOutlineClose />
        </div>
      </motion.div>
    </>
  )
}

export default Navbar