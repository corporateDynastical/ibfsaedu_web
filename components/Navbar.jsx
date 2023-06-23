"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {AiOutlineClose, AiOutlineMail, AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import  {IoMdCall} from 'react-icons/io'
import { motion } from 'framer-motion'
import style from '@styles/Navbar.module.scss'

const Navbar = () => {

  const [show, setShow] = useState(false)

  return (
    <>
    <div className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.left}>
          <div className={style.socialIcon}>
            <div>
            </div>
          </div>
          <div className={style.socialIcon}>
            <div>
            </div>
          </div>
          <div className={style.socialIcon}>
            <div>
            </div>
          </div>
          <div className={style.socialIcon}>
            <div>
            </div>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.headerItem}>
            <AiOutlineMail/> connectdynastical@gmail.com <span className='px-1'>|</span>
          </div>
          <Link href={'tel:+919175772356'} className={style.headerItem}>
            <IoMdCall/> +91 91757 72356 <span className='px-1'>|</span>
          </Link>
          <Link href={'tel:+918766962067'} className={style.headerItem}>
            <IoMdCall/> +91 87669 62067
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
        <div className={style.navBurger} onClick={()=>setShow(true)}>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
    {show &&
    <motion.div 
    animate={{y: [-800, 0]}}
    transition={{duration: 0.3, type: "tween", ease: "linear"}}
    className={style.menu}>
    <div className={style.menuContainer}>
        <div className={style.menuLeft}>
          <div className={style.col}>
            <div className={style.heading}>about</div>
            <hr className={style.line}/>
            <ul className={style.links}>
              <li><Link href={'/'}>About Company</Link></li>
              <li><Link href={'/'}>Our Founder & Team</Link></li>
            </ul>
          </div>
          <div className={`${style.col} ${style.colL}`}>
            <div className={`${style.heading}`}>Corporate Solutions</div>
            <hr className={style.line}/>
            <div className={style.corpMenu}>
              <ul className={style.links}>
                <li><Link href={'/'}>Brand Identity</Link></li>
                <li><Link href={'/'}>Repositioning of Brand</Link></li>
                <li><Link href={'/'}>Corporate Identities</Link></li>
                <li><Link href={'/'}>Audio Visuals</Link></li>
              </ul>
              <ul className={style.links}>
                <li><p>Digital Marketing</p></li>
                <li style={{marginLeft: "5px", listStyle: "circle", fontSize: "16px"}}><Link href={'/'}>digital marketing services</Link></li>
                <li style={{marginLeft: "5px", listStyle: "circle", fontSize: "16px"}}><Link href={'/'}>digital marketing services</Link></li>
                <li style={{marginLeft: "5px", listStyle: "circle", fontSize: "16px"}}><Link href={'/'}>digital marketing services</Link></li>
                <li style={{marginLeft: "5px", listStyle: "circle", fontSize: "16px"}}><Link href={'/'}>digital marketing services</Link></li>
              </ul>
            </div>
          </div>
          <div className={style.col}>
            <div className={style.heading}>Political Analysis</div>
            <hr className={style.line}/>
            <ul className={style.links}>
              <li><Link href={'/'}>Image Building</Link></li>
              <li><Link href={'/'}>Election Campaign</Link></li>
              <li><Link href={'/'}>Post Election Campaign</Link></li>
            </ul>
          </div>
          <div className={style.col}>
            <div className={style.heading}>Events</div>
            <hr className={style.line}/>
            <ul className={style.links}>
              <li><Link href={'/'}>Corporate Events</Link></li>
              <li><Link href={'/'}>Social Events</Link></li>
            </ul>
          </div>
          <div className={style.col}>
            <div className={style.heading}>Clients Testimonials</div>
            <hr className={style.line}/>
            <ul className={style.links}>
              <li><Link href={'/'}>Corporate Clients</Link></li>
              <li><Link href={'/'}>Political Clients</Link></li>
              <li><Link href={'/'}>Events Testimonials</Link></li>
            </ul>
          </div>
          <div className={style.col}>
            <Link href={'/'} className={style.heading}>home</Link>
            <hr className={style.line}/>
          </div>
          <div className={style.col}>
            <Link href={'/contact-us'} className={style.heading}>Contact</Link>
            <hr className={style.line}/>
          </div>
        </div>
        <div className={style.menuRight}>
          <div className={style.menuHeaderItem}>
            <AiOutlineMail/> connectdynastical@gmail.com
          </div>
          <Link href={'tel:+919175772356'} className={style.menuHeaderItem}>
            <IoMdCall/> +91 91757 72356
          </Link>
          <Link href={'tel:+918766962067'} className={style.menuHeaderItem}>
            <IoMdCall/> +91 87669 62067
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
    <div className={style.close} onClick={()=>setShow(false)}>
      <AiOutlineClose />
    </div>
    </motion.div>}
    </>
  )
}

export default Navbar