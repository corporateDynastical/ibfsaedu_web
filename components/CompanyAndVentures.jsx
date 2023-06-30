import { Lilita_One } from "next/font/google";
import style from '@styles/CompanyAndVentures.module.scss'
import Image from 'next/image'
const lilita = Lilita_One({
    weight: "400",
    subsets: ['latin-ext']
})

const CompanyAndVentures = () => {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <h1 className={lilita.className}>Companies</h1>
                <div className={style.companies}>
                    <div className={style.topDiv}>
                        <div className={style.company}>
                            <Image src={'/assets/images/about.jpg'} alt='' fill />
                        </div>
                        <div className={style.company}>
                            <Image src={'/assets/images/about.jpg'} alt='' fill />
                        </div>
                        <div className={style.company}>
                            <Image src={'/assets/images/about.jpg'} alt='' fill />
                        </div>
                    </div>
                    <div className={style.bottomDiv}>
                        <div className={style.company}>
                            <Image src={'/assets/images/about.jpg'} alt='' fill />
                        </div>
                        <div className={style.company}>
                            <Image src={'/assets/images/about.jpg'} alt='' fill />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.right}>
                <h1 className={lilita.className}>Ventures</h1>
                <div className={style.ventures}>
                    <div className={style.venture}>
                        <Image src={'/assets/images/about.jpg'} alt='' fill />
                    </div>
                    <div className={style.venture}>
                        <Image src={'/assets/images/about.jpg'} alt='' fill />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyAndVentures