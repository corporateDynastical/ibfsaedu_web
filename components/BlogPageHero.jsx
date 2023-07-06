import { Lilita_One } from 'next/font/google'
import Link from 'next/link'
import style from '@styles/BlogPageHero.module.scss'

const lilita = Lilita_One({
    weight: "400",
    subsets: ['latin']
})

const BlogPageHero = () => {

    const data = [
        {
            href: "/blogs/blog-1",
            src: "/assets/images/corporate.jpg",
            alt: "Trendy Digital Marketing & Advertising",
            heading: "Unlock the Power of Trendy Digital Marketing & Advertising",
            date: "22 FEB 2023"
        },
        {
            href: "/blogs/blog-2",
            src: "/assets/images/political.jpg",
            alt: "Creative Graphic Designs",
            heading: "Bringing Your Ideas To Life With Creative Graphic Designs",
            date: "24 FEB 2023"
        },
        {
            href: "/blogs/blog-3",
            src: "/assets/images/events.jpg",
            alt: "Dynastical Holi Blog",
            heading: "Let's color your brand with confidence",
            date: "06 MAR 2023"
        },
    ]

    return (
        <div className={style.container}>
            <h1 className={`${style.title} ${lilita.className}`}>
                <span>Explore,</span>
                <span>Learn,</span>
                <span>Inspire,</span>
            </h1>
            <div className={style.blogs}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={style.blog}>
                            <Link href={item.href}>
                            <div className={style.heading}>
                                <h1>{item.heading}</h1>
                            </div>
                            <div className={style.date}>
                                <p>{item.date}</p>
                            </div>
                            </Link>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default BlogPageHero