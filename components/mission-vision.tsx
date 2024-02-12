
import MissionVissionContent from "./mission-vission-content"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import '@/styles/feedback-carousel.css'
import { Feedbacks } from '@/constants';
import Container from "@/components/ui/container";

const MissionVission = () => {
    return (
        <div className="lg:py-14">


            <Container>
                <div className="flex lg:flex-row flex-col items-center justify-center">
                    <div className="flex-1 max-lg:min-w-full">
                        <div className="relative h-[50vh] sm:h-[70vh] lg:h-[30rem] w-full">
                            <Image src={'/mission.jpg'} alt="mission" fill objectFit="cover" objectPosition="center" />
                        </div>
                    </div>
                    <div className="flex-1 lg:h-[30rem] bg-themeColor">
                        <div className="flex max-lg:py-14 justify-center items-center h-full">
                            <MissionVissionContent heading="Our Mission" content="IBFSA's mission is to provide affordable skill training, bridging industry skill gaps through a unique learning approach. We empower the nation's youth with high-quality content and extensive research, preparing them to meet the growing industry demands. Our dedication is to produce industry-ready professionals who adapt to the evolving BFSI sector. We are committed to both learner and industry success, contributing to the nation's economic growth and development." />
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col-reverse items-center justify-center">
                    <div className="flex-1 lg:h-[30rem] bg-themeBlue">
                        <div className="flex max-lg:py-14 justify-center items-center h-full">
                            <MissionVissionContent heading="Our Vision" content=" IBFSA's vision is to establish itself as the unrivalled leader in the BFSI Skill training domain, consistently delivering outstanding results. Our unwavering commitment is to serve all stakeholders with maximum efficiency. We aim to be a symbol of excellence, guiding both our learners and partners towards success in the industry. We endeavour to lead by example, setting new standards in BFSI skill training and shaping the future of the sector.   " />
                        </div>
                    </div>
                    <div className="flex-1 max-lg:min-w-full">
                        <div className="relative h-[50vh] sm:h-[70vh] lg:h-[30rem] w-full">
                            <Image src={'/vision.jpg'} alt="vission" fill objectFit="cover" objectPosition="center" />
                        </div>
                    </div>
                </div>
            </Container>




            <br>
            </br>
            <div className="container mx-auto">
                <div className="flex w-full items-center justify-center">
                    <div className="flex-[1.5] space-y-6">
                        <h1 className="font-bold text-5xl text-green-600 justify-center" style={{ marginLeft: '500px' }}>
                            <strong style={{ color: 'green' }}>
                                CEO & DIRECTOR
                            </strong>
                        </h1>
                    </div>
                </div>
            </div>


            <br></br>
            <Container>
                {/* 
                <div className="flex lg:flex-row flex-col-reverse items-center justify-center">
                    <div className="flex-5 lg:h-[90rem] bg-themeBlue">
                        <div className="flex max-lg:py-14 justify-center items-center h-full">



                          
         <img
            src="director.jpg" // Replace with your image URL
            //here we are adding director  about page link
            alt="Your Alt Text"
            className="w-full h-full object-cover mt-12 ml-auto"
          />
          
                        </div>
                    </div>
                </div>
*/}


                <div className="flex lg:flex-row flex-col items-center justify-center">
                    <div className="flex-1 max-lg:min-w-full">
                        <div className="relative h-[50vh] sm:h-[70vh] lg:h-[30rem] w-full">
                            <Image src={'/diphoto.png'} alt="founder" fill objectFit="cover" objectPosition="center" />
                        </div>
                    </div>


                    <div className="flex-1 lg:h-auto bg-themeBlue">
    <div className="flex flex-col justify-center h-full p-1 lg:py-1 lg:px-6">
        <MissionVissionContent
            heading="CHIEF EXECUTIVE OFFICER"
            content={`
                Mr. Arvind Shete<br>
                Ex. Chief Manager, ICICI Bank<br>
                
                Mr. Arvind Shete is an Mcom, CAIIB with more than 36 years of experience in the BFSI Industry. He has
                worked with ICICI Bank (Chief Manager). He has also led many transformational projects for leading BFSI
                companies as an Independent Consultant.
                
                Mr. Arvind is passionate about creating a skilled workforce for the BFSI sector, which is poised for
                massive growth in the coming decades and faces a perpetual shortage of competent professionals.
                
                Mr. Arvind is the CEO in IBFSA, which works with BFSI firms in the area of Skilling and Capability
                enhancement of Staff and Process Transformation Projects.
                
                We offer induction training programs for new hires in the Banking, Financial Services, and Insurance
                (BFSI) sector. Our training services are highly customizable and can be tailored to meet the specific
                needs of corporate clients. Whether it be general training topics or more specific subjects, we have the
                capability and capacity to design and deliver effective training programs.
            `}
               
                            />
                        </div>
                    </div>

                </div>


            </Container>














            <br>
            </br>
            <div className="container mx-auto">
                <div className="flex w-full items-center justify-center">
                    <div className="flex-[1.5] space-y-6">
                        <h1 className="font-bold text-5xl text-amber-600 justify-center" style={{ marginLeft: '550px' }}>

                        </h1>
                    </div>
                </div>
            </div>

            <br></br>

            <br>
            </br>
            <div className="container mx-auto">
                <div className="flex w-full items-center justify-center">
                    <div className="flex-[1.5] space-y-6">
                        <h1 className="font-bold text-5xl text-green-600 justify-center" style={{ marginLeft: '500px' }}>
                            <strong style={{ color: 'green' }}>
                                CORE TEAM
                            </strong>
                        </h1>
                    </div>
                </div>
            </div>

            <br></br>
        </div>





    )

}


export default MissionVission