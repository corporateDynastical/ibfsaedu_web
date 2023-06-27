import { Lilita_One } from 'next/font/google'
import style from '@styles/About.module.scss'
import Image from 'next/image'

const lili = Lilita_One({
  weight: "400",
  subsets: ["latin"]
})

const About = () => {
  return (
    <div className={style.container}>
        <div className={style.left}>
            <div className={style.colorDiv}></div>
            <div className={style.picture}>
                <Image src='/assets/images/about.jpg' alt='About Dynastical Communication' fill />
            </div>
        </div>
        <div className={style.right}>
            <p className={style.headingOne}>About Us</p>
            <h1 className={lili.className}>Welcome to Dynastical</h1>
            <p className={style.tagline}>Reign Your Digital Kingdom with Dynastical Communication</p>
            <p className={style.info}>Dynastical Communication is a full-service digital marketing and advertising agency in Pune that helps businesses increase their online visibility and reach their target audience. With a team of experienced professionals, Dynastical Communication provides a range of services including SEO, PPC advertising, social media marketing, email marketing, content marketing, and website design and development. At Dynastical Communication, we believe that your digital dreams can become a reality with the right strategy and execution. So, join us and reign your digital kingdom with confidence!</p>
        </div>
    </div>
  )
}

export default About