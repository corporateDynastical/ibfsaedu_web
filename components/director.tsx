"use client"

import { motion } from 'framer-motion'

import Container from '@/components/ui/container'


import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import '@/styles/feedback-carousel.css'



const AboutData = [
    {
        sentence: '   CHIEF EXECUTIVE OFFICER,  '
    },
    {
        sentence: '   Mr. Arvind Shete Ex. Chief Manager, ICICI Bank   '
    },
    {
        sentence: ' Mr . Arvind Shete is an Mcom, CAIIB with more than 36  years of experience  BFSI Industry. He has worked with  ICICI Bank (Chief Manager) . He has also led many transformational projects for leading BFSI companies as an independent Consultant  '
    },
    {
        sentence: 'Mr. Arvind is passionate about creating a skilled workforce for the BFSI sector, which is poised for massive growth in the coming decades and faces a perpetual shortage of competent professionals..'
    },
    {
        sentence: 'Mr Arvind  is a CEO in IBFSA, which works with BFSI firms in the area of Skilling and Capability enhancement of Staff and Process Transformation Projects.'
    },
    {
        sentence: '         We offer induction training programs for new hires in the Banking, Financial Services, and Insurance (BFSI) sector. Our training services are highly customizable and can be tailored to meet the specific needs of corporate clients.'
    },
    {
        sentence: 'Whether it be general training topics or more specific subjects, we have the capability and capacity to design and deliver effective training programs.'
    }
]

const director = () => {
    return (
        <div className='py-14 bg-slate-50'>
            <Container>
                <div className='space-y-6'>
                    <div className='flex items-center justify-center'>
                        <div className='flex-1 w-full max-lg:hidden'></div>
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{
                                once: true
                            }}
                            transition={{ ease: 'linear' }}
                            className='flex-[2] w-full h-full text-3xl md:text-6xl font-black text-themeColor'>
                          
                        </motion.div>
                    </div>
                    <div className='flex items-start justify-center text-sm'>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{
                                once: true
                            }}
                            transition={{ ease: 'linear', delay: 0.2 }}
                            className='flex-1 w-full h-full text-sm leading-8 text-themeBlue max-lg:hidden'><br />
                            <div className="flex-1 max-lg:min-w-full">
                                <div className="relative h-[50vh] sm:h-[70vh] lg:h-[30rem] w-full">
                                    <Image src={'/diphoto.png'} alt="founder" fill objectFit="cover" objectPosition="center" />
                                </div>
                            </div>
                        </motion.div>
                        <div className='flex-[2] w-full h-full'>
                            {AboutData.map((item, i) => (
                                <ul key={i}>
                                    <motion.li
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{
                                            once: true
                                        }}
                                        transition={{ ease: 'linear', delay: (i * 0.1) + 0.1 }}
                                        className='text-xs sm:text-sm text-justify max-sm:leading-6 sm:leading-8 first:pb-2 text-themeBlue'>{item.sentence}</motion.li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default director