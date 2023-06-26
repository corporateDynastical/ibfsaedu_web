"use client"

import { Kalam } from 'next/font/google'
import style from '@styles/CorpServices.module.scss'
import Image from 'next/image'
import { useRef } from 'react'
import CountUp from 'react-countup';
import { motion ,useInView } from 'framer-motion'

const ysabeau = Kalam({
  weight: "400",
  subsets: ["latin"]
})

const CorpServices = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})

  return (
    <div className={style.container}>
        <section id="brandIdentity" className={style.brandIdentity}>
          <h1>Brand Identity</h1>
          <div className={style.data}>
              <div className={`${style.left} ${ysabeau.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed possimus facilis iste culpa cupiditate eaque deleniti, ratione earum? Fuga error molestias, inventore recusandae veritatis iure sit nulla voluptatem quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim explicabo minus cupiditate officia saepe optio obcaecati? Neque eum vitae velit, soluta vero perspiciatis iste architecto dicta aspernatur facere voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quos, rem fugit dicta, aliquid placeat, laudantium alias provident facere necessitatibus sequi fuga molestias inventore laboriosam magni vitae quidem dolores odit? </div>
              <div className={style.right}>
              <div className={style.picture}>
                  <Image src="/assets/images/digiservice.png" alt='Branding Dynastical Communication' fill />
              </div>
              </div>
          </div>
        </section>
        <section id="repositioningOfBrand" className={style.repositioningOfBrand}>
          <h1>Repositioning Of Brand</h1>
          <div className={style.data}>
              <div className={style.right}>
                <div className={style.picture}>
                    <Image src="/assets/images/digiservice.png" alt='Branding Dynastical Communication' fill />
                </div>
              </div>
              <div className={`${style.left} ${ysabeau.className}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed possimus facilis iste culpa cupiditate eaque deleniti, ratione earum? Fuga error molestias, inventore recusandae veritatis iure sit nulla voluptatem quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim explicabo minus cupiditate officia saepe optio obcaecati? Neque eum vitae velit, soluta vero perspiciatis iste architecto dicta aspernatur facere voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quos, rem fugit dicta, aliquid placeat, laudantium alias provident facere necessitatibus sequi fuga molestias inventore laboriosam magni vitae quidem dolores odit?
              </div>
          </div>
        </section>
        <div ref={ref} className={style.countContainer}>
            <motion.div 
            animate={{x: isInView ? 0 : -500, opacity: isInView ? 1 : 0}}
            transition={{ease: "linear", type: "tween", duration: 1}}
            className={style.left}>
              <span>{isInView && <CountUp start={0} end={10} duration={2.5} delay={0} />} +</span>
              <p>Years of Experience</p>
            </motion.div>
            <motion.div 
            animate={{y: isInView ? 0 : 500, opacity: isInView ? 1 : 0}}
            transition={{ease: "linear", type: "tween", duration: 1}}
            className={style.center}>
              <span>{isInView && <CountUp start={0} end={10} duration={2.5} delay={0} />} +</span>
              <p>Years of Experience</p>
            </motion.div>
            <motion.div 
            animate={{x: isInView ? 0 : 500, opacity: isInView ? 1 : 0}}
            transition={{ease: "linear", type: "tween", duration: 1}}            
            className={style.right}>
              <span>{isInView && <CountUp start={0} end={10} duration={2.5} delay={0} />} +</span>
              <p>Years of Experience</p>
            </motion.div>
        </div>
        <section id="corporateIdentity" className={style.brandIdentity}>
          <h1>Corporate Identity</h1>
          <div className={style.data}>
              <div className={`${style.left} ${ysabeau.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed possimus facilis iste culpa cupiditate eaque deleniti, ratione earum? Fuga error molestias, inventore recusandae veritatis iure sit nulla voluptatem quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim explicabo minus cupiditate officia saepe optio obcaecati? Neque eum vitae velit, soluta vero perspiciatis iste architecto dicta aspernatur facere voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quos, rem fugit dicta, aliquid placeat, laudantium alias provident facere necessitatibus sequi fuga molestias inventore laboriosam magni vitae quidem dolores odit? </div>
              <div className={style.right}>
              <div className={style.picture}>
                  <Image src="/assets/images/digiservice.png" alt='Branding Dynastical Communication' fill />
              </div>
              </div>
          </div>
        </section>
        <section id="audioVisuals" className={style.repositioningOfBrand}>
          <h1>Audio Visuals</h1>
          <div className={style.data}>
              <div className={style.right}>
                <div className={style.picture}>
                    <Image src="/assets/images/digiservice.png" alt='Branding Dynastical Communication' fill />
                </div>
              </div>
              <div className={`${style.left} ${ysabeau.className}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed possimus facilis iste culpa cupiditate eaque deleniti, ratione earum? Fuga error molestias, inventore recusandae veritatis iure sit nulla voluptatem quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim explicabo minus cupiditate officia saepe optio obcaecati? Neque eum vitae velit, soluta vero perspiciatis iste architecto dicta aspernatur facere voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quos, rem fugit dicta, aliquid placeat, laudantium alias provident facere necessitatibus sequi fuga molestias inventore laboriosam magni vitae quidem dolores odit?
              </div>
          </div>
        </section>
        <section id="digitalMarketing" className={style.brandIdentity}>
          <h1>Digital Marketing</h1>
          <div className={style.data}>
              <div className={`${style.left} ${ysabeau.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed possimus facilis iste culpa cupiditate eaque deleniti, ratione earum? Fuga error molestias, inventore recusandae veritatis iure sit nulla voluptatem quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim explicabo minus cupiditate officia saepe optio obcaecati? Neque eum vitae velit, soluta vero perspiciatis iste architecto dicta aspernatur facere voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quos, rem fugit dicta, aliquid placeat, laudantium alias provident facere necessitatibus sequi fuga molestias inventore laboriosam magni vitae quidem dolores odit? </div>
              <div className={style.right}>
              <div className={style.picture}>
                  <Image src="/assets/images/digiservice.png" alt='Branding Dynastical Communication' fill />
              </div>
              </div>
          </div>
        </section>
    </div>
  )
}

export default CorpServices