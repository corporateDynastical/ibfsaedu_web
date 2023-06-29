"use client"

import { Lilita_One, Bebas_Neue } from 'next/font/google'
import Image from "next/image"
import { motion } from 'framer-motion'
import style from '@styles/PageTitle.module.scss'

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"]
})

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"]
})

const PageTitle = ({title1, title2}) => {

  return (
    <div className={style.container}>
      <div className={`${style.left}`}>
        <p className={`${style.headingOne} ${bebas.className}`}>We offer</p>
        <h1 className={lilita.className}>{title1} <br /> {title2}</h1>
      </div>
      <div className={style.right}>
        <div className={style.outerCircle}>
          <div className={style.innerCircle}>
          </div>
        </div>
        <hr className={style.line}/>
      </div>
    </div>
  )
}
export default PageTitle