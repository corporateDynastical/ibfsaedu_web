import { Lilita_One, Bebas_Neue } from 'next/font/google'
import style from '@styles/AboutPageTitle.module.scss'

const lilita = Lilita_One({
    weight: "400",
    subsets: ["latin"]
})

const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"]
})

const AboutPageTitle = () => {
    return (
        <div className={style.container}>
            <p className={bebas.className}>ABOUT</p>
            <h1 className={lilita.className}> <span>Dynastical </span> Communication</h1>
        </div>
    )
}

export default AboutPageTitle