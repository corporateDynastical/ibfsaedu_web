import CorpServices from '@components/CorpServices'
import PageTitle from '@components/PageTitle'
import ServicePageHero from '@components/ServicePageHero'
import ServicePageTestimonials from '@components/ServicePageTestimonials'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageTitle />
        <ServicePageHero />
        <ServicePageTestimonials />
    </div>
  )
}

export default page