import Image from 'next/image'
import { Didact_Gothic } from 'next/font/google'
import style from '@styles/CorpClientShowCase.module.scss'

const didact = Didact_Gothic({
    weight: "400",
    subsets: ['latin']
})

const CorpClientsShowCase = () => {

    const data = [
        {
            src: "/assets/images/about.jpg",
            name: "Royal Runbhumi Multisports Turf",
        },
        {
            src: "/assets/images/about.jpg",
            name: "Vedbrahma",
        },
        {
            src: "/assets/images/about.jpg",
            name: "Carnival Restaurant & Bar",
        },
        {
            src: "/assets/images/about.jpg",
            name: "Sadguru Solar",
        },
        {
            src: "/assets/images/about.jpg",
            name: "Pro Max",
        },
        {
            src: "/assets/images/about.jpg",
            name: "Right Foundation",
        },
        {
            src: "/assets/images/about.jpg",
            name: "Pune Studio",
        },
        {
            src: "/assets/images/about.jpg",
            name: "Excess Power Batteries",
        },
        {
            src: "/assets/images/about.jpg",
            name: "Tapas",
        },
        {
            src: "/assets/images/about.jpg",
            name: "OSM studio",
        },
        {
            src: "/assets/images/about.jpg",
            name: "Delilah kitchen & Bar",
        },
        {
            src: "/assets/images/about.jpg",
            name: "AK Realty",
        },
    ]

    return (
        <div className={style.container}>
            <h1 className={didact.className}>Our <span> Corporate </span>  Clients</h1>
            <div className={style.clients}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={style.client}>
                            <div className={style.picture}>
                                <Image src={item.src} alt={item.name} fill />
                            </div>
                            <div className={style.info}>
                                <p className={style.name}>{item.name}</p>
                                <p className={style.post}>{item.post}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CorpClientsShowCase