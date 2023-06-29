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

const ServicePageTestimonials = () => {

    const data = [
        { id: 0, author: "John Doe", comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam omnis autem dicta laborum delectus porro nesciunt vel aspernatur corporis ea? Dolorum numquam culpa voluptatibus minima temporibus corrupti quis maxime vero?" },
        { id: 1, author: "John Doe", comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam omnis autem dicta laborum delectus porro nesciunt vel aspernatur corporis ea? Dolorum numquam culpa voluptatibus minima temporibus corrupti quis maxime vero?" },
        { id: 2, author: "John Doe", comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam omnis autem dicta laborum delectus porro nesciunt vel aspernatur corporis ea? Dolorum numquam culpa voluptatibus minima temporibus corrupti quis maxime vero?" },
        { id: 3, author: "Saumitra Vilankar", comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam omnis autem dicta laborum delectus porro nesciunt vel aspernatur corporis ea? Dolorum numquam culpa voluptatibus minima temporibus corrupti quis maxime vero?" },
        { id: 4, author: "John Doe", comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam omnis autem dicta laborum delectus porro nesciunt vel aspernatur corporis ea? Dolorum numquam culpa voluptatibus minima temporibus corrupti quis maxime vero?" },

    ]

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
            <h1 className={'heading'}><span className={lilita.className}>Hear what our esteemed corporate clients have to say about us.</span></h1>
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
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default ServicePageTestimonials