import { Didact_Gothic } from 'next/font/google'
import Image from 'next/image'
import style from '@styles/PoliticalPageHero.module.scss'

const didact = Didact_Gothic({
    weight: "400",
    subsets: ['latin']
})

const PoliticalPageHero = () => {

    return (
        <div className={style.container}>
            <div>
                <div className={style.strip}>
                    <div className={style.circle}></div>
                    <h1 className={`${style.title} ${didact.className}`}>Image <span> Building </span></h1>
                </div>
                <h2 className={style.tagline}>Shaping Political Futures, Making History!</h2>
                <div className={style.data}>
                    <p className={style.info}>As a leading provider of comprehensive political analysis services, we understand the importance of image building in the political landscape. Through our expertise, we help political clients shape a strong online presence. Using various social media platforms, we create engaging content tailored to their specific needs. From highlighting daily issues and political achievements to showcasing social and political activities, we ensure their message reaches the right audience. Our dedicated team leverages data-driven insights to develop effective strategies that drive engagement, enhance credibility, and foster meaningful connections. With expertise in digital marketing, we build a compelling image that resonates with constituents.</p>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Image Building" fill />
                    </div>
                </div>
            </div>
            <div>
                <div className={`${style.strip} ${style.reverse}`}>
                    <h1 className={`${style.title} ${didact.className}`}>Election <span> Campaign </span></h1>
                    <div className={style.circle}></div>
                </div>
                <h2 className={`${style.tagline} ${style.taglineEnd}`}>Campaign Smarter, Win Bigger!</h2>
                <div className={style.data}>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Election Campaign" fill />
                    </div>
                    <p className={`${style.info} ${style.infoEnd}`}>We specialize in leveraging the power of digital marketing to drive successful election campaigns. With our extensive research, we ensure targeted strategies that connect with voters on a deeper level. Our team of experts crafts compelling content that resonates with your audience, delivering your message effectively. We create captivating political advertisements that inspire action and maximize engagement. Through our data-driven digital marketing strategies, we amplify your online presence, boost voter outreach, and create meaningful connections. Trust us to fuel your campaign with the best research, content, and digital marketing expertise. Contact us to elevate your election campaign to new heights of success.
                    </p>
                </div>
            </div>
            <div>
                <div className={style.strip}>
                    <div className={style.circle}></div>
                    <h1 className={`${style.title} ${didact.className}`}><span> Post Election </span>  Campaign</h1>
                </div>
                <h2 className={style.tagline}>Lorem ipsum dolor sit amet consec</h2>
                <div className={style.data}>
                    <p className={style.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?</p>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Post Election Campaign" fill />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PoliticalPageHero

