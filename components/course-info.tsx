"use client"
import MissionVissionContent from "./mission-vission-content"
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from './ui/container';

import CourseTitle from "./course-title"
import Courses from "./courses"
import { Button } from "./ui/button"





const styles = {
  buttonContainer: {
    display: 'flex',
  },
  buttonSpace: {
    marginLeft: '100px', // Adjust the margin as needed
  },
  toggleButton: {
    backgroundColor: '#3498db', // Default background color
    color: '#fff', // Default text color
    padding: '10px 20px', // Adjust the padding as needed
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none',
  },
  activeButton: {
    backgroundColor: '#a9a9a9',
    // Active background color
  },
};



const CourseInfo = () => {
  const [showCourses, setShowCourses] = useState(true);
  const [showFeesStructure, setShowFeesStructure] = useState(false);

  return (
    <Container>
      <div style={styles.buttonContainer} className='flex items-center justify-center my-4'>
        <button
          style={{ ...styles.toggleButton, ...(showCourses ? styles.activeButton : {}) }}
          onClick={() => {
            setShowCourses(true);
            setShowFeesStructure(false);
          }}
        >
          Courses
        </button>
        <span style={styles.buttonSpace}></span>
        <button
          style={{ ...styles.toggleButton, ...(showFeesStructure ? styles.activeButton : {}) }}
          onClick={() => {
            setShowCourses(false);
            setShowFeesStructure(true);
          }}
        >
          Fees-Structure
        </button>
      </div>



      {/* Toggle buttons */}

      {/* Content based on the selected toggle */}
      {showCourses && (
        <div>
          {<div className='w-full flex max-lg:flex-col max-xl:gap-6 items-center justify-center py-10'>
            <div className='flex-1 flex items-center justify-center'>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{
                  once: true
                }}
                transition={{ ease: 'linear', delay: 0.2 }}
                className='sm:max-w-lg relative' >
                <Image src={'/about.jpg'} alt='' width={6841} height={5000} layout='responsive' />
              </motion.div>
            </div>
            <div className='flex-1'>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{
                  once: true
                }}
                transition={{ ease: 'linear', delay: 0.2 }}
                className='text-base leading-8 text-themeBlue'
              >
                Embark on a transformative journey with our{' '}
                <span className='text-lg font-bold text-themeColor'>
                  Post Graduation Certificate in Banking & Finance
                </span>
                , a 45-day virtual training program designed for graduates and professionals. With a focus on academic excellence, candidates with over 50% in 10th, 12th, and graduation, a valid PAN or Aadhaar card, a CIBIL score exceeding 700 or -1, and age below 28 are invited to apply. The selection process involves eligibility screening, a career advisory interview, admission formalities, fee payment, and culminates in a certification and job placement. Join us to gain industry-relevant skills, guided by expert faculty, and launch your successful banking career.
              </motion.p>
            </div>
          </div>}

        </div>
      )}
      {showFeesStructure && (
        <div>
          {



            <Container>
              <br></br><br></br>








              <div className="space-y-2 w-full text-center ">
                <CourseTitle title={'Program Details'} tagline={''} />
              </div>

              {/* 
                <div className="flex lg:flex-row flex-col-reverse items-center justify-center">
<div className="flex-5 lg:h-[80rem] ">
<div className="flex max-lg:py-14 justify-center items-center h-full">

    
       
        <img
  src="/fees.jpg" // Assuming your image is in the public folder and named "logo.png"
  alt="Your Alt Text"
  className="w-full h-full object-cover mt-12 ml-auto"
/>



        </div>
      </div>
    
    </div>
  */}



              {/*--  Program Details SECTION  */}

              <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                <h4 className="text-themeColor"><b>PROGRAM DETAILS</b></h4>

                  <div className="row">
                    <div className="col-sm-12 mb-3 mb-sm-0">
                      <div className="card">
                        <div className="card-body text-blue-XXX">
                          <br /><h2 className="text-themeColor"><b>Post Graduation Certificate In Banking and Finance</b></h2><br />
                          <p>PGCBF– Post Graduation Certificate in Banking &amp; Finance is a power-packed 45-day program offered by the Institute of   Banking and Finance Skills Academy. This program makes the candidate Job-ready in Retail Branch Banking of a Private Sector Bank or Financial Institution. This program is designed to nurture the competencies of working professionals and fresh graduates aspiring to work in the Private Banking Sector of India. This program also allows students to balance work-life challenges and professional commitments</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 mb-3 lg:mb-0">
                      <div className="card">
                        <div className="card-body">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col-span-1">
                          
                              <Image src="programdetailsimg/program_d1.png" alt="image here" className=" p-3 mx-auto w-45 h-45 object-cover" />
                            </div>

                            <div className="col-span-1">
                            
                              <div className="card"><br /><br /><br /><br /><br /><br />
                                <div className="card-body border-0 bg-themeBlue text-white p-4">
                                  
                                  <h5 className="text-primary"><b>Eligibility:</b> </h5><br />
                                  <p>Below 27 years of age at the time of admission.</p><hr />
                                  <p>Minimum 40% or above in the class 10th, 12th, <br />and Graduation / Post Graduation</p>
                                </div>
                              </div>
                              <div className="card mt-3">
                              <div className="card-body border-0 bg-themeBlue text-white p-4">
                                  <h5 className="text-primary"><b>Training Fee</b></h5>
                                  <p><b>20,000 /- <br></br></b> With GST Admission Process</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="card">
                        <div className="card-body">
                          <Image src="programdetailsimg/program_d2.png" alt="program image" className="w-full object-cover mt-12 mx-auto" />
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>






            </Container>}

        </div>
      )}
    </Container>
  );
}

export default CourseInfo;
