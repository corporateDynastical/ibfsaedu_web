"use client"
import React, { useEffect, useState } from 'react'
import { AiTwotoneStar } from 'react-icons/ai'
import { GrFormNext } from 'react-icons/gr'
import { GrFormPrevious } from 'react-icons/gr'

import { Lilita_One, Amatic_SC } from 'next/font/google'

const amatic_sc = Amatic_SC({
    weight: '700',
    subsets: ['latin'],
})

const lilita = Lilita_One({
    weight: "400",
    subsets: ['latin']
})

import '@styles/ServicePageTestimonials.scss'
import Image from 'next/image'

const ServicePageTestimonials = ({ title, tagline, testimonialData }) => {

    const data = testimonialData

    const [indexArr, setIndexArr] = useState([0, 1, 2, 3, 4]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndexArr(prevArr => {
                const shiftedArr = [...prevArr];
                shiftedArr.unshift(shiftedArr.pop());
                return shiftedArr;
            });
        }, 5000);

        return () => clearTimeout(timer);
    }, [indexArr]);

    const nextComment = () => {
        setIndexArr(prevArr => {
            const shiftedArr = [...prevArr];
            shiftedArr.unshift(shiftedArr.pop());
            return shiftedArr;
        });
    }

    const prevComment = () => {
        setIndexArr(prevArr => {
            const shiftedArr = [...prevArr];
            shiftedArr.push(shiftedArr.shift());
            return shiftedArr;
        });
    }

    return (
        <div className={'container'}>
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
            <h1 className={'heading'}>
                <span className={lilita.className}>{title}
                </span>
            </h1>
            <p className="tagline">{tagline}</p>
            <div className={'arrows'}>
                <div style={{ padding: "20px", background: "#fff", borderRadius: "50%", boxShadow: "-1px 1px 2px #000" }} className={'prevComment'} onClick={() => prevComment()}>
                    <GrFormPrevious style={{ color: "#018e9b" }} />
                </div>
                <div style={{ padding: "20px", background: "#fff", borderRadius: "50%", boxShadow: "1px 1px 2px #000" }} className={'nextComment'} onClick={() => nextComment()}>
                    <GrFormNext style={{ color: "#018e9b" }} />
                </div>
            </div>
            <div className={'testimonialsDiv'}>
                {indexArr.map((item, index) => {
                    console.log(item, index);
                    let className = "testimony";
                    if (item === 1) {
                        className = "testimony testimonyActive";
                    } else if (item === 2) {
                        className = "testimony testimonyRight";
                    } else if (item === 0) {
                        className = "testimony testimonyLeft";
                    } else className = "testimony";
                    return (
                        <div className={className}>
                            <h3 className={`${amatic_sc.className} author`}>{data[index].author}</h3>
                            <h6 className={`${amatic_sc.className} comment`}>{data[index].comment}
                            </h6>
                            <span className="stars">
                                <AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar />
                            </span>
                            <div className="picture">
                                <Image src={data[index].img} alt='dynastical testimonial' width={100} height={100} />
                            </div>
                            <p className='commenter'>{data[index].commenter}</p>
                        </div>
                    )
                })
                }
            </div>
            <div className='shape'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFDEDE" fillOpacity="1" d="M0,160L80,181.3C160,203,320,245,480,229.3C640,213,800,139,960,101.3C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </div>
        </div>
    )
}

export default ServicePageTestimonials