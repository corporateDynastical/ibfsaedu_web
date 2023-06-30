import PageTitle from '@components/PageTitle'
import ServicePageHero from '@components/ServicePageHero'
import ServicePageTestimonials from '@components/ServicePageTestimonials'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageTitle title1={'corporate'} title2={'solutions'} />
        <ServicePageHero />
        <ServicePageTestimonials />
    </div>
  )
}

export default page