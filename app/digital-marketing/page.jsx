import ContactForm from '@components/ContactForm'
import DigitalMarketing from '@components/DigitalMarketing'
import PageTitle from '@components/PageTitle'
import Slider from '@components/Slider'
import Testimonial from '@components/Testimonial'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageTitle subHeading={'we offer'} title1={'digital'} title2={'marketing'} src={'/cartoons/digitalMarketing.jpeg'} />
        <DigitalMarketing />
        <Testimonial />
        <ContactForm />
        <Slider />
    </div>
  )
}

export default page