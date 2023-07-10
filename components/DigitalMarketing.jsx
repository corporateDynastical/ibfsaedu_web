import { Didact_Gothic } from 'next/font/google'
import Image from 'next/image'
import style from '@styles/DigitalMarketing.module.scss'

const didact = Didact_Gothic({
    weight: "400",
    subsets: ['latin']
})

const DigitalMarketing = () => {

    return (
        <div className={style.container}>
            <div>
                <div className={style.strip}>
                    <div className={style.circle}></div>
                    <h1 className={`${style.title} ${didact.className}`}>Search Engine  <span> Optimization </span></h1>
                </div>
                <h2 className={style.tagline}>Dominate Search Engines with Superior SEO!</h2>
                <div className={style.data}>
                    <p className={style.info}>Unlock the full potential of your online presence with our expert SEO services. Our team specializes in comprehensive SEO optimization, ensuring your website ranks high in search engine results. From on-page SEO strategies to off-page link building, we have you covered. We understand that SEO is not just a buzzword; it is the lifeline of your digital success. With our proven track record, we implement effective on-page SEO techniques, optimizing your website's content, meta tags, and structure. Our meticulous keyword research and analysis allow us to target the right audience, driving organic traffic to your site. Trust our SEO expertise to catapult your brand to the top of search engine rankings.</p>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Search Engine Optimization (SEO)" fill />
                    </div>
                </div>
            </div>
            <div>
                <div className={`${style.strip} ${style.reverse}`}>
                    <h1 className={`${style.title} ${didact.className}`}>Pay Per  <span> Click </span></h1>
                    <div className={style.circle}></div>
                </div>
                <h2 className={`${style.tagline} ${style.taglineEnd}`}>Boost Traffic, Boost Revenue with PPC Solutions!</h2>
                <div className={style.data}>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="PPC" fill />
                    </div>
                    <p className={`${style.info} ${style.infoEnd}`}>Supercharge your online advertising with our expert PPC services. Drive targeted traffic, boost conversions, and maximize ROI. Our certified professionals optimize campaigns with strategic keyword research, compelling ad copy, and effective bid management. Experience data-driven PPC solutions that deliver measurable results. From setup to monitoring, we've got you covered. Whether you're new to PPC or want to optimize campaigns, our tailored services fit any budget. Unlock your online advertising potential. Contact us for a free consultation and take your business to new heights with our result-oriented PPC services.
                    </p>
                </div>
            </div>
            <div>
                <div className={style.strip}>
                    <div className={style.circle}></div>
                    <h1 className={`${style.title} ${didact.className}`}> Website <span>  Development</span></h1>
                </div>
                <h2 className={style.tagline}>Fueling Your Web Marketing Journey!</h2>
                <div className={style.data}>
                    <p className={style.info}>We provide innovative website development solutions that drive results. Our team combines cutting-edge technology and creative design to captivate your audience and fuel business growth. With expertise in website marketing, social media marketing, internet marketing, and web marketing strategies, we maximize your online potential. Our approach includes responsive design, seamless navigation, and optimized content for enhanced user engagement and conversions. Whether you need a new website or a redesign. Partner with us to unlock the power of website marketing and elevate your online presence.</p>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Website Development" fill />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalMarketing

