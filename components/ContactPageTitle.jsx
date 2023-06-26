"use client"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import style from '@styles/ContactPageTitle.module.scss'

const ContactPageTitle = () => {

    const [text] = useTypewriter({
        words: ['Namaste...', 'Hello...', 'Bonjour...'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80
    })

    return (
        <div className={style.container}>
            <h1 className={style.title}>
                {text}
            </h1>
        </div>
    )
}

export default ContactPageTitle