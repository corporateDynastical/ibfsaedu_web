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
      <br></br><br></br>
      <div className="space-y-2 w-full text-center">
        <CourseTitle title={'Curriculum'} tagline={''} />
      </div>

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



      <br></br>

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





      {/* Curriculum Section */}
      <div className='bg-contact bg-contain bg-center bg-no-repeat relative'>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h5 className="text-primary"><strong>Course Content</strong></h5>
          <br /><br />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="col-span-1 mb-3">
              <div className="card">
                <div className="card-body border-0">
                  <div>
                    <h5  className="text-primary text-green-600 font-semibold text-green-600 font-semibold"><b>A : Introduction to Banking</b></h5>
                    <br />
                    <ul className="list-disc pl-5">
                      <li>Role of Banks, Important principles of Bank.</li>
                      <li>Banking a business of trust. Products of Bank</li>
                      <li>RBI & Banking Regulations.</li>
                    </ul>
                  </div>
                  <div>
                    <br /><br />
                    <h5  className="text-primary text-green-600 font-semibold text-green-600 font-semibold"><b>B : Liability Products</b> </h5>
                    <br />
                    <ul className="list-disc pl-5">
                      <li>Current Accounts- Introduction to Current Account, CA variants</li>
                      <li>Saving Accounts, Benefits and features, Variants of Saving accounts.</li>
                      <li>Importance of bank Deposits for economy and banks, Major Liability products</li>
                    </ul>
                  </div>
                  <div>
                    <br />
                    <h5  className="text-primary text-green-600 font-semibold text-green-600 font-semibold"><b>C : Asset Products</b></h5>
                    <ul className="list-disc pl-5">
                      <li>Secured Assets-Home loan, Auto loan, Jewel loan, case studies</li>
                      <li>Unsecured Assets- Credit cards, Personal Loan & Education Loan</li>
                    </ul>
                  </div>
                  <div>
                    <br /><br />
                    <h5  className="text-primary text-green-600 font-semibold text-green-600 font-semibold"><b>D : Banking Sales & Relationship Managemen</b>t</h5>
                    <br />
                    <ul className="list-disc pl-5">

                      <li>Banking Sales - Acquisitions, Prospecting, Customer Profiling</li>
                      <li>Selling & Negotiation Skills - Lead Generation, Cross Selling & Up-Selling</li>
                      <li>Documentation requirement in case of Pvt Ltd, Partnership firms and LLP</li>
                      <li>Lead Generation</li>
                      <li>Sales Funnel</li>
                      <li>Market Scoping and importance of Area Mapping</li>
                      <li>Cold calling and appointment Fixing Scripts</li>
                      <li>Importance of OSV</li>
                      <li>Field Verification</li>
                      <li>FTR Concepts in sales</li>
                      <li>Relationship Management</li>
                      <li>Customer Service, Customer Service Skills & Complaint Handling</li>
                      <li>Fraud and Forgery</li>
                      <li>Money Laundering & Anti Money Laundering</li>


                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="card">
                <div className="card-body">
                  <div>

                    <h5  className="text-primary text-green-600 font-semibold text-green-600 font-semibold"> <b>E : Audit and Compliance</b></h5>
                    <ul className="list-disc pl-5">
                      <li>Regulatory compliance &amp; Audit, Banking Ombudsman Scheme, Benefits of RBIO scheme</li>
                      <li>Banking Code of conduct, RBI clean note policy, Security features of currency notes</li>
                      <li>KYC Guidelines for SB A/C ,Adherence to Process. AML frame work.</li>
                      <li>Why KYC? Re KYC. EDD Key indicators for suspicious activities.</li>
                      <li>Money laundering, Suspicious Transactions, Key Indicators, EDD</li>
                      <li>Customer due diligence Case studies Sourcing due diligence</li>

                    </ul>
                  </div>
                  <div>
                    <br />
                    <h5  className="text-primary text-green-600 font-semibold text-green-600 font-semibold"> <b>F : Digital Banking and Fintech</b></h5>
                    <ul className="list-disc pl-5">
                      <li>Soft Skills & Personality Development</li>
                      <li>Digital banking trends and innovations .</li>
                      <li>Role of fintech in retail banking.</li>
                      <li>Mobile banking and payment system.</li>

                    </ul>
                  </div>
                  <div>
                    <br />
                    <h5  className="text-primary text-green-600 font-semibold text-green-600 font-semibold"><b>G : Professional Excellence</b></h5>
                    <ul className="list-disc pl-5">
                      <li>Business Etiquettes, E-maiI Writing, Handling Inbound & Outbound Calls</li>
                      <li>Group Discussions</li>
                      <li>Role Plays</li>
                      <li>Resume Writing</li>
                      <li>Mock Interview</li>
                    </ul>
                  </div>
                  <div>
                    <Image src="/Curriculum01.png " alt="" />
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



  )


}






export default Contactnow
