"use client"
import Image from 'next/image'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Didact_Gothic } from 'next/font/google'
import style from '@styles/ContactPageTitle.module.scss'

const didact = Didact_Gothic({
    weight: "400",
    subsets: ['latin']
})

const ContactPageTitle = ({src}) => {

    const [text] = useTypewriter({
        words: ['Namaste . . .', 'Hello . . .', 'Bonjour . . .'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80
    })

    return (
        <div className={style.container}>
            <div className={style.circle2}>
                <div className={style.outerBorder}>
                    <div className={style.innerBorder}></div>
                </div>
            </div>
            <div className={style.left}>
                <h1 className={didact.className}>{text}</h1>
            </div>
            <div className={style.right}>
                <div className={style.picture}>
                    <Image src={src} alt="about dynastical" fill />
                </div>
            </div>
        </div>
    )
}

export default ContactPageTitle