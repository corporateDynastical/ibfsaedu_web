import Link from "next/link"
import CourseTitle from "./course-title"
import Courses from "./courses"
import { Button } from "./ui/button"
import Container from "./ui/container"
import scope_career from "./scope_career"
import Image from 'next/image';


const CourseSection = () => {
    return (
        <div className="py-20">
            <Container>
                <div className="space-y-2 w-full text-center">
                    <CourseTitle title={'Our Training Program'} tagline={'Unlock the Future of Banking.'} />
                </div>
                <div className="flex max-sm:flex-col items-center justify-center py-6 gap-4 sm:gap-9 sm:py-8 lg:py-10 xl:py-12 overflow-hidden">
                    <Courses />
                </div>
                <Link href={'/post-graduation-diploma-in-banking&finance'} className="w-full justify-center items-center flex">
                    <Button className="rounded-none w-[200px]" variant={'default'} size={'lg'} >Explore</Button>
                </Link>
            </Container>



            <br>
            </br>
            <br></br><br></br>
            <Container>
                <div className="space-y-2 w-full text-center">
                    <CourseTitle title={'Scope & Career'} tagline={''} />
                </div>



                {/* Scope & Career Section */}
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">


                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="col-span-1 mb-3">
                                <div className="card">
                                    <div className="card-body border-0">
                                        <div>
                                            <br />     <br />     <br />
                                            <div className="card-body border-0 bg-themeBlue text-white p-4">
                                                <br /> <p >1) The Banking sector offers Excellent Opportunities for career growth with various roles and
                                                    departments to choose from</p>
                                                <p>2) In the evolving digital world and the advent of the use of internet banking on a daily basis,
                                                    brings new opportunities to the table - be it customer relationships, customer experience,
                                                    technology and innovation, to name a few.</p><br />
                                            </div>
                                        </div>
                                    </div>
                                    <br /> <br />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="card">
                                    <div className="card-body d-flex justify-content-center align-items-center">
                                        <div>
                                            <Image src="/Scope&Career/Scope1.png" alt="image here" width="300" height="300" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <br /><br /><br />


                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <div className="card">
                                    <div className="card-body">
                                        <div>
                                            <Image src="/Scope&Career/Scope2.png" alt="image here" width="300" height="300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 mb-3">
                                <div className="card">
                                    <div className="card-body border-0">
                                        <div>

                                            <div className="card-body border-0 bg-themeBlue text-white p-4">
                                                <br /><p>3) Banks play crucial role in the economy, making it reliable industry even during challenging times. Working in this sector is an opportunity to contribute to the economy.
                                                </p>
                                                <p>4) Huge opportunity for a lifetime career as the Banking and Financial Services sector is evergreen and will continue to stay relevant in the country and also across the world.
                                                </p><br />



                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <br /><br /><br />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="col-span-1 mb-3">
                                <div className="card">
                                    <div className="card-body border-0">
                                        <div>
                                            <br />     <br />     <br />
                                            <div className="card-body border-0 bg-themeBlue text-white p-4">
                                                <br /> <p>5) Opportunity to travel and gain domestic as well as international exposure as most banks and financial service organizations have a wide network.
                                                </p>
                                                <p>6) Gain the added advantage of financial security and also enjoy many perks.</p><br />




                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="card">
                                    <div className="card-body">
                                        <div>
                                            <Image src="/Scope&Career/Scope3.png" alt="image here" width="300" height="300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br /><br /><br />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <div className="card">
                                    <div className="card-body">
                                        <div>
                                            <Image src="/Scope&Career/Scope4.png" alt="image here" width="300" height="300" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1 mb-3">
                                <div className="card">
                                    <div className="card-body border-0 bg-themeBlue text-white p-4">
                                        <div>
                                            <br />
                                            <div>
                                                <br />  <p> 7) Develop awesome interpersonal skills as you get an opportunity to interact with people from all walks of life across the country. 
</p>
                                                <br />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
                {/* End Curriculum Section */}

            </Container>
        </div>
    )
}

export default CourseSection