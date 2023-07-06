import AboutPageTitle from '@components/AboutPageTitle'
import AboutUsHero from '@components/AboutUsHero'
import ContactForm from '@components/ContactForm'
import ServicePageTestimonials from '@components/ServicePageTestimonials'
import Slider from '@components/Slider'
import React from 'react'

const page = () => {
  return (
    <div>
        <AboutPageTitle />
        <AboutUsHero />
        <ServicePageTestimonials />
        <ContactForm />
        <Slider />
    </div>
  )
}

export default page