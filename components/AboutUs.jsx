import Image from 'next/image'
import Link from 'next/link'
import style from '@styles/AboutUs.module.scss'

const AboutUs = () => {

  return (
    <div className={style.container}>
        <div className={style.circle}></div>
        <div className={style.circle2}></div>
        <div className={style.circle3}></div>
        <div className={style.left}>
            <p className={style.headingOne}>We're Offering</p>
            <h1>Awesome Customer Services</h1>
            <p className={style.tagline}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className={style.info}>Dynastical Communication is a full-service digital marketing and advertising agency in Pune that helps businesses increase their online visibility and reach their target audience. With a team of experienced professionals, Dynastical Communication provides a range of services including SEO, PPC advertising, social media marketing, email marketing, content marketing, and website design and development. At Dynastical Communication, we believe that your digital dreams can become a reality with the right strategy and execution. So, join us and reign your digital kingdom with confidence!</p>
        </div>
        <div className={style.right}>
          <div className={style.leftBlocks}>
            <div className={style.block}>
               <div className={style.whiteDot1}></div>
               <div className={style.whiteDot2}></div>
               <div className={style.icon}>
               <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><path d="M87 481.8h73.7v-73.6H87zM25.4 346.6v61.6H87v-61.6zm466.2-169.7c-23-74.2-82.4-133.3-156.6-156.6C164.9-32.8 8 93.7 8 255.9h95.8c0-101.8 101-180.5 208.1-141.7 39.7 14.3 71.5 46.1 85.8 85.7 39.1 107-39.7 207.8-141.4 208v.3h-.3V504c162.6 0 288.8-156.8 235.6-327.1zm-235.3 231v-95.3h-95.6v95.6H256v-.3z"/></svg>
               </div>
               <h1>Coporate Solution</h1>
               <p>Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Culpa id ipsam consec tetur fugiat repellat repudi andae</p>
            </div>
          </div>
          <div className={style.rightBlocks}>
            <div className={style.block}>
               <div className={style.whiteDot1}></div>
               <div className={style.whiteDot2}></div>
               <div className={style.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><path d="M272 0h80c8.8 0 16 7.2 16 16V80c0 8.8-7.2 16-16 16H272v32H464c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32H240V16c0-8.8 7.2-16 16-16h16zM64 224h64V416h40V224h64V416h48V224h64V416h40V224h64V420.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512H32c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1V224z"/></svg>
               </div>
               <h1>Political Analysis</h1>
               <p>Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Culpa id ipsam consec tetur fugiat repellat repudi andae</p>
            </div>
            <div className={style.block}>
               <div className={style.whiteDot1}></div>
               <div className={style.whiteDot2}></div>
               <div className={style.icon}>
               <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 640 512"><path d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6zM544 320V176H496c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1H544zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>
               </div>
               <h1>Events</h1>
               <p>Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Culpa id ipsam consec tetur fugiat repellat repudi andae</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs