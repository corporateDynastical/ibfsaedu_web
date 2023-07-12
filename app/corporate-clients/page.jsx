import ContactForm from '@components/ContactForm'
import PageTitle from '@components/PageTitle'
import CorpClientShowCase from '@components/CorpClientShowCase'
import React from 'react'
import Slider from '@components/Slider'
import CorpClientTestimonials from '@components/CorpClientTestimonials'

const page = () => {
  return (
    <div>
      <PageTitle subHeading={'Meet Our'} title1={'Corporate'} title2={'Clients'} src={'/cartoons/corporate.png'} />
      {/* <CorpClientShowCase /> */}
      {/* <CorpClientTestimonials /> */}
      <ContactForm />
      <Slider />
    </div>
  )
}

export default page