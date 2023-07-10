import EventsPageHero from '@components/EventsPageHero'
import ServicePageContactForm from '@components/ServicePageContactForm'
import PageTitle from '@components/PageTitle'
import Slider from '@components/Slider'
import React from 'react'
import ContactForm from '@components/ContactForm'

const page = () => {
  return (
    <div>
        <PageTitle subHeading={'We offer'} title1={'Events'} />
        <EventsPageHero />
        <ContactForm />
        <Slider />
    </div>
  )
}

export default page