import Image from 'next/image'
import { BsDashLg } from 'react-icons/bs'
import style from '@styles/ClientTestimonials.module.scss'

const ClientTestimonials = () => {

    const data = [
        {
            authorOne: "रविंद हेमराज धंगेकर", srcOne: "/assets/images/about.jpg", commentOne: "Lorem ipsum dolor sit amet conse ctetur adipis icing elit. Quidem sint quos soluta, quaerat, laborum conseq uatur debitis sed, sequi unde mollitia blanditiis volup tatem ex? Sint dolorum ut, delectus ipsum accusamus eaque. Lorem, ipsum dolor sit amet consec tetur adipi sicing elit. Officiis recusandae dolores assum enda nisi commodi! Quaerat accus antium volup tatem dolorem ad nam pariatur voluptatum, persp iciatis velit voluptas debitis, accusamus, perferendis maiores ipsum.",
            authorTwo: "रविंद हेमराज धंगेकर", srcTwo: "/assets/images/about.jpg", commentTwo: "Lorem ipsum dolor sit amet conse ctetur adipis icing elit. Quidem sint quos soluta, quaerat, laborum conseq uatur debitis sed, sequi unde mollitia blanditiis volup tatem ex? Sint dolorum ut, delectus ipsum accusamus eaque. Lorem, ipsum dolor sit amet consec tetur adipi sicing elit. Officiis recusandae dolores assum enda nisi commodi! Quaerat accus antium volup tatem dolorem ad nam pariatur voluptatum, persp iciatis velit voluptas debitis, accusamus, perferendis maiores ipsum."
        },
        {
            authorOne: "रविंद हेमराज धंगेकर", srcOne: "/assets/images/about.jpg", commentOne: "Lorem ipsum dolor sit amet conse ctetur adipis icing elit. Quidem sint quos soluta, quaerat, laborum conseq uatur debitis sed, sequi unde mollitia blanditiis volup tatem ex? Sint dolorum ut, delectus ipsum accusamus eaque. Lorem, ipsum dolor sit amet consec tetur adipi sicing elit. Officiis recusandae dolores assum enda nisi commodi! Quaerat accus antium volup tatem dolorem ad nam pariatur voluptatum, persp iciatis velit voluptas debitis, accusamus, perferendis maiores ipsum.",
            authorTwo: "रविंद हेमराज धंगेकर", srcTwo: "/assets/images/about.jpg", commentTwo: "Lorem ipsum dolor sit amet conse ctetur adipis icing elit. Quidem sint quos soluta, quaerat, laborum conseq uatur debitis sed, sequi unde mollitia blanditiis volup tatem ex? Sint dolorum ut, delectus ipsum accusamus eaque. Lorem, ipsum dolor sit amet consec tetur adipi sicing elit. Officiis recusandae dolores assum enda nisi commodi! Quaerat accus antium volup tatem dolorem ad nam pariatur voluptatum, persp iciatis velit voluptas debitis, accusamus, perferendis maiores ipsum."
        },
    ]
    return (
        <div className={style.container}>
            <div className={style.comments}>
                {data.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className={style.comment1}>
                                <div className={style.comment}>
                                    <div className={style.quoteStart}>
                                        <div className={style.picture}>
                                            <Image src={'/assets/quotation.png'} alt='quotes' fill />
                                        </div>
                                    </div>
                                    <p style={{ padding: "0 5vw", marginTop: "-30px" }}>
                                        {item.commentOne}
                                    </p>
                                    <div className={style.quoteEnd}>
                                        <div className={style.picture}>
                                            <Image src={'/assets/quotation.png'} alt='quotes' fill />
                                        </div>
                                    </div>
                                    <div className={style.author}>
                                        <BsDashLg />
                                        <p className={style.name}>{item.authorOne}</p>
                                        <div className={style.authorImg}>
                                            <Image src={item.srcOne} alt={item.authorOne} fill />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.comment2}>
                                <div className={style.comment}>
                                    <div className={style.quoteStart}>
                                        <div className={style.picture}>
                                            <Image src={'/assets/quotation.png'} alt='quotes' fill />
                                        </div>
                                    </div>
                                    <p style={{ padding: "0 5vw", marginTop: "-30px" }}>
                                        {item.commentTwo}
                                    </p>
                                    <div className={style.quoteEnd}>
                                        <div className={style.picture}>
                                            <Image src={'/assets/quotation.png'} alt='quotes' fill />
                                        </div>
                                    </div>
                                    <div className={style.author}>
                                        <BsDashLg />
                                        <p className={style.name}>{item.authorTwo}</p>
                                        <div className={style.authorImg}>
                                            <Image src={item.srcTwo} alt={item.authorTwo} fill />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ClientTestimonials