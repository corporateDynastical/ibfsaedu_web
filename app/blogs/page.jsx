import BlogPageHero from '@components/BlogPageHero'
import ServicePageContactForm from '@components/ServicePageContactForm'
import PageTitle from '@components/PageTitle'
import React from 'react'
import Slider from '@components/Slider'
import ContactForm from '@components/ContactForm'

const page = () => {
  return (
    <div>
        <PageTitle subHeading={'Explore'} title1={'Our'} title2={'Blogs'} />
        <BlogPageHero />
        <ContactForm />
        <Slider />
    </div>
  )
}

export default page