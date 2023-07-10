import ClientsShowCase from '@components/ClientsShowCase'
import ContactForm from '@components/ContactForm'
import PageTitle from '@components/PageTitle'
import PoliticalClientTestimonials from '@components/PoliticalClientTestimonials'
import ServicePageContactForm from '@components/ServicePageContactForm'
import Slider from '@components/Slider'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageTitle subHeading={'meet our'} title1={'Political'} title2={'Clients'} />
        <ClientsShowCase />
        <PoliticalClientTestimonials />
        <ContactForm />
        <Slider />
    </div>
  )
}

export default page