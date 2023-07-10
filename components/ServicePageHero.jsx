import { Didact_Gothic } from 'next/font/google'
import Image from 'next/image'
import style from '@styles/ServicePageHero.module.scss'

const didact = Didact_Gothic({
    weight: "400",
    subsets: ['latin']
})

const ServicePageHero = () => {

    const data = [
        { title: "Brand Identity", href: "brandIdentity", tagline: "Lorem ipsum dolor sit amet consec", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?" },
        { title: "Repositioning Of Brand", href: "repositioningOfBrand", tagline: "Lorem ipsum dolor sit amet consec", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?" },
        { title: "Corporate Identity", href: "corporateIdentity", tagline: "Lorem ipsum dolor sit amet consec", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?" },
        { title: "Audio-Visuals", href: "audioVisuals", tagline: "Lorem ipsum dolor sit amet consec", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?" }
        // { title: "Digital Marketing", href: "digitalMarketing", tagline: "Lorem ipsum dolor sit amet consec", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?" },
    ]

    return (
        <div className={style.container}>
            <div>
                <div className={style.strip}>
                    <div className={style.circle}></div>
                    <h1 className={`${style.title} ${didact.className}`}>Brand <span> Identity </span></h1>
                </div>
                <h2 className={style.tagline}>Crafting Digital Legacies!</h2>
                <div className={style.data}>
                    <p className={style.info}>Specializing in online branding, we create powerful brand identities that resonate with your audience. From logos to brand voice, we develop unique and captivating identities. Our strategic approach leverages social media, web design, and content marketing to showcase your brand story. With deep industry understanding, we build cohesive online presence that aligns with your business goals. Trust our expertise to set you apart in the digital realm. Whether starting from scratch or revamping, we deliver results. Elevate your brand and connect meaningfully with customers.</p>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Brand Identity" fill />
                    </div>
                </div>
            </div>
            <div>
                <div className={`${style.strip} ${style.reverse}`}>
                    <h1 className={`${style.title} ${didact.className}`}> <span>Repositioning </span> Of Brand</h1>
                    <div className={style.circle}></div>
                </div>
                <h2 className={`${style.tagline} ${style.taglineEnd}`}>Let's break the mold & rewrite the story!</h2>
                <div className={style.data}>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Brand Identity" fill />
                    </div>
                    <p className={`${style.info} ${style.infoEnd}`}>In the dynamic marketplace, staying relevant and connecting with your target audience is vital. Our digital marketing and advertising agency specializes in strategic brand repositioning, revitalizing your brand identity. Through thorough research, we uncover opportunities to redefine your brand's messaging and design visually captivating elements. Leveraging our expertise in digital channels, we execute impactful campaigns that effectively reposition your brand. Whether it's a comprehensive rebranding effort or a realignment of brand perception, trust us to guide your brand towards a brighter future. Partner with us and embrace the power of repositioning to unlock new growth opportunities and connect with your audience in meaningful ways.
                    </p>
                </div>
            </div>
            <div>
                <div className={style.strip}>
                    <div className={style.circle}></div>
                    <h1 className={`${style.title} ${didact.className}`}>Corporate <span> Identity </span></h1>
                </div>
                <h2 className={style.tagline}>Fueling Corporate Brilliance!</h2>
                <div className={style.data}>
                    <p className={style.info}>Welcome to our Corporate Identity services, where we specialize in helping businesses establish a strong and impactful presence. Our digital marketing and advertising agency is dedicated to enhancing your corporate branding and image building efforts. We understand the significance of corporate identity in today's competitive landscape. With a strategic approach and creative expertise, we craft unique brand identities that resonate with your target audience and reflect your company's values. Our comprehensive solutions encompass logo design, brand guidelines, and consistent messaging across all touchpoints. Through our tailored strategies, we aim to excel in corporate image building and establish a compelling brand identity that sets you apart from the competition. Trust us to be your partner in corporate identity excellence.</p>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Brand Identity" fill />
                    </div>
                </div>
            </div>
            <div>
                <div className={`${style.strip} ${style.reverse}`}>
                    <h1 className={`${style.title} ${didact.className}`}>Audio - <span> Visuals </span></h1>
                    <div className={style.circle}></div>
                </div>
                <h2 className={`${style.tagline} ${style.taglineEnd}`}>Ignite Your Brands with Audio-Visual Impact!</h2>
                <div className={style.data}>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Brand Identity" fill />
                    </div>
                    <p className={`${style.info} ${style.infoEnd}`}>We have expertise in providing exceptional audio-visuals. As trusted audio-visual service providers, we offer comprehensive AV marketing strategies that effectively showcase your products and services. With cutting-edge technology and a creative approach, we transform your brand's message into captivating audio-visual experiences. From concept to distribution, our experienced team ensures seamless execution, delivering high-quality results. Partner with us, the industry-leading audio-visual providers, to enhance your brand's visibility through the power of audio-visual storytelling. Elevate your marketing efforts with our innovative audio-visual services. Contact us today for a transformative collaboration.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServicePageHero

