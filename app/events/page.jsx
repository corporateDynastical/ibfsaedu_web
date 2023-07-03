import EventsPageHero from '@components/EventsPageHero'
import ServicePageContactForm from '@components/ServicePageContactForm'
import PageTitle from '@components/PageTitle'
import Slider from '@components/Slider'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageTitle subHeading={'We offer'} title1={'Events'} />
        <EventsPageHero />
        <ServicePageContactForm />
        <Slider />
    </div>
  )
}

export default page