import ContactForm from '@components/ContactForm'
import DigitalMarketing from '@components/DigitalMarketing'
import PageTitle from '@components/PageTitle'
import ServicePageTestimonials from '@components/ServicePageTestimonials'
import Slider from '@components/Slider'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageTitle subHeading={'we offer'} title1={'digital'} title2={'marketing'} />
        <DigitalMarketing />
        <ServicePageTestimonials />
        <ContactForm />
        <Slider />
    </div>
  )
}

export default page