import ContactForm from '@components/ContactForm'
import PageTitle from '@components/PageTitle'
import PoliticalPageHero from '@components/PoliticalPageHero'
import ServicePageTestimonials from '@components/ServicePageTestimonials'
import Slider from '@components/Slider'
import Testimonial from '@components/Testimonial'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageTitle subHeading={'We offer'} title1={'political'} title2={'analysis'} />
      <PoliticalPageHero />
      <Slider 
      title={'Our Political Clients'}
      href={'/political-clients'}
      onPage={true}
      data={
        [
          {
            src: "/assets/political/ravindra.png",
          },
          {
            src: "/assets/political/bapu_mankar.png",
          },
          {
            src: "/assets/political/ravindra_bhegade.png",
          },
          {
            src: "/assets/political/lahu.png",
          },
          {
            src: "/assets/political/umesh.png",
          },
          {
            src: "/assets/political/haribhau.png",
          },
          {
            src: "/assets/political/shelar.png",
          },
          {
            src: "/assets/political/ganesh.png",
          },
          {
            src: "/assets/political/aditya.png",
          },
          {
            src: "/assets/political/rajashree.png",
          },
          {
            src: "/assets/political/himali.png",
          },
          {
            src: "/assets/political/priyanka.png",
          },
        ]
      } />
      <Testimonial />
      <ContactForm />
    </div>
  )
}

export default page