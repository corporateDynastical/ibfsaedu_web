"use client"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Lilita_One } from 'next/font/google'
import style from '@styles/ContactPageTitle.module.scss'

const lilita = Lilita_One({
    weight: "400",
    subsets: ['latin']
})

const ContactPageTitle = () => {

    const [text] = useTypewriter({
        words: ['Namaste . . .', 'Hello . . .', 'Bonjour . . .'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80
    })

    return (
        <div className={style.container}>
            <div className={`${style.left}`}>
                <h1 className={`${style.title} ${lilita.className}`}>
                    {text}
                </h1>
            </div>
            <div className={style.right}>
                <div className={style.outerCircle}>
                    <div className={style.innerCircle}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPageTitle