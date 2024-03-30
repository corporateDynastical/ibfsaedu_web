import { Mail, Phone } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link'
import { motion } from "framer-motion"
import React from 'react'
import Image from 'next/image';



import CourseTitle from "./course-title"
import Courses from "./courses"
import { Button } from "./ui/button"
import Container from "./ui/container"

const Contactnow = () => {
  return (




    <Container>



      {/* <div className="container mx-auto">
    <div className="flex w-full items-center justify-center">
        <div className="flex-[1.5] space-y-6">
            <h1 className="font-bold text-3xl text-blue-500 justify-center" style={{ marginLeft: '500px', fontSize: '3rem' }}>
                <strong style={{ color: 'blue' }}>
                    Course Content
                </strong>
            </h1>
        </div>
    </div>
</div> */}




      { /*       
<div className="flex lg:flex-row flex-col-reverse items-center justify-center">
<div className="flex-5 lg:h-[95rem] ">
<div className="flex max-lg:py-14 justify-center items-center h-full">



<img
src="curriculum.jpg" // Replace with your image URL
alt="Your Alt Text"
className="w-full h-full object-cover mt-12 ml-auto"
/>
</div>
</div>
</div> */}




      {/*--  Growth path  SECTION  */}




      <div className='bg-contact bg-contain bg-center bg-no-repeat relative'>
        <div className=" container-fluid bg-body-tertiary rounded-3">

          <div className="container-fluid py-5">

            <div className="relative">
              <Image src="/Growth/Growth3.png" alt="image here" className="w-1/2 right-20" />
              <p className="  absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2  px-4 py-2 text-success" style={{ marginLeft: '200px', textDecoration: 'underline' }}> Growth Path</p>
            </div>
            <div className="row">
              <div className="col-sm-12  mb-sm-0">
                <div className="card">
                  <div className="card-body ">
                    <div className="container">
                      <div className="row ">




                        {/* Regional Head */}
                        <div style={{ marginLeft: '1000px' }}>
                          <h4 >
                            <Image src="/Growth/Growth1.png" alt="image here" className="img-fluid p-3" style={{ width: '200px', height: '200px' }} />
                          </h4>
                        </div>




                        {/* Regional Head */}
                        <div>
                          <h4 style={{ marginLeft: '700px', textDecoration: 'underline' }}>Regional Head <b>20 LPA to 30 LPA</b>
                          </h4><br />
                        </div><br />


                        {/* Cluster Head */}
                        <div>
                          <h4 style={{ marginLeft: '575px', textDecoration: 'underline' }}>Cluster Head <b>15 LPA to 20 LPA</b>
                          </h4><br />
                        </div><br />


                        {/* Branch Manager */}
                        <div>
                          <h4 style={{ marginLeft: '450px', textDecoration: 'underline' }}>Branch Manager <b>09 LPA to 15 LPA</b>
                          </h4><br />
                        </div><br />


                        {/* Deputy Manager */}
                        <div>
                          <h4 style={{ marginLeft: '350px', textDecoration: 'underline' }}>Deputy Manager <b>05 LPA to 09 LPA</b>
                          </h4><br />
                        </div>
                      </div><br />


                      <div className="row">
                        {/* Assistant Manager */}
                        <div>
                          <h4 style={{ marginLeft: '250px', textDecoration: 'underline' }}>Assistant Manager <b>3.6 LPA to 05
                            LPA</b></h4><br />
                        </div><br />


                        {/* Senior Officer - BDM */}
                        <div>
                          <h4 style={{ marginLeft: '150px', textDecoration: 'underline' }}>Senior Officer - BDM <b>BDM 2.5 LPA to
                            3.6 LPA </b> </h4><br />
                        </div><br />


                        {/* Sales Officer - BDE */}
                        <div>
                          <h4 style={{ marginLeft: '50px', textDecoration: 'underline' }}>Sales Officer - BDE <b>1.8 LPA to 2.4
                            LPA</b></h4><br />
                        </div><br />



                        {/* bottom 
                      <div className="relative" style={{ marginLeft: '400px' }} >
                        <img src="Growth/Growth2.png" alt="image here" className=" p-3  w-1/2 right-10" />
                      </div>
                      */}



                        {/* bottom */}
                        <div className="relative"  >
                          <Image src="/Growth/Growth3.png" alt="image here" className=" p-3  w-1/2 right-10" />
                          <p className=" absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2  px-4 py-2 text-success" style={{ marginLeft: '200px', textDecoration: 'underline' }}>RECRUITMENT PARTNERS</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
      {/*--  End Growth path  SECTION  */}












      {/*--  Recruitment Team Location:  */}
      <div className="container py-4">
      </div>
      <div className="p-5 mb-4 bg-gray-200 rounded-lg">
        <div className="container-fluid py-5">
          <h4 className="text-lg font-semibold">Recruitment Team Location:</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
            <div className="col-md-2">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-green-600 font-semibold">MH</h4>
                <h6>Mumbai</h6>
              </div>
            </div>



            <div className="col-md-2">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-green-600 font-semibold">MH</h4>
                <h6>Kolhapur</h6>
              </div>
            </div>
            <div className="col-md-2">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-green-600 font-semibold">MH</h4>
                <h6>NAGPUR</h6>
              </div>
            </div>
            <div className="col-md-2">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-green-600 font-semibold">MP</h4>
                <h6>INDORE</h6>
              </div>
            </div>
            <div className="col-md-2">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-green-600 font-semibold">GJ</h4>
                <h6>AHMEDABAD</h6>
              </div>
            </div>
          </div>
          {/* Second set of cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
            <div className="col-md-2">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-green-600 font-semibold">RJ</h4>
                <h6> KOTA </h6>
              </div>
            </div>



            <div className="col-md-2">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-green-600 font-semibold">HR</h4>
                <h6> GURUGRAM </h6>
              </div>
            </div>
            <div className="col-md-2">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-green-600 font-semibold">DL</h4>
                <h6> NEW DELHI </h6>
              </div>
            </div>
            <div className="col-md-2">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-green-600 font-semibold">BH</h4>
                <h6> PATNA </h6>
              </div>
            </div>
            <div className="col-md-2">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-green-600 font-semibold">KA</h4>
                <h6> BELGAUM</h6>
              </div>
            </div>
          </div>



        </div>
      </div>
      {/*--  Recruitment Team Location:  */}

































    </Container>



  )


}






export default Contactnow
