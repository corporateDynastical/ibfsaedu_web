import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

import Container from '@/components/ui/container'
import Image from 'next/image'

const Footer = () => {
    
    return (
        <div className='bg-contact bg-contain bg-center bg-no-repeat relative'>
            <Container>
                <div className='grid sm:justify-items-center grid-cols-1 sm:grid-cols-3 py-10 sm:py-14 gap-5 sm:gap-10 tracking-wide relative z-[2]'>
                    <div className='my-4 space-y-4 flex justify-center items-center'>
                        <div className='w-[300px] relative'>
                            <Image src={'/logo_green.png'} alt='Ibfsa' width={120} height={120} layout='responsive'/>
                        </div>
                    </div>
                    <div className='my-4 space-y-4'>
                        <h1 className='font-bold text-2xl capitalize text-themeColor'>Important Links</h1>
                        <ul className='flex flex-col gap-2 text-themeBlue font-normal'>
                            <Link className='text-md hover:font-semibold hover:text-themeText pb-4 border-b border-themeBlue border-dashed' href={'/'}>Home</Link>
                            <Link className='text-md hover:font-semibold hover:text-themeText pb-4 border-b border-themeBlue border-dashed' href={'/about'}>About</Link>
                            <Link className='text-md hover:font-semibold hover:text-themeText pb-4 border-b border-themeBlue border-dashed' href={'/course'}>Course</Link>
                            
                            <Link className='text-md hover:font-semibold hover:text-themeText pb-4 border-b border-themeBlue border-dashed' href={'/curriculum'}>Curriculum</Link>
                            <Link className='text-md hover:font-semibold hover:text-themeText pb-4 border-b border-themeBlue border-dashed' href={'/path'}>Path</Link>
                            <Link className='text-md hover:font-semibold hover:text-themeText pb-4' href={'/contact'}>Contact</Link>
                        </ul>
                    </div>
                    <div className='my-4 space-y-4'>
                        <h1 className='font-bold text-2xl capitalize text-themeColor'>Contact Details</h1>
                        <div className='space-y-4'>
                            <Link href={'tel:+919970114143'} className='flex items-center justify-start w-full gap-2 hover:text-themeText text-themeBlue'>
                                <div className=''>
                                    <Phone className='w-5 h-5' />
                                </div>
                                <span className=''>
                                    +91 9970114143
                                </span>
                            </Link>
                            <Link href={'https://wa.me/+919970114143'} className='flex items-center justify-start w-full gap-2 hover:text-themeText text-themeBlue'>
                                <div className=''>
                                    <FaWhatsapp className='w-5 h-5 text-green-600' />
                                </div>
                                <span className=''>
                                    +91 9970114143
                                </span>
                            </Link>
                            <Link href={'mailto:info@ibfsaedu.com'} className='flex items-center justify-start w-full gap-2 hover:text-themeText text-themeBlue'>
                                <div className=''>
                                    <Mail className='w-5 h-5 text-themeColor' />
                                </div>
                                <span className=''>
                                    info@ibfsaedu.com
                                </span>
                            </Link>
                            <Link href={'mailto:support@ibfsaedu.com'} className='flex items-center justify-start w-full gap-2 hover:text-themeText text-themeBlue'>
                                <div className=''>
                                    <Mail className='w-5 h-5 text-themeColor' />
                                </div>
                                <span className=''>
                                    support@ibfsaedu.com
                                </span>
                            </Link>
                            <span className='flex items-start justify-start w-full gap-2 hover:text-themeText text-themeBlue'>
                                <div className='mt-1'>
                                    <MapPin className='w-5 h-5' />
                                </div>
                                <span className='flex-[2] text-sm'>
                                IBF, 3rd Floor, Rainbow Square, Indira Shankar Nagari, Paud Road, Kothrud, Pune 411038.
                                <Link href={'tel:+919561087770'} className='flex items-center justify-start w-full gap-2 hover:text-themeText text-themeBlue'>
                                <div className=''>
                                    <Phone className='w-5 h-5' />
                                </div>
                                <span className=''>
                                    +91 9561087770
                                </span>
                            </Link>

                                </span>
                              

                            </span>
                            <span className='flex items-start justify-start w-full gap-2 hover:text-themeText text-themeBlue'>
                                <div className='mt-1'>
                                    <MapPin className='w-5 h-5' />
                                </div>
                               
                                <span className='flex-[2] text-sm'>
                                Aryan Workspace-2, Gulbai Tekra Road, Ahmedabad(Gujrat), Pune 411038.
                                <Link href={'tel:+918007451005'} className='flex items-center justify-start w-full gap-2 hover:text-themeText text-themeBlue'>
                                <div className=''>
                                    <Phone className='w-5 h-5' />
                                </div>
                                <span className=''>
                                    +91 8007451005
                                </span>
                            </Link>


                                </span>
                              
                            </span>


                            <span className='flex items-start justify-start w-full gap-2 hover:text-themeText text-themeBlue'>
                                <div className='mt-1'>
                                    <MapPin className='w-5 h-5' />
                                </div>
                               
                                <span className='flex-[2] text-sm'>
                               Venus Corner, Matoshree Plazaa, Office No.302, Near Malabar & PNG Showroom, Kolhapur(Maharastra)
                               <Link href={'tel:+918007451005'} className='flex items-center justify-start w-full gap-2 hover:text-themeText text-themeBlue'>
                                <div className=''>
                                    <Phone className='w-5 h-5' />
                                </div>
                                <span className=''>
                                    +91 8007451005
                                </span>
                            </Link>

                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='bg-themeColor text-white font-normal text-md text-center w-full py-3 relative z-[2]'>
                <span>© {new Date().getFullYear()} Institute of Banking and Finance Skills Academy (IBFSA) All rights reserved.</span>
            </div>
            <div className='absolute w-full h-full bg-slate-50 top-0 left-0 opacity-20 z-1' />
        </div>
    )
}

export default Footer