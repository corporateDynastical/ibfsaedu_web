import { Lilita_One } from 'next/font/google'
import Image from 'next/image'
import style from '@styles/ServicePageHero.module.scss'

const lilita = Lilita_One({
    weight: "400",
    subsets: ['latin']
})

const ServicePageHero = () => {

    const data = [
        { title: "Brand Identity", href: "brandIdentity", tagline: "Lorem ipsum dolor sit amet consec", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?" },
        { title: "Repositioning Of Brand", href: "repositioningOfBrand", tagline: "Lorem ipsum dolor sit amet consec", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?" },
        { title: "Corporate Identity", href: "corporateIdentity", tagline: "Lorem ipsum dolor sit amet consec", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?" },
        { title: "Audio-Visuals", href: "audioVisuals", tagline: "Lorem ipsum dolor sit amet consec", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?" },
        { title: "Digital Marketing", href: "digitalMarketing", tagline: "Lorem ipsum dolor sit amet consec", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?" },
    ]

    return (
        <div className={style.container}>
            <div className={style.circle1}></div>
            <div className={style.circle2}></div>
            <div className={style.circle3}></div>
            <div className={style.circle4}></div>
            <div className={style.circle5}></div>
            <div className={style.circle6}></div>
            <div>
                <div className={style.strip}>
                    <div className={style.circle}></div>
                    <h1 className={`${style.title} ${lilita.className}`}>Brand Identity</h1>
                </div>
                <h2 className={style.tagline}>Lorem ipsum dolor sit amet consec</h2>
                <div className={style.data}>
                    <p className={style.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?</p>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Brand Identity" fill />
                    </div>
                </div>
            </div>
            <div>
                <div className={`${style.strip} ${style.reverse}`}>
                    <h1 className={`${style.title} ${lilita.className}`}>Repositioning Of Brand</h1>
                    <div className={style.circle}></div>
                </div>
                <h2 className={`${style.tagline} ${style.taglineEnd}`}>Lorem ipsum dolor sit amet consec</h2>
                <div className={style.data}>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Brand Identity" fill />
                    </div>
                    <p className={`${style.info} ${style.infoEnd}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?
                    </p>
                </div>
            </div>
            <div>
                <div className={style.strip}>
                    <div className={style.circle}></div>
                    <h1 className={`${style.title} ${lilita.className}`}>Corporate Identity</h1>
                </div>
                <h2 className={style.tagline}>Lorem ipsum dolor sit amet consec</h2>
                <div className={style.data}>
                    <p className={style.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?</p>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Brand Identity" fill />
                    </div>
                </div>
            </div>
            <div>
                <div className={`${style.strip} ${style.reverse}`}>
                    <h1 className={`${style.title} ${lilita.className}`}>Audio-Visuals</h1>
                    <div className={style.circle}></div>
                </div>
                <h2 className={`${style.tagline} ${style.taglineEnd}`}>Lorem ipsum dolor sit amet consec</h2>
                <div className={style.data}>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Brand Identity" fill />
                    </div>
                    <p className={`${style.info} ${style.infoEnd}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?
                    </p>
                </div>
            </div>
            <div>
                <div className={style.strip}>
                    <div className={style.circle}></div>
                    <h1 className={`${style.title} ${lilita.className}`}>Digital Marketing</h1>
                </div>
                <h2 className={style.tagline}>Lorem ipsum dolor sit amet consec</h2>
                <div className={style.data}>
                    <p className={style.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia commodi eos dolorem, doloremque totam natus ad nemo tenetur ducimus sit quia perspiciatis eius eligendi accusantium recusandae quaerat est accusamus quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore incidunt illum ullam totam ab maiores unde, minus itaque sint beatae quaerat id! Enim sed doloremque possimus alias, explicabo autem aspernatur?</p>
                    <div className={style.picture}>
                        <Image src='/assets/images/services/brand.png' alt="Brand Identity" fill />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicePageHero

