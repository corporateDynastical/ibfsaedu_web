import ContactForm from '@components/ContactForm'
import PageTitle from '@components/PageTitle'
import ServicePageHero from '@components/ServicePageHero'
import ServicePageTestimonials from '@components/ServicePageTestimonials'
import Slider from '@components/Slider'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageTitle subHeading={'We offer'} title1={'corporate'} title2={'solutions'} />
        <ServicePageHero />
        <ServicePageTestimonials />
        <ContactForm />
        <Slider />
    </div>
  )
}

export default page