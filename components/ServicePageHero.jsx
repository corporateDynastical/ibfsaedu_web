"use client"
import { Bebas_Neue } from 'next/font/google'
import {FiChevronsDown} from 'react-icons/fi'
import { Link } from 'react-scroll'
import style from '@styles/ServicePageHero.module.scss'

const bebas = Bebas_Neue({
    weight: '400',
    subsets: ["latin"]
})

const ServicePageHero = () => {

    const data = [
        {title: "Brand Identity", href: "brandIdentity", content: "Lorem ipsum, dolor sit amet cons ectetur adipis icing elit. Explicabo ea impedit aspe rnatur laudanti um volupt atem dolorum a reici endis error dolorem eum cupiditate, nostrum assumenda? Amet molestias facilis, quam dicta enim suscipit!"},
        {title: "Repositioning Of Brand", href: "repositioningOfBrand", content: "Lorem ipsum, dolor sit amet cons ectetur adipis icing elit. Explicabo ea impedit aspe rnatur laudanti um volupt atem dolorum a reici endis error dolorem eum cupiditate, nostrum assumenda? Amet molestias facilis, quam dicta enim suscipit!"},
        {title: "Corporate Identity", href: "corporateIdentity", content: "Lorem ipsum, dolor sit amet cons ectetur adipis icing elit. Explicabo ea impedit aspe rnatur laudanti um volupt atem dolorum a reici endis error dolorem eum cupiditate, nostrum assumenda? Amet molestias facilis, quam dicta enim suscipit!"},
        {title: "Audio Visuals", href: "audioVisuals", content: "Lorem ipsum, dolor sit amet cons ectetur adipis icing elit. Explicabo ea impedit aspe rnatur laudanti um volupt atem dolorum a reici endis error dolorem eum cupiditate, nostrum assumenda? Amet molestias facilis, quam dicta enim suscipit!"},
        {title: "Digital Marketing", href: "digitalMarketing", content: "Lorem ipsum, dolor sit amet cons ectetur adipis icing elit. Explicabo ea impedit aspe rnatur laudanti um volupt atem dolorum a reici endis error dolorem eum cupiditate, nostrum assumenda? Amet molestias facilis, quam dicta enim suscipit!"},
    ]

  return (
    <div className={style.container}>
        <div className={style.cards}>
            {data.map((item,index)=>{
                return (
                    <Link to={item.href} spy={true} smooth={true} offset={-50} duration={500}>
                    <div key={index} className={style.cardDiv}>
                    <div className={style.card}>
                        <div className={style.front}>
                            <h1 className={bebas.className}>{item.title}</h1>
                            <button className={bebas.className}>Click ME</button>
                            <hr className={style.line} />
                        </div>
                        <div className={style.back}>
                            <p>
                            {item.content}
                            </p>
                            <div className={style.symbol}>
                                <FiChevronsDown />
                                <FiChevronsDown />
                                <FiChevronsDown />
                            </div>
                        </div>
                    </div>
                    </div>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default ServicePageHero