import ContactForm from '@components/ContactForm'
import PageTitle from '@components/PageTitle'
import PoliticalPageHero from '@components/PoliticalPageHero'
import ServicePageTestimonials from '@components/ServicePageTestimonials'
import Slider from '@components/Slider'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageTitle subHeading={'We offer'} title1={'political'} title2={'analysis'} />
        <PoliticalPageHero />
        <ServicePageTestimonials />
        <ContactForm />
        <Slider />
    </div>
  )
}

export default page