"use client"
import {motion} from "framer-motion"
import { Lilita_One } from "next/font/google";
import Image from 'next/image'
import Link from "next/link";
import style from '@styles/CompanyAndVentures.module.scss'

const lilita = Lilita_One({
    weight: "400",
    subsets: ['latin-ext']
})

const CompanyAndVentures = () => {

    const titleContent = "Companies & Ventures "
    const titleContentArr = Array.from(titleContent)

    return (
        <div className={style.container}>
            <motion.div drag whileDrag={{scale:1.2}} dragConstraints={{left: 50, right: 300, top:50, bottom: 300}} className={style.circle1}></motion.div>
            <motion.div drag whileDrag={{scale:1.2}} dragConstraints={{left: 50, right: 50, top:50, bottom: 50}} className={style.circle2}></motion.div>
            <motion.div drag whileDrag={{scale:1.2}} dragConstraints={{left: 50, right: 50, top:50, bottom: 50}} className={style.circle3}></motion.div>
            <motion.div drag whileDrag={{scale:1.2}} dragConstraints={{left: 50, right: 50, top:50, bottom: 50}} className={style.circle4}></motion.div>
            <div className={style.block}>
                <h1 className={`${lilita.className} ${style.title}`}>
                    <br />
                    {titleContentArr.map((item, index) => {
                        return (
                            <span key={index}
                                className={lilita.className}
                                style={{
                                    transform: `rotate(${(index * 5)}deg)`,
                                }}>
                                {item}
                            </span>
                        )
                    })}
                </h1>
            </div>
            <div className={style.logos}>
                <div className={style.top}>
                    <div className={style.picture}>
                        <Image src={'/assets/images/about.jpg'} alt="" fill />
                    </div>
                    <div className={style.picture}>
                        <Image src={'/assets/images/about.jpg'} alt="" fill />
                    </div>
                    <div className={style.picture}>
                        <Image src={'/assets/images/about.jpg'} alt="" fill />
                    </div>
                    <div className={style.picture}>
                        <Image src={'/assets/images/about.jpg'} alt="" fill />
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.picture}>
                        <Image src={'/assets/images/about.jpg'} alt="" fill />
                    </div>
                    <div className={style.picture}>
                        <Image src={'/assets/images/about.jpg'} alt="" fill />
                    </div>
                    <div className={style.picture}>
                        <Image src={'/assets/images/about.jpg'} alt="" fill />
                    </div>
                </div>
            </div>
            <Link href={'/companies-&-ventures/'} >View More</Link>
        </div>
    )
}

export default CompanyAndVentures