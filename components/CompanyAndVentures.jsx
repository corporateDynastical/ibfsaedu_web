import { Lilita_One } from "next/font/google";
import style from '@styles/CompanyAndVentures.module.scss'
import Image from 'next/image'
import Link from "next/link";
const lilita = Lilita_One({
    weight: "400",
    subsets: ['latin-ext']
})

const CompanyAndVentures = () => {

    const titleContent = "Companies & Ventures "
    const titleContentArr = Array.from(titleContent)

    return (
        <div className={style.container}>
            <div className={style.block}>
                <h1 className={`${lilita.className} ${style.title}`}>
                    <br />
                    {titleContentArr.map((item, index) => {
                        return (
                            <span key={index}
                                className={lilita.className}
                                style={{
                                    transform: `rotate(${(index * 5)}deg)`,
                                }}>
                                {item}
                            </span>
                        )
                    })}
                </h1>
            </div>
            <div className={style.logos}>
                <div className={style.top}>
                    <div className={style.picture}>
                        <Image src={'/assets/images/about.jpg'} alt="" fill />
                    </div>
                    <div className={style.picture}>
                        <Image src={'/assets/images/about.jpg'} alt="" fill />
                    </div>
                    <div className={style.picture}>
                        <Image src={'/assets/images/about.jpg'} alt="" fill />
                    </div>
                    <div className={style.picture}>
                        <Image src={'/assets/images/about.jpg'} alt="" fill />
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.picture}>
                        <Image src={'/assets/images/about.jpg'} alt="" fill />
                    </div>
                    <div className={style.picture}>
                        <Image src={'/assets/images/about.jpg'} alt="" fill />
                    </div>
                    <div className={style.picture}>
                        <Image src={'/assets/images/about.jpg'} alt="" fill />
                    </div>
                </div>
            </div>
            <Link href={'/companies-&-ventures/'} className={lilita.className} >View More</Link>
        </div>
    )
}

export default CompanyAndVentures